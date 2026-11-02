Place marker built from user-shared photos — use on the website (maps, place cards) to show community activity at a place.

```jsx
<PhotoStackMarker photos={[a, b, c]} count={10} category="food" partner />
```

- Max 2 stacked cards, regardless of photo count; front card tilts +4°, back −7°.
- Endless shuffle: front card slides out left, tucks behind, next photo surfaces (520ms ease, every 2.8s). Respects reduced motion.
- Badge = total photos shared (99+ cap). Pin bottom-left: cyan = partner merchant, slate = regular.
- For the place's own storefront photo use `PlaceMarker` (square) instead.
