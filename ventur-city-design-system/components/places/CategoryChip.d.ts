import type { PlaceCategory } from './CategoryIcon';
export interface CategoryChipProps {
  category?: PlaceCategory;
  /** Override the default category label. */
  label?: string;
  /** Cyan partner styling. Default false (slate). */
  partner?: boolean;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function CategoryChip(props: CategoryChipProps): JSX.Element;
