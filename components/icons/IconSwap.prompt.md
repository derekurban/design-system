Cross-fade two icons when a control changes state in place (copy → check, play → pause); use inside IconButton or Button.

```jsx
<IconButton label={copied ? 'Copied' : 'Copy link'} onClick={copy}>
  <IconSwap active={copied} from={<Icon name="copy" />} to={<Icon name="check" />} />
</IconButton>
```

- Opacity 0→1, scale 0.25→1, blur 4px→0 over `--duration-base` with `--ease-icon`.
- Both icons stay mounted, so rapid toggles retarget instead of restarting, and nothing animates on page load.
- Pair the motion with a static cue: change the label too (Copy link → Copied).
