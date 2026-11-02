export type PlaceCategory = 'food' | 'nightclub' | 'shopping' | 'beauty' | 'wellness' | 'entertainment' | 'outdoors' | 'services';
export interface CategoryIconProps {
  category?: PlaceCategory;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare const CATEGORIES: Record<PlaceCategory, { label: string; icon: string }>;
export declare function CategoryIcon(props: CategoryIconProps): JSX.Element;
