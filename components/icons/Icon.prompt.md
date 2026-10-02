Icon renders a Lucide glyph at the brand's 1.5px stroke; use it inside buttons, menus, inputs and anywhere a small functional symbol helps.

```jsx
<Icon name="arrow-right" />
<Icon name="search" size={20} label="Search" />
```

- Requires `<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>` before your app scripts.
- Inherits `currentColor`; color it through the parent's text color (ink, ink-secondary, accent-text).
- Sizes: 16 default, 20 for large controls, 24 standalone. Never decorative; icons label actions or states.
