Toast confirms something that just happened, briefly, without blocking; the title is the result in past tense.

```jsx
<Toast tone="success" title="Draft saved" description="Synced a moment ago." />
<Toast title="Note archived" action={<Button variant="ghost" size="sm">Undo</Button>} onDismiss={close} />
<Toast tone="danger" title="That didn't save" description="Check your connection and try again." />
```

- 360px wide, radius 12, float shadow. Enter bottom-up over 200ms; exit faster.
- No exclamation marks, no "Oops".
