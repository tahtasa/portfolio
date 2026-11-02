/**
 * Transient feedback bar with leading icon, message and a bold text action.
 * @startingPoint section="Feedback" subtitle="Toast — neutral, success, warn, danger" viewport="700x300"
 */
export interface ToastProps {
  tone?: 'neutral' | 'success' | 'warn' | 'danger';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /** Default "Dismiss". Pass null to hide. */
  actionLabel?: string | null;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
