Website-only hero/section headline: uppercase display title with one or two "highlight bar" subtitle lines — never for body copy, paragraphs or the mobile app.

```jsx
<WebHeadline title="Now the table's full" lines={["Come back enough and the place starts to know you", "RAX turns that into something real."]} />
<WebHeadline titleColor="dark" title="The map of your whole neighborhood" lines={[{text:"Every pin leads somewhere.",tone:"dark"},{text:"Make plans, leave a mark, and explore more.",tone:"brand"}]} />
```

- Bars: square corners, 4/16 padding, 600 18/24 Instrument Sans. Bars are per line: when a subtitle wraps, every line gets its own bar hugging that line, 2px apart (reads as one continuous subtitle). Separate subtitles stay 8px apart.
- Line 1 dark bar (black.120 / white), line 2 lime bar (green.100 / black.120).
- Max 2 lines, each one short sentence. Paragraphs below stay plain body text.

**Animation** — `animate`: each bar wipes left→right (clip-path, ease-in-out, ~900px/s) when the headline enters the viewport. Wrapped lines are measured and played strictly one after another — a line never starts until the previous line is full length, across all subtitles. Reduced motion → shown instantly. `replayKey` replays.

```jsx
<WebHeadline animate title="Now the table's full" lines={[…]} />
```
