import os, re

blog_dir = 'src/content/blog'
fixed = []

for fname in sorted(os.listdir(blog_dir)):
    if not fname.endswith('.md'):
        continue
    fpath = os.path.join(blog_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Extract frontmatter
    match = re.match(r'^(---\n)(.*?)(\n---)', content, re.DOTALL)
    if not match:
        continue

    fm = match.group(2)
    new_fm_lines = []
    for line in fm.split('\n'):
        # Match YAML value lines with single-quoted strings: key: 'value'
        # But NOT list items (starting with -)
        m = re.match(r'^(\s*\w+:\s*)\'(.*?)\'(\s*)$', line)
        if m:
            prefix = m.group(1)
            value = m.group(2)
            suffix = m.group(3)
            # Escape any double quotes in the value
            value = value.replace('"', '\\"')
            new_line = prefix + '"' + value + '"' + suffix
            new_fm_lines.append(new_line)
        else:
            new_fm_lines.append(line)

    new_fm = '\n'.join(new_fm_lines)
    if new_fm != fm:
        content = content[:match.start(2)] + new_fm + content[match.end(2):]
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed.append(fname)
        print(f'Fixed: {fname}')

print(f'\nTotal fixed: {len(fixed)}')
