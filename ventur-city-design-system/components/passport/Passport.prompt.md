Brand passport illustration that flips from closed cover to open stamp spread — use for travel/collection moments (stamps, places visited) on the website.

```jsx
<Passport width={480} />                         {/* click to open/close */}
<Passport autoplay interactive={false} />       {/* opens once on mount */}
<Passport open={isOpen} onToggle={setOpen} />   {/* controlled */}
```

- Cover rotates −180° on the spine (CSS 3D, perspective 2200, 900ms cubic-bezier(.65,0,.35,1)); its back face is the left page of the spread.
- `centerClosed` (default) keeps the closed book centred and slides it as it opens — reserve the full open width in layout.
- Artwork: `assets/passport/passport-closed.svg` (301×400) and `passport-open.svg` (601×400), bundled as data URIs.
- Reduced motion → instant.
