import os, re
from datetime import datetime

blog_dir = 'src/content/blog'
bad_dates = []

for fname in sorted(os.listdir(blog_dir)):
    if not fname.endswith('.md'):
        continue
    fpath = os.path.join(blog_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'pubDate:\s*(.+)', content)
    if match:
        date_str = match.group(1).strip().strip('"').strip("'")
        try:
            datetime.strptime(date_str, '%Y-%m-%d')
        except ValueError:
            bad_dates.append((fname, date_str))

print(f'Files with bad dates: {len(bad_dates)}')
for fname, date_str in bad_dates:
    print(f'  {fname}: pubDate: {date_str}')
