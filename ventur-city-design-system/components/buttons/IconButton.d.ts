export interface IconButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  /** sm 24px (r8) · md 40px (r16) · lg 54px (r20). Default md */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Accessible label (also tooltip). */
  label?: string;
  /** The icon. */
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
