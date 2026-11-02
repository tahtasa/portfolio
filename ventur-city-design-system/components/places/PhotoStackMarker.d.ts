import type { PlaceCategory } from './CategoryIcon';
/**
 * WEBSITE marker: user-uploaded 3:4 photos of a place, stacked (max 2 visible) with an endless subtle shuffle,
 * a count badge (total photos shared) and a category pin (cyan partner / slate regular).
 * @startingPoint section="Places" subtitle="Photo stack marker — count, category pin, shuffle" viewport="700x320"
 */
export interface PhotoStackMarkerProps {
  /** User-uploaded photo URLs. Any length; only 2 cards render, cycling through all. */
  photos?: string[];
  /** Total photos shared at this place (badge). Defaults to photos.length. Hidden when ≤ 1. */
  count?: number;
  category?: PlaceCategory;
  /** Partnered merchant → cyan pin. Default false. */
  partner?: boolean;
  /** Card width px (cards are 3:4). Default 150 */
  width?: number;
  /** ms between shuffles. Default 2800 */
  interval?: number;
  /** Disable the shuffle. Also auto-disabled for prefers-reduced-motion. */
  animate?: boolean;
  style?: React.CSSProperties;
}
export declare function PhotoStackMarker(props: PhotoStackMarkerProps): JSX.Element;
