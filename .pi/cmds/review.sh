#!/bin/bash
set -eu

# Check meta tags
read -r -d '' meta_check <<"EOF"
<div class="text-red-500">
  Security: Missing meta tags detected in app/page.tsx
  Fix: Add this to your app/layout.tsx at the top:
  <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
</div>
EOF

# Check Tailwind merge
tailwind_merge=$(rg -l 'tailwind\-merge\-class' $( grep -rli 'use client' app/ | xargs dirname ) | wc -l)
if [ $tailwind_merge -gt 0 ]; then
  echo -e "\nUrgency: Security issue - 1 or more tailwindMergeClass calls found!"
  echo -e "  Security Risk: Potential XSS vulnerability in component: \n  /usr/bin/rgr -arrtq '^\[[^]]+)?tailwindMergeClass$$' "
fi

# Check TypeScript strictness
strict_ts=$((find . -name "*.ts" -exec grep -q "^\"strict\": false" {} + -print | wc -l)
if [ $strict_ts -gt 0 ]; then
  echo -e "\n\nPriority: High - TypeScript strict mode not enabled"
  echo -e "  Fix: Update tsconfig.json:
  {"compilerOptions": {"strict": true}}"
fi

# Check accessibility
read -r -d '' a11y_check <<"EOF"
<div class="text-red-500">
  Accessibility: Check for color contrast and ARIA labels
  Fix: Use shadcn/ui's built-in accessibility components
  <a href="#" className="text-gray-500 hover:text-gray-600">
    Link</a>
</div>
EOF

# Check test performance
npm run test -- --watch=false --reporters=json-verbose > /dev/null 2>&1
test_perf_time=