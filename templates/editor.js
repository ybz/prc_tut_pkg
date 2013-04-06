(function(obj) {
    $(function() {
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/github");
        editor.getSession().setMode("ace/mode/html");
        editor.renderer.setShowGutter(false);

        var ns = {
            auto_update : true,
            loadPageInEditor : function loadPageInEditor(code) {
                editor.setValue(code);
            },

            findIFrame : function findIFrame() {
                return $('#stage')[0]
            },

            setStageContent : function setStageContent(content) {
                var ifr = this.findIFrame();
                var doc = ifr.contentWindow.document;
                doc.open('text/html', 'replace');
                doc.write(content);
                doc.close();
            },

            loadPage : function loadPage(params) {
                params = params || {};
                if (!params.page_code) {
                    throw new Error('missing page code');
                }
                this.loadPageInEditor(params.page_code);
            },

            getPageContent : function getPageContent() {
                return this.editor.getValue()
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
                editor.on('change', setup_change_timer);
            }

        };
        ns.editor = editor;
        ns.setupAutoUpdate(750);

        obj.pp = ns;
    });
})(window);
