Reusable stylized city map — use as the base layer for interactive modules (location pickers, neighborhood explainers) where real streets matter but pins, labels and traffic don't.

```html
<script src="https://unpkg.com/d3@7.9.0/dist/d3.min.js" integrity="sha384-CjloA8y00+1SDAUkjs099PVfnY2KmDC2BZnws9kh8D/lX1s46w6EPhpXdqMfjK6i" crossorigin="anonymous"></script>
```
```jsx
<CityMap center={[52.36, 4.877]} radius={900} theme="dark" onMapClick={({lat,lng}) => …} />
```

- Data: live OpenStreetMap features (roads, rail, parks/green land, water, buildings) fetched from the Overpass API for a square around `center`; drawn on canvas with `--map-{light|dark}-*` tokens (tokens/map.css).
- Light = white land (green.0), roads green.15/20, parks green.50, water soft blue. Dark = black.120 land, roads black.50/30, parks dim green, water deep blue.
- Pan/drag + wheel/pinch zoom within the loaded area; +/− buttons. The OSM attribution must stay visible (license).
- Open sea is not filled (OSM coastlines aren't areas) — coastal cities show rivers/lakes only.
