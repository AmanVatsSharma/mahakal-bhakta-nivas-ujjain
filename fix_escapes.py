import os

blog_dir = 'src/content/blog'
fixed = []

for fname in sorted(os.listdir(blog_dir)):
    if not fname.endswith('.md'):
        continue
    fpath = os.path.join(blog_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # Replace escaped single quotes with plain single quotes inside double-quoted strings
    content = content.replace("\\'", "'")

    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed.append(fname)
        print(f'Fixed: {fname}')

print(f'\nTotal fixed: {len(fixed)}')
