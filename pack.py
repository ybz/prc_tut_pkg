import os
import sys
import json

def build_stage_for_file(file_path):
    ret = {
        'code' : {},
        'title' : {
            'content' : "From file: %s" % file_path
        }
    }
    ret['code']['content'] = open(file_path, 'r').read()
    return ret

def build_json_for_files(file_paths):
    ret = {}
    ret['stages'] = stages = []
    for file_path in file_paths:
        stages.append(build_stage_for_file(file_path))
    return json.dumps(ret)

if len(sys.argv) > 1:
    look_path = sys.argv[1]
    if not os.path.isdir(look_path):
        print 'not a directory'
        sys.exit(1)
    step_files = sorted([f_name for f_name in os.listdir(look_path) if f_name.startswith('step') and f_name.endswith('html')])
    excr_files = sorted([f_name for f_name in os.listdir(look_path) if f_name.startswith('excr') and f_name.endswith('html')])
    html_files = step_files + excr_files
    html_files = [os.path.join(look_path, f_name) for f_name in html_files]
    print build_json_for_files(html_files)

