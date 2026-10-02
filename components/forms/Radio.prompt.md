Radio chooses exactly one option from a small visible set; render one per option with a shared `name`.

```jsx
{['Private', 'Shared with link', 'Public'].map(v => (
  <Radio key={v} name="vis" value={v} label={v} checked={vis === v} onChange={setVis} />
))}
```

- Stack vertically with `gap: var(--space-3)`. Selected: accent-subtle ring fill with an 8px accent dot.
