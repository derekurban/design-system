Bars for counts over a period, with the one bar that matters highlighted; use for monthly or weekly totals.

```jsx
<BarChart data={[18,22,19,27,24,31,26,29,34,30,37,46]} labels={['Jan','','Mar','','May','','Jul','','Sep','','Nov','']} label="Notes revisited per month" />
```

- `highlight` picks the bar (default last); `null` for none.
- `emphasis="ink"` to keep a chart fully neutral, e.g. several charts side by side where only one should carry the accent.
- `showValues`: hover (default), all, highlight.
