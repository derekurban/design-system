IconButton is a square icon-only button for toolbars, dismiss controls and compact actions; always pass `label`.

```jsx
<IconButton label="Close"><Icon name="x" /></IconButton>
<IconButton label="Bold" selected><Icon name="bold" /></IconButton>
<IconButton label="Add note" variant="secondary" size="sm"><Icon name="plus" /></IconButton>
```

- Variants: `ghost` (default), `secondary`, `primary`.
- `selected` turns it into a toggle with the tinted accent (accent-subtle / accent-text).
