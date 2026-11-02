/**
 * Labelled single-line text input. Light (borderless on white) and dark (slate fill) themes; lime 2px focus ring.
 * @startingPoint section="Forms" subtitle="Text field — light & dark, focus, disabled" viewport="700x360"
 */
export interface TextFieldProps {
  /** Small label above the field (12px). Optional. */
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme?: 'light' | 'dark';
  disabled?: boolean;
  type?: string;
  style?: React.CSSProperties;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
