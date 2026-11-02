/**
 * Guestbook note sequence. Cursor character types into a pill → pill expands into the note card (optional 1–2 photos)
 * → cursor leaves (posted) → profile photo pops in as the leave-mark. Timing reuses CursorCharacter (38ms/char, 220ms ease).
 */
export interface GuestbookNoteProps {
  /** Username shown in the posted note. */
  name?: string;
  /** Cursor colour; note fill uses the matching light tint. Default green (note green.70). */
  color?: 'orange' | 'red' | 'blue' | 'green' | string;
  /** The note text. Setting/changing it starts the sequence; empty = renders nothing. */
  message?: string;
  /** Profile photo URL. Empty = blank placeholder circle. */
  avatarSrc?: string;
  /** Attached photos (max 2 shown, stacked). Use '' entries for blank placeholders. Empty array = text-only note. */
  photos?: string[];
  /** ms per character. Default 38 (same as CursorCharacter) */
  typeSpeed?: number;
  /** ms the composed note waits before the cursor posts it. Default 1200 */
  postDelay?: number;
  /** Change to replay. */
  replayKey?: string | number;
  /** Fires after the leave-mark appears. */
  onDone?: () => void;
  style?: React.CSSProperties;
}
export declare function GuestbookNote(props: GuestbookNoteProps): JSX.Element | null;
