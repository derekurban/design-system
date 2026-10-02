Tabs switch between sibling sections of one page (Overview / Notes / Activity); use SegmentedControl for view modes instead.

```jsx
<Tabs items={[{ value: 'notes', label: 'Notes', count: 128 }, { value: 'patterns', label: 'Patterns' }, 'Archive']} value={tab} onChange={setTab} />
```

- 24px gap between tabs, 0.5px hairline under the row, 2px accent indicator sliding over 200ms.
- Unselected tabs are ink-tertiary, hover ink-secondary, selected ink.
