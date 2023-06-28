import os
import re

def remove_comments(js_code):
    # Remove single-line comments
    js_code = re.sub(r'\/\/.*', '', js_code)
    
    # Remove multi-line comments
    js_code = re.sub(r'\/\*[\s\S]*?\*\/', '', js_code)
    
    return js_code

def remove_orphaned_semicolons(js_code):
    # Remove orphaned semicolons at the beginning of a line
    js_code = re.sub(r'^(?<![\S\n\r])(;)+', '', js_code, flags=re.MULTILINE)
    
    return js_code

def remove_string(js_code, string_to_remove):
    # Remove the specified string
    js_code = js_code.replace(string_to_remove, '')
    
    return js_code

def replace_empty_lines(js_code):
    # Replace empty lines and lines with a single semicolon with a line break
    js_code = re.sub(r'^\s*(?:;|\r?\n)', '\n', js_code, flags=re.MULTILINE)
    
    return js_code

# Specify the JavaScript file path
js_file_path = 'dist/bundle.js'

# Read the JavaScript file
with open(js_file_path, 'r') as file:
    js_code = file.read()

# Define the string to remove
string_to_remove = 'var __webpack_exports__ = {};'

# Remove comments from JavaScript code
js_code = remove_comments(js_code)

# Remove orphaned semicolons from JavaScript code
js_code = remove_orphaned_semicolons(js_code)

# Remove the specified string from JavaScript code
js_code = remove_string(js_code, string_to_remove)

# Replace empty lines and lines with a single semicolon with a line break
js_code = replace_empty_lines(js_code)

# Generate the new file name
file_name = os.path.basename(js_file_path)
cleaned_file_name = 'cleaned_' + file_name
cleaned_file_path = os.path.join(os.path.dirname(js_file_path), cleaned_file_name)

# Write the cleaned JavaScript code to a new file
with open(cleaned_file_path, 'w') as file:
    file.write(js_code)

print(f"Cleaned code has been written to {cleaned_file_path}.")
