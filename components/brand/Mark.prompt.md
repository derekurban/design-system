Mark renders the bracket logo in the current theme's ink and accent; use it in site headers, footers and splash moments. `variant="site"` is the personal-website logo (cursive du with a brush underline). For the lockup, wordmark and favicon use the SVG files in assets/logos.

```jsx
<Mark size={32} />
<Mark size={120} animate />          {/* first-load draw-in */}
<Mark size={40} variant="site" />    {/* personal website */}
```

- Below 24px use `assets/logos/favicon.svg`; the site variant's underline thins to a hairline at small sizes.
- Never recolor the left bracket or the stroke; only the closing bracket is accent.
