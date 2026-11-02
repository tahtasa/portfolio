Brand cursor character (arrow + name pill) — use on the website to show a "person" pointing at or commenting on something; the pill optionally becomes a comment bubble.

```jsx
<CursorCharacter name="Mia" color="blue" />
<CursorCharacter name="Mia" color="blue" message="This place has the best ramen" onDone={() => setMsg(undefined)} />
```

- Arrow 32×38 with 2px black.50 outline; pill 30px tall, r15, offset 16px right, 24px medium label, black.120 text.
- Comment: pill expands (max 260px), shows name (12 bold) + comment typed char-by-char with caret, holds 3s, collapses back. No message = no bubble.
- Colours: orange, red, blue, green. Reduced motion → no typing, just show/hide.
- Pointer events are off — position it absolutely over your content.
