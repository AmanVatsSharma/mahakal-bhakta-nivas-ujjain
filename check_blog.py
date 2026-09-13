import os, re

blog_dir = 'src/content/blog'
bad_files = []

for fname in sorted(os.listdir(blog_dir)):
    if not fname.endswith('.md'):
        continue
    fpath = os.path.join(blog_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for escaped single quotes in frontmatter
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        bad_files.append((fname, 'No frontmatter block'))
        continue

    fm = match.group(1)
    if "\\'" in fm:
        bad_files.append((fname, 'Contains escaped single quote'))
    # Check for bare 'date:' field (should be pubDate)
    for line in fm.split('\n'):
        if re.match(r'^date:\s', line) and 'pubDate' not in line:
            bad_files.append((fname, f'Uses "date:" instead of "pubDate:"'))
            break

total = len([f for f in os.listdir(blog_dir) if f.endswith('.md')])
print(f'Total files: {total}')
print(f'Files with issues: {len(bad_files)}')
for fname, issue in bad_files:
    print(f'  {fname}: {issue}')
