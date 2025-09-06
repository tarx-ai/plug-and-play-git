# Design System

A comprehensive design system for the Tarx React application with theming, accessibility, and reusable components.

## 🎨 Features

- **3 Themes**: Light, Dark, and Tarx brand theme
- **CSS Variables**: Consistent tokens across all components
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **TypeScript**: Full type safety and IntelliSense support
- **Responsive**: Mobile-first responsive design
- **Performance**: Optimized with Tailwind CSS
- **Keyboard Shortcuts**: ⌘/Ctrl + J to toggle themes

## 🚀 Quick Start

Visit `/design-system` to see the live style guide.

### Using Components

```tsx
import { Button, Card, Input } from "@/components/ui";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text..." />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

### Theme Management

```tsx
import { useTheme } from "@/lib/theme";

function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}
```

## 📁 Structure

```
components/ui/          # UI primitive components
lib/theme.ts           # Theme management utilities
lib/utils.ts           # Utility functions
styles/tokens.css      # Design tokens (CSS variables)
app/design-system/     # Live style guide
```

## 🎯 Components

- **Button**: 5 variants, 3 sizes, loading states
- **Input**: Labels, helper text, error states
- **Card**: Header, content, footer sections
- **Badge**: 6 semantic variants
- **Switch**: Toggle with labels
- **Checkbox**: Labels and states

## 🎨 Tokens

### Colors
- Primary: `#92B6DE` (Tarx blue)
- Success: `#3FDD78`
- Warning: `#DDA73F`
- Destructive: `#D84C10`

### Spacing
- Based on 4px grid system
- CSS variables: `--spacing-xs` to `--spacing-3xl`

### Typography
- Primary: Inter (UI elements)
- Accent: Space Mono (labels, code)
- Scale: 12px to 64px

### Radius
- Default: 16px (`--radius`)
- Small: 8px (`--radius-sm`)
- Large: 24px (`--radius-lg`)

## ♿ Accessibility

- Focus rings on all interactive elements
- ARIA attributes and semantic HTML
- 4.5:1 color contrast ratio
- Keyboard navigation support
- Screen reader compatible
- Reduced motion support

## 🛠️ Customization

All design tokens are CSS custom properties that can be overridden:

```css
:root[data-theme="custom"] {
  --color-primary: #your-color;
  --radius: 8px;
  --shadow-md: your-shadow;
}
```

## 📱 Responsive

Components are mobile-first and responsive by default:
- Breakpoints: 480px, 768px, 1024px, 1180px, 1420px
- Flexible grid system
- Touch-friendly sizing (44px minimum)

## 🎭 Patterns

The design system includes common patterns:
- Page headers with actions
- Form sections with validation
- Empty states with CTAs
- List rows with metadata
- Data cards with metrics
- Settings layouts

## 🔧 Development

1. Start the dev server: `npm run dev`
2. Visit `http://localhost:3000/design-system`
3. Use ⌘/Ctrl + J to toggle themes
4. Components auto-update with changes

## 💡 Best Practices

1. Use semantic HTML elements
2. Include ARIA labels where needed
3. Test keyboard navigation
4. Maintain color contrast ratios
5. Use design tokens consistently
6. Test across all theme modes

---

🤖 *Generated with Claude Code*