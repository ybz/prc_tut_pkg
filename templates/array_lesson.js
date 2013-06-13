window.array_lesson={"stages": [{"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var back_color = 100;\n\n            p.noStroke();\n\n            function drawColor() {\n                p.fill(back_color);\n                p.rect(0, 0, p.width, p.height);\n            }\n\n            p.draw = function() {\n                var particle;\n                p.background(240, 240, 240);\n                drawColor();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./step_01.html"}}, {"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var back_color = 100;\n\n            p.noStroke();\n\n            function updateColor() {\n                if ((p.mouseX > 20) && (p.mouseX < p.width-20)) {\n                    back_color += 1.2;\n                } else {\n                    back_color -= 0.6;\n                }\n                if (back_color > 255) {\n                    back_color = 255;\n                }\n                if (back_color < 0) {\n                    back_color = 0;\n                }\n            }\n\n            function drawColor() {\n                p.fill(back_color);\n                p.rect(0, 0, p.width, p.height);\n            }\n\n            p.draw = function() {\n                var particle;\n                p.background(240, 240, 240);\n\n                updateColor();\n                drawColor();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./step_02.html"}}, {"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var color_1 = 100;\n            var color_2 = 150;\n\n            p.noStroke();\n\n            function updateColor() {\n                if ((p.mouseX > 20) && (p.mouseX < p.width/2)) {\n                    color_1 += 1.0;\n                } else {\n                    color_1 -= 0.6;\n                }\n                if (color_1 > 255) {\n                    color_1 = 255;\n                }\n                if (color_1 < 0) {\n                    color_1 = 0;\n                }\n                if ((p.mouseX > p.width/2) && (p.mouseX < p.width-20)) {\n                    color_2 += 1.2;\n                } else {\n                    color_2 -= 0.6;\n                }\n                if (color_2 > 255) {\n                    color_2 = 255;\n                }\n                if (color_2 < 0) {\n                    color_2 = 0;\n                }\n            }\n\n            function drawColor() {\n                p.fill(color_1);\n                p.rect(0, 0, p.width/2, p.height);\n                p.fill(color_2);\n                p.rect(p.width/2, 0, p.width/2, p.height);\n            }\n\n            p.draw = function() {\n                var particle;\n                p.background(240, 240, 240);\n\n                updateColor();\n                drawColor();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./step_03.html"}}, {"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var colors = [100, 150];\n\n            p.noStroke();\n\n            function getBarWidth() {\n                return p.width / colors.length;\n            }\n\n            function updateColors() {\n                var bar_width = getBarWidth();\n                for (var i=0; i < colors.length; i++) {\n                    if ((p.mouseX >= i * bar_width) && (p.mouseX < (i + 1) * bar_width)) {\n                        colors[i] += 1.5;\n                    } else {\n                        colors[i] -= 0.3;\n                    }\n                    if (colors[i] > 255) {\n                        colors[i] = 255;\n                    }\n                    if (colors[i] < 0) {\n                        colors[i] = 0;\n                    }\n                }\n            }\n\n            function drawColors() {\n                var bar_width = getBarWidth();\n                for (var i=0; i < colors.length; i++) {\n                    p.fill(colors[i]);\n                    p.rect(i*bar_width, 0, bar_width, p.height);\n                };\n            }\n\n            p.draw = function() {\n                p.background(240, 240, 240);\n\n                updateColors();\n                drawColors();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./step_04.html"}}, {"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var colors = [100, 200, 100, 120, 90, 50, 200,100];\n\n            p.noStroke();\n\n            function getBarWidth() {\n                return p.width / colors.length;\n            }\n\n            function updateColors() {\n                var bar_width = getBarWidth();\n                for (var i=0; i < colors.length; i++) {\n                    if ((p.mouseX >= i * bar_width) && (p.mouseX < (i + 1) * bar_width)) {\n                        colors[i] += 1.5;\n                    } else {\n                        colors[i] -= 0.3;\n                    }\n                    if (colors[i] > 255) {\n                        colors[i] = 255;\n                    }\n                    if (colors[i] < 0) {\n                        colors[i] = 0;\n                    }\n                }\n            }\n\n            function drawColors() {\n                var bar_width = getBarWidth();\n                for (var i=0; i < colors.length; i++) {\n                    p.fill(colors[i]);\n                    p.rect(i*bar_width, 0, bar_width, p.height);\n                };\n            }\n\n            p.draw = function() {\n                p.background(240, 240, 240);\n\n                updateColors();\n                drawColors();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./step_05.html"}}, {"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var colors = [100, 200, 100, 120, 90, 50, 200,100, 90, 90, 120, 40, 90];\n\n            p.noStroke();\n\n            function getBarWidth() {\n                return p.width / colors.length;\n            }\n\n            function updateColors() {\n                var bar_width = getBarWidth();\n                for (var i=0; i < colors.length; i++) {\n                    if ((p.mouseX >= i * bar_width) && (p.mouseX < (i + 1) * bar_width)) {\n                        colors[i] += 2.4;\n                    } else {\n                        colors[i] -= 0.3;\n                    }\n                    if (colors[i] > 255) {\n                        colors[i] = 255;\n                    }\n                    if (colors[i] < 0) {\n                        colors[i] = 0;\n                    }\n                }\n            }\n\n            function drawColors() {\n                var bar_width = getBarWidth();\n                for (var i=0; i < colors.length; i++) {\n                    p.fill(colors[i]);\n                    p.rect((i*bar_width) + 5, 0, bar_width - 5, p.height);\n                };\n            }\n\n            p.draw = function() {\n                p.background(240, 240, 240);\n\n                updateColors();\n                drawColors();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./excr_01.html"}}, {"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var y_positions = [100, 120, 150, 190, 180, 150, 120, 90, 110, 130, 200, 320, 310, 280];\n\n            p.fill(80, 120, 60);\n            p.noStroke();\n\n            function getBarWidth() {\n                return p.width / y_positions.length;\n            }\n\n            function drawCircles() {\n                var x;\n                var bar_width = getBarWidth();\n                for (var i=0; i < y_positions.length; i++) {\n                    x = bar_width * i - bar_width / 2;\n                    p.ellipse(x, y_positions[i], 8, 8);\n                };\n            }\n\n            p.draw = function() {\n                p.background(240, 240, 240);\n\n                drawCircles();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./excr_02.html"}}, {"code": {"content": "<!DOCTYPE html>\n<meta http-equiv=\"Content=Type\" content=\"text/html; charset=utf-8\">\n<html>\n    <head>\n        <title>JS</title>\n        <script type=\"text/javascript\" src=\"http://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n    </head>\n\n    <body>\n        <canvas id=\"main_canvas\" width=\"400\" height=\"400\"></canvas>\n        <script type=\"text/javascript\">\n            var canvas = document.getElementById('main_canvas');\n            var processingInstance = new Processing(canvas);\n            window.p = processingInstance;\n            p.size(400,400);\n            p.background(240, 240, 240);\n\n            var y_positions = [100, 120, 150, 190, 180, 150, 120, 90, 110, 130, 200, 320, 310, 280];\n\n            p.fill(80, 120, 60);\n            p.noStroke();\n\n            function getBarWidth() {\n                return p.width / y_positions.length;\n            }\n\n            function updateCircles() {\n                var bar_width = getBarWidth();\n                for (var i=0; i < y_positions.length; i++) {\n                    if ((p.mouseX >= i * bar_width) && (p.mouseX < (i + 1) * bar_width)) {\n                        y_positions[i] -= 4;\n                    } else {\n                        y_positions[i] += 0.3;\n                    }\n                    if (y_positions[i] > p.height) {\n                        y_positions[i] = p.height;\n                    }\n                    if (y_positions[i] < 0) {\n                        y_positions[i] = 0;\n                    }\n                }\n            }\n\n            function drawCircles() {\n                var x;\n                var bar_width = getBarWidth();\n                for (var i=0; i < y_positions.length; i++) {\n                    x = bar_width * i + bar_width / 2;\n                    p.ellipse(x, y_positions[i], 8, 8);\n                };\n            }\n\n            p.draw = function() {\n                p.background(240, 240, 240);\n\n                updateCircles();\n                drawCircles();\n            };\n\n            p.loop();\n\n        </script>\n    </body>\n</html>\n"}, "title": {"content": "From file: ./excr_03.html"}}]}