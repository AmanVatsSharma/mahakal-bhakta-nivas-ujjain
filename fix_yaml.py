import os, yaml

blog_dir = 'src/content/blog'
fixed = []

for fname in sorted(os.listdir(blog_dir)):
    if not fname.endswith('.md'):
        continue
    fpath = os.path.join(blog_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split frontmatter and body
    parts = content.split('---', 2)
    if len(parts) < 3:
        continue

    pre, fm_text, body = parts[0], parts[1], parts[2]

    try:
        data = yaml.safe_load(fm_text)
    except Exception as e:
        print(f'PARSE ERROR {fname}: {e}')
        continue

    if not isinstance(data, dict):
        continue

    # Re-serialize frontmatter with default_flow_style=False for clean output
    new_fm = yaml.dump(data, default_flow_style=False, allow_unicode=True, sort_keys=False)

    new_content = pre + '---' + new_fm + '---' + body

    if new_content != content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        fixed.append(fname)

print(f'Total fixed: {len(fixed)}')
for f in fixed[:5]:
    print(f'  {f}')
if len(fixed) > 5:
    print(f'  ... and {len(fixed) - 5} more')
