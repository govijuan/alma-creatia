---
name: create-atomic-component
description: Create atomic UI components following the design system. Use when the user asks to generate a new component, atom, molecule, or reusable UI element.
---
# Create Atomic Component Skill


This skill allows the Pi Agent to create an atomic component (atom, molecule, or organism) in the Alma Creatia project.

## Instructions

When invoked, the Pi Agent should:
1. Ask the user for the component name (in PascalCase, e.g., "MyButton")
2. Ask the user for the component type: "atom", "molecule", or "organism"
3. Create the component file in the appropriate directory:
   - For atom: `components/atoms/{ComponentName}.tsx`
   - For molecule: `components/molecules/{ComponentName}.tsx`
   - For organism: `components/organisms/{ComponentName}.tsx`
4. The component should be a basic functional component with TypeScript props interface and export.
5. Use the following template:

```tsx
import { cn } from "@/lib/utils";

interface {ComponentName}Props {
  // Add props here
}

export default function {ComponentName}({}: {ComponentName}Props) {
  return (
    <div className="placeholder">
      {/* {ComponentName} component */}
    </div>
  );
}
```

6. After creating the file, confirm the creation to the user.

## Example Interaction

User: "Create a new atom called 'Button'"
Pi Agent: 
- Asks for type (user says "atom")
- Creates `components/atoms/Button.tsx` with the template
- Confirms: "Created component Button as atom at components/atoms/Button.tsx"

Note: The skill assumes the project structure has the atoms, molecules, and organisms directories under `components/`.
