Menu is a floating list of actions or choices opened from a trigger; use it for overflow actions, sort options and account menus.

```jsx
<Menu
  trigger={<IconButton label="More"><Icon name="ellipsis" /></IconButton>}
  align="end"
  items={[
    { label: 'Rename', icon: <Icon name="pencil" /> },
    { label: 'Duplicate', icon: <Icon name="copy" />, shortcut: '⌘D' },
    { type: 'divider' },
    { label: 'Delete', icon: <Icon name="trash-2" />, danger: true },
  ]}
/>
```

- Without `trigger` it renders the panel inline (for docs or custom positioning).
- Enters over 200ms (fade + 4px rise); exits faster. Closes on outside click and Escape.
