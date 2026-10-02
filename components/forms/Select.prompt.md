Select picks one value from a short list using the native menu; use it in forms and settings.

```jsx
<Select label="Sort by" options={['Most recent', 'Most revisited', 'Alphabetical']} />
<Select size="sm" value={v} onChange={e => setV(e.target.value)} options={[{ value: '7', label: 'Last 7 days' }, { value: '30', label: 'Last 30 days' }]} />
```

- Neutral surface with a 0.5px control ring; accent focus ring.
- For 2–4 visible options prefer SegmentedControl.
