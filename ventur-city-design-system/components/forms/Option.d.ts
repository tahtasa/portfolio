export interface OptionProps {
  /** Leading 16px icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Option(props: OptionProps): JSX.Element;
