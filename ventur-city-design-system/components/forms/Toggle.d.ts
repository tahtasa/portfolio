export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Accessible label. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Toggle(props: ToggleProps): JSX.Element;
