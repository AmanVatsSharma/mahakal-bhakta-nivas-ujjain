import os

blog_dir = 'src/content/blog'
fixed = []

for fname in sorted(os.listdir(blog_dir)):
    if not fname.endswith('.md'):
        continue
    fpath = os.path.join(blog_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    changed = False
    new_lines = []
    for line in lines:
        # Fix escaped single quotes in single-quoted YAML strings
        if "\\'" in line and line.strip().startswith("'") or ("\\'" in line and ':' in line):
            # Replace \' with ' and switch outer quotes to double quotes
            new_line = line.replace("\\'", "'")
            # If the value starts with ' and ends with ', switch to "
            stripped = new_line.strip()
            if stripped.startswith("'") and stripped.endswith("'"):
                indent = new_line[:len(new_line) - len(new_line.lstrip())]
                inner = stripped[1:-1]
                new_line = indent + '"' + inner + '"\n'
                changed = True
            new_lines.append(new_line)
        # Fix 'date:' to 'pubDate:' (not updatedDate or pubDate)
        elif line.strip().startswith('date:') and 'pubDate' not in line and 'updatedDate' not in line:
            new_lines.append(line.replace('date:', 'pubDate:', 1))
            changed = True
        else:
            new_lines.append(line)

    if changed:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        fixed.append(fname)
        print(f'Fixed: {fname}')

print(f'\nTotal fixed: {len(fixed)}')
