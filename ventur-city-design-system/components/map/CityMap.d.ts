/**
 * Stylized, data-light city map (OpenStreetMap via Overpass) for interactive modules — no pins, labels or traffic.
 * Light: white land; dark: black.120 land. Parks/green space in brand green, water in blue.
 * Requires d3@7.9.0 (pinned) on the page for pan/zoom, and lucide for the zoom icons.
 * @startingPoint section="Map" subtitle="Stylized OSM city map — light & dark" viewport="700x340"
 */
export interface CityMapProps {
  /** [lat, lng] of the map centre. Default Amsterdam (Vondelpark). */
  center?: [number, number];
  /** Half-width of the loaded area in metres. Keep ≤ 1500 in dense cities. Default 900 */
  radius?: number;
  theme?: 'light' | 'dark';
  /** Render building footprints (subtle texture). Default true */
  buildings?: boolean;
  /** Show +/− zoom buttons. Default true */
  controls?: boolean;
  /** Container height (px or CSS). Default 360 */
  height?: number | string;
  minZoom?: number;
  maxZoom?: number;
  /** Fired with the clicked coordinate — hook for your own interactive overlays. */
  onMapClick?: (pos: { lat: number; lng: number }) => void;
  style?: React.CSSProperties;
}
export declare function CityMap(props: CityMapProps): JSX.Element;
