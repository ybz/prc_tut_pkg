// Generated by CoffeeScript 1.3.3
(function() {
  var Editor, LessonStep, LessonStepsCollection, ns, _base, _base1, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ns = (_ref = window.pp) != null ? _ref : window.pp = {};

  if ((_ref1 = (_base = window.pp).views) == null) {
    _base.views = {};
  }

  if ((_ref2 = (_base1 = window.pp).models) == null) {
    _base1.models = {};
  }

  ns.models.LessonStep = LessonStep = (function(_super) {

    __extends(LessonStep, _super);

    function LessonStep() {
      return LessonStep.__super__.constructor.apply(this, arguments);
    }

    LessonStep.prototype.defaults = function() {
      debugger;
    };

    return LessonStep;

  })(Backbone.Model);

  ns.models.LessonStepsCollection = LessonStepsCollection = (function(_super) {

    __extends(LessonStepsCollection, _super);

    function LessonStepsCollection() {
      return LessonStepsCollection.__super__.constructor.apply(this, arguments);
    }

    LessonStepsCollection.prototype.model = LessonStep;

    return LessonStepsCollection;

  })(Backbone.Collection);

  ns.views.Editor = Editor = (function(_super) {

    __extends(Editor, _super);

    function Editor() {
      return Editor.__super__.constructor.apply(this, arguments);
    }

    return Editor;

  })(Backbone.View);

}).call(this);
