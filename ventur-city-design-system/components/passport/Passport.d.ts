/**
 * Ventur.City passport illustration. The cover flips open on its spine (3D, 900ms ease-in-out) to reveal the stamp spread.
 * @startingPoint section="Characters" subtitle="Passport — closed → open flip" viewport="700x340"
 */
export interface PassportProps {
  /** Controlled open state. */
  open?: boolean;
  /** Uncontrolled initial state. Default false */
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  /** Rendered width of the OPEN spread (px). Closed cover is ~half. Default 601 (native). */
  width?: number;
  /** Flip duration ms. Default 900 */
  duration?: number;
  /** Open automatically after autoplayDelay. Default false */
  autoplay?: boolean;
  autoplayDelay?: number;
  /** Click / Enter / Space toggles. Default true */
  interactive?: boolean;
  /** Centre the closed cover in the frame, sliding right→centre as it opens. Default true */
  centerClosed?: boolean;
  /** Override artwork (defaults are the bundled brand SVGs). */
  closedSrc?: string;
  openSrc?: string;
  style?: React.CSSProperties;
}
export declare function Passport(props: PassportProps): JSX.Element;
