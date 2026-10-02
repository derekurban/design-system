Card groups related content on a raised surface; use it for a project, a note, a settings group. Don't build grids of identical cards as page decoration.

```jsx
<Card padding="md">
  <h3 className="du-subheading">Pattern notes</h3>
  <p className="du-small" style={{ color: 'var(--ink-secondary)' }}>A notes tool that notices which ideas you return to.</p>
</Card>
<Card as="a" href="/work/notes" interactive>…</Card>
```

- Variants: `raised` (default), `sunk`, `outline`. Depth comes from the 0.5px ring, never a drop shadow.
- Nested corners: an image inside a Card with 8px padding gets `radius: 10px` (18 − 8).
