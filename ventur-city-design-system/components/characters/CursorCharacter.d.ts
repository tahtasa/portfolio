/**
 * Cursor character — arrow + name pill. Pass `message` to expand the pill into a comment bubble that types out, holds, then hides after 3s.
 * @startingPoint section="Characters" subtitle="Cursor character with typed comment bubble" viewport="700x220"
 */
export interface CursorCharacterProps {
  /** Label in the pill. Default "Name" */
  name?: string;
  /** orange (#EDBB4A) · red (red.50) · blue (blue.70) · green (green.100), or any CSS colour. Default orange */
  color?: 'orange' | 'red' | 'blue' | 'green' | string;
  /** Comment to type out. Change the string to trigger again; undefined = name pill only. */
  message?: string;
  /** ms per character. Default 38 */
  typeSpeed?: number;
  /** ms the full comment stays visible before hiding. Default 3000 */
  holdMs?: number;
  /** Called after the bubble collapses back to the name pill. */
  onDone?: () => void;
  style?: React.CSSProperties;
}
export declare function CursorCharacter(props: CursorCharacterProps): JSX.Element;
