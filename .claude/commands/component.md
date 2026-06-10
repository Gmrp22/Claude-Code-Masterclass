---
description: Create a UI component using TDD
allowed-tools: Read, Write, Edit, Glob, Bash(npx*), Bash(npm*), Bash(yarn*)
argument-hint: "[Brief component description]"
---


## user Input
The user has provided information about the component to make **$ARGUMENT**

## Do this First:
From the component information above, determine PascalCape component name

### 1. Write test first
Create `test/components/[ComponentName].test.tsx` with 2-3 simple tests:
- Test that component renders
- Test key elements are present (roles,text)

Pattern: 
``` tsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@testing-library/jest-dom"
import ComponentName from "@/components/ComponentName";

describe("ComponentName", () => {
  it("renders correctly", () => {
    render(<ComponentName />)
    //asertions
  })
})
```
### 2. Run tests(expect failure)
```bash
npm test tests/components/[ComponentName].test.tsx
```

### 3. Create Component
- `components/ComponentName`
- `components/ComponentName/ComponentName.tsx`
- `components/ComponentName/ComponentName.module.css`
- `components/ComponentName/index.ts` -> `export {default} from "./ComponentName"`

Conventions: no semicolons, CSS modules, theme colors from global.css when needed.


### 4. Run tests (expect pass)
```bash
npm test tests/components/[ComponentName].test.tsx
```

### 5. Add to preview page
Add Component in `app/(public)/preview/page.tsx`


## Rules
- Keep tests minimal
-Only proceed when curent step passes
