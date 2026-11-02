Animated guestbook post — use on the website when a character "leaves a note" at a place (with or without photos).

```jsx
<GuestbookNote name="dana_s" color="green" avatarSrc={me} photos={[a, b]}
  message="Decent vibe but the wait time on weekends is brutal. Food was good once we finally sat down though." />
```

Sequence: 1) cursor + single-line pill, text types at 38ms/char with caret · 2) pill morphs into 350px note card (r20, 1.5px black.50 border, green.70 fill), photos drop in staggered · 3) after `postDelay` the cursor slides away and fades (220ms) · 4) avatar pops in as the leave-mark.
- Typing pill keeps the newest text + caret in view (clips from the left with a fade).
- Photos: 132×90 (≈3:2), run off the card's bottom/right edge (clipped), r12, 3px green.5 frame, double drop shadow, tilted −9° / −3°; clipped by the card edge.
- Leave `avatarSrc` / photo entries empty for blank placeholders.
