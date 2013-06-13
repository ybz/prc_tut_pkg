(function(obj) {
    $(function() {
        var code_editor = ace.edit("code_editor");
        var cached_title_el;
        var AceRange = ace.require("ace/range").Range;
        var LESSON_MARKER_CLASS = "lesson_marker";
        var current_markers = [];
        var auto_remove;
        var iframe_running_id = 1;
        code_editor.setTheme("ace/theme/github");
        code_editor.getSession().setMode("ace/mode/html");
        code_editor.renderer.setShowGutter(false);

        var ns = {
            auto_update : true,
            loadCodeInEditor : function loadCodeInEditor(code, params) {
                var that = this;
                if (!params) {
                    params = {};
                }
                code_editor.setValue(code);
                code_editor.clearSelection();
                code_editor.getSession().on("change", function() {
                    that.considerRemoveMarkers();
                });
                scroll_row = params.scroll_row || 0;
                code_editor.scrollToRow(scroll_row);
            },

            findIFrameWrapper : function findIFrameWrapper() {
                return $('.stage_wrapper')
            },

            setStageContent : function setStageContent(content) {
                wrapper = this.findIFrameWrapper();
                wrapper.empty();
                iframe = $('<iframe id="stage_' + this.iframe_running_id + '" src="about:blank"></iframe>');
                wrapper.append(iframe);
                var doc = iframe[0].contentWindow.document;
                doc.open('text/html', 'replace');
                doc.write(content);
                doc.close();
                iframe_running_id += 1;
            },

            loadPage : function loadPage(params) {
                params = params || {};
                auto_remove = false;
                this.removeMarkers();
                if (!(params.code && params.code.content)) {
                    throw new Error('missing page code');
                }
                this.loadCodeInEditor(params.code.content);
                if (params.title) {
                    this.loadTitle(params.title);
                } else {
                    this.loadTitle();
                }
                if (params.code.markers) {
                    this.loadCodeMarkers(params.code.markers);
                }
                auto_remove = true;
            },

            getTitleEl : function getTitleEl() {
                if (!cached_title_el) {
                    cached_title_el = $('.instruction_text');
                }
                return cached_title_el
            },

            loadTitle : function loadTitle(title) {
                if (!title) { title = {}; }
                var title_el = this.getTitleEl();
                var rtl = title.direction == 'rtl';
                title_el.find('.content').html(title.content || "");
                title_el.toggleClass('rtl', rtl);
            },

            removeMarkers : function removeMarkers() {
                session = code_editor.getSession();
                for (var i=0; i < current_markers.length; i++) {
                    session.removeMarker(current_markers[i]);
                }
                current_markers = [];
            },

            considerRemoveMarkers : function considerRemoveMarkers() {
                if (!auto_remove) {
                    return
                }
                this.removeMarkers();
            },

            loadCodeMarkers :  function loadCodeMarkers(markers_list) {
                var range;
                var m;
                var m_id
                var session = code_editor.getSession();
                for (var i=0; i < markers_list.length; i++) {
                    m = markers_list[i];
                    range = new AceRange(m[0], m[1], m[2], m[3]);
                    m_id = session.addMarker(range, LESSON_MARKER_CLASS, "lesson_marker");
                    current_markers.push(m_id);
                }
            },
            getPageContent : function getPageContent() {
                return this.code_editor.getValue()
            },

            updateStageFromPage : function updateStageFromPage() {
                this.setStageContent(this.getPageContent());
            },

            setupAutoUpdate : function setupAutoUpdate(change_interval) {
                var timer;
                var that = this;
                clear_timer = function() {
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                };
                change_func = function() {
                    clear_timer();
                    that.updateStageFromPage();
                };
                setup_change_timer = function() {
                    clear_timer();
                    timer = setTimeout(change_func, change_interval);
                };
                code_editor.on('change', setup_change_timer);
            }

        };
        ns.code_editor = code_editor;
        ns.setupAutoUpdate(250);

        obj.pres_tools = obj.pres_tools || {};
        obj.pres_tools.presenter = ns;
    });
})(window);
