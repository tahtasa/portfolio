import type { PlaceCategory } from './CategoryIcon';
export interface CategoryPinProps {
  category?: PlaceCategory;
  /** true = partnered merchant (cyan, blue.100); false = regular merchant (slate, black.30). */
  partner?: boolean;
  /** Diameter px. Default 56 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function CategoryPin(props: CategoryPinProps): JSX.Element;
