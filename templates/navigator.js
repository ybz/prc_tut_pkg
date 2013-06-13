(function(obj) {
    var LEFT_ARROW = 37;
    var RIGHT_ARROW = 39;
    var Navigator = function Navigator(element, presenter) {
        that = this;
        this.$el = el = $(element);
        this.presenter = presenter;
        this.lesson_data = {};
        this.current_item_index = null;
        el.addClass('navigator');
        this.$controls = $('<div class="controls"></div>');
        el.append(this.$controls);
        this.updateControls();
        this.$controls.on('click', 'li', function(ev) {
            that.onItemClick(ev);
        });
        this.$controls.on('click', '.button', function(ev) {
            that.onButtonClick(ev);
        });
        $(document).on('keydown', function(ev) {
            that.onKeyDown(ev);
        });
    };
    Navigator.prototype = {
        loadLessonData : function loadLessonData(lesson_data) {
            this.lesson_data = lesson_data;
            this.updateNavDir();
            this.updateControls();
            this.navigateTo(0);
        },
        updateNavDir : function updateNavDir() {
            this.nav_rtl = false;
            var stages = this.lesson_data.stages;
            if (stages && stages.length) {
                for (var i=0; i<stages.length; i++) {
                    if (stages[i].direction = 'rtl') {
                        this.nav_rtl = true;
                        return
                    }
                };
            };
        },
        updateControls : function updateControls() {
            var $nav_button_list;
            this.$controls.empty();
            if ((this.lesson_data.stages) && (this.lesson_data.stages.length > 2)) {
                this.$controls.append('<div class="prev button">&lt;</div>');
                $nav_button_list = $('<ul class="nav_button_list"></ul>');
                this.$controls.append($nav_button_list);
                this.$controls.toggleClass('rtl', this.nav_rtl);
                for (var i=0; i < this.lesson_data.stages.length; i++) {
                    $nav_button_list.append('<li></li>');
                }
                this.$controls.append('<div class="next button">&gt;</div>');
            }
        },
        navigateTo : function navigateTo(index) {
            if (!this.lesson_data.stages || index < 0 || index > this.lesson_data.stages.length) { return }
            this.presenter.loadPage(this.lesson_data.stages[index]);
            this.current_item_index = index;
            items = this.$controls.find('li');
            items.removeClass('current');
            items.eq(index).addClass('current');
        },
        navigateRelative : function navigateRelative(named_dir) {
            var dir = named_dir == 'left' ? -1 : 1;
            if (this.nav_rtl) {
                dir *= -1;
            }
            var lessons_count = this.lesson_data.stages.length
            var new_index;
            if (this.current_item_index != null) {
                new_index = (this.current_item_index + lessons_count + dir) % lessons_count
            } else {
                new_index = 0;
            }
            this.navigateTo(new_index);
        },
        onItemClick : function onItemClick(ev) {
            var item = $(ev.currentTarget);
            var all_items = this.$controls.find('li');
            var index = all_items.index(item);
            this.navigateTo(index);
        },
        onButtonClick : function onButtonClick(ev) {
            button = $(ev.currentTarget);
            var dir = button.hasClass('prev') ? 'left' : 'right'
            this.navigateRelative(dir);
        },
        onKeyDown : function onKeyDown(ev) {
            if (ev.ctrlKey) {
                if (ev.keyCode == LEFT_ARROW) {
                    this.navigateRelative('left');
                }
                if (ev.keyCode == RIGHT_ARROW) {
                    this.navigateRelative('right');
                }
            }
        }
    };
    obj.pres_tools = obj.pres_tools || {};
    obj.pres_tools.Navigator = Navigator;
})(window);
