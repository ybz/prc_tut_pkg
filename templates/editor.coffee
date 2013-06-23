ns = window.pp ?= {}
window.pp.views ?= {}
window.pp.models ?= {}

ns.models.LessonStep = class LessonStep extends Backbone.Model
    defaults :
        return {
            code :
                content : ""
                markers : []
            title :
                content : ""
        }

ns.models.LessonStepsCollection = class LessonStepsCollection extends Backbone.Collection
    model : LessonStep

_.extend ns.views, {
    StepEdit : class StepEdit extends Backbone.View

    StepListView : class StepListView extends Backbone.View

    Editor : class Editor extends Backbone.View
        className : "lesson_editor"
        initialze : ->
            @initViews()
            @render()
        initViews : ->
            @step_edit_view = new StepEdit()
            @list_view = new StepListView()
            return
        render : ->
}

