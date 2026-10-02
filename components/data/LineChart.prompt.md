A trend over time with an optional dashed comparison and direct end labels; use instead of a legend.

```jsx
<LineChart series={thisYear} compare={lastYear} endLabel="34 this week" compareLabel="19 last year" labels={['Jun 8', ...blanks, 'Sep 21']} />
```

- One main series only; compare is always dashed neutral.
- `emphasis="ink"` to keep a chart fully neutral when another element already carries the accent.
