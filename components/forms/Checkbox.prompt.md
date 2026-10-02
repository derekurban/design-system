Checkbox toggles an independent option on or off; use it for lists of settings or multi-select.

```jsx
<Checkbox label="Weekly summary" description="A short email on Sundays." defaultChecked />
<Checkbox checked={all} indeterminate={some} onChange={setAll} label="Select all" />
```

- Checked: accent-subtle box, accent-line ring, accent check. Tinted so a list of checked boxes never produces several accent fills.
- 18px box, 6px radius (radius-xs).
