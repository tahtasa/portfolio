export type BrandIconName = 'food' | 'nightclub' | 'shopping' | 'beauty' | 'wellness' | 'entertainment' | 'outdoors' | 'services' | 'badge' | 'locate-me' | 'no-edit' | 'play' | 'rax' | 'socials' | 'stamps' | 'theatre' | 'vicon' | 'vicon-1';
export interface IconProps {
  /** Brand icon name (preferred) or any Lucide name (fallback, kebab-case). */
  name: BrandIconName | string;
  /** px. Default 16 */
  size?: number;
  /** Fills via currentColor. */
  color?: string;
  /** Lucide fallback only. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare const BRAND_ICONS: Record<BrandIconName, string>;
export declare function Icon(props: IconProps): JSX.Element;
