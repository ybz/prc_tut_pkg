(function(obj) {
    $(function() {
        var ns={};
        var editor = ns.editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/html");

        ns.loadPageInEditor = function loadPageInEditor(code) {
            editor.setValue(code);
        };

        ns.loadPage = function loadPage(params) {
            params = params || {};
            if (!params.page_code) {
                throw new Error('missing page code');
            }
            ns.loadPageInEditor(params.page_code);
        }

        obj.pp = ns;
    });
})(window);
