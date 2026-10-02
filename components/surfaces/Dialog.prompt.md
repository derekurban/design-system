Dialog interrupts for one focused decision or short form; keep it rare and name the decision in the title.

```jsx
<Dialog open={open} onClose={() => setOpen(false)}
  title="Delete this note?"
  description="It will be removed from every pattern it appears in. This can't be undone."
  actions={<><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button variant="danger">Delete note</Button></>} />
```

- The resolving action goes last (rightmost). Use `primary` for constructive actions, `danger` for destructive.
- Title uses the subheading style (Albert Sans 18/24, 500).
