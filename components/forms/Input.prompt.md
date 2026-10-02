Input is the single-line (or `multiline`) text field with optional label, hint and error; use it for any typed value.

```jsx
<Input label="Email" placeholder="you@example.com" hint="Only used to reply." />
<Input iconStart={<Icon name="search" />} placeholder="Search notes" size="sm" />
<Input label="Note" multiline rows={5} />
<Input label="Name" error="Add a name so this can be saved." />
```

- Sits on `--sunk` with a 0.5px hairline; on focus rises to `--surface` with the accent focus ring.
- Errors are specific and calm: what happened, then what to do.
