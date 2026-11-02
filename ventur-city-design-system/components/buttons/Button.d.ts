/**
 * Ventur.City button. Pill-ish, bold Instrument Sans, optional leading/trailing icons.
 * @startingPoint section="Buttons" subtitle="Primary / secondary / tertiary / ghost buttons" viewport="700x360"
 */
export interface ButtonProps {
  /** primary = lime brand; secondary = slate (black.30); tertiary = warm grey (green.15); ghost variants are text-only. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghost-light' | 'ghost-brand';
  /** sm = 24px tall / 12px bold; lg = 40px tall / 16px bold. Default lg */
  size?: 'sm' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  /** "Continue with Platform" layout: full-width, icon pinned left, label centred. */
  social?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
