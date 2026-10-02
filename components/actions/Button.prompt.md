Button triggers an action; label it with the verb it performs ("Save draft", "Send"), and use `variant="primary"` for at most one action per view.

```jsx
<Button variant="primary">Save draft</Button>
<Button iconEnd={<Icon name="arrow-right" />}>Read the case study</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

- Variants: `primary` (accent fill, one per view), `secondary` (default, hairline), `ghost` (toolbar / low emphasis), `danger` (destructive; neutral fill, danger text).
- Sizes: `sm` 32, `md` 40, `lg` 48. Radius follows size (8 / 10 / 10).
- `href` renders a link styled as a button. Press scales to 0.98 over 120ms.
