Ventur.City icon — use for every glyph. Brand set first (filled, 24 grid, currentColor); Lucide only as fallback for glyphs the brand set lacks.

```jsx
<Icon name="food" size={24} />
<Icon name="locate-me" size={20} color="var(--green-100)" />
```

Brand names: food · nightclub · shopping · beauty · wellness · entertainment · outdoors · services · badge · locate-me · no-edit · play · rax · socials · stamps · theatre · vicon · vicon-1.
`badge` is two-tone: inner detail uses `--icon-contrast` (default black.120).
Fallback needs `<script src="https://unpkg.com/lucide@0.454.0/dist/umd/lucide.min.js"></script>`.
