(function(obj) {
    $(function() {
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/github");
        editor.getSession().setMode("ace/mode/html");
        editor.renderer.setShowGutter(false);

        var ns = {
            loadPageInEditor : function loadPageInEditor(code) {
                editor.setValue(code);
            },

            findIFrame : function findIFrame() {
                return $('#stage')[0]
            },

            setStageContent : function setStageContent(content) {
                var ifr = this.findIFrame();
                var doc = ifr.contentWindow.document
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
            }

        };
        ns.editor = editor;

        obj.pp = ns;
    });
})(window);
