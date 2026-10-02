SegmentedControl switches between 2–4 views or modes of the same content (List / Board, Week / Month, Light / Dark).

```jsx
<SegmentedControl options={['Week', 'Month', 'Year']} value={range} onChange={setRange} />
<SegmentedControl size="sm" options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }]} value={t} onChange={setT} />
```

- Concentric corners: track radius 10 with 2px padding, segment radius 8.
- The selected segment slides over 200ms. It stays neutral; accent is not used here.
