export interface WebHeadlineLine {
  text: string;
  /** dark = black.120 bar / white text; brand = lime bar / black text */
  tone?: 'dark' | 'brand';
}
/**
 * WEBSITE ONLY — hero/section title with highlight-bar subtitles. Do not use for body/paragraph copy or in the mobile app.
 * @startingPoint section="Website" subtitle="Display title + highlight-bar subtitles" viewport="700x260"
 */
export interface WebHeadlineProps {
  /** Uppercase Paytone One title. */
  title: string;
  /** 1–2 short subtitle lines. Strings alternate dark → brand. */
  lines?: Array<string | WebHeadlineLine>;
  /** Title ink: light (white, on photos/dark) or dark (black.120, on light). Default light */
  titleColor?: 'light' | 'dark';
  /** md 32 · lg 40 · xl 56. Default lg */
  size?: 'md' | 'lg' | 'xl';
  as?: 'h1' | 'h2' | 'h3';
  /** Wipe the highlight bars in left→right when scrolled into view. Lines play strictly in sequence: each waits until the previous is full length. Default false */
  animate?: boolean;
  /** Wipe speed in px/s (duration scales with line length, min 260ms). Default 900 */
  wipeSpeed?: number;
  /** ms before the first line starts. Default 0 */
  startDelay?: number;
  /** Change to replay the animation. */
  replayKey?: string | number;
  style?: React.CSSProperties;
}
export declare function WebHeadline(props: WebHeadlineProps): JSX.Element;
