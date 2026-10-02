import * as React from 'react';

/** The bracket logo drawn live from tokens (ink brackets and stroke, accent closing bracket), so it follows the theme. Optional draw-in animation. */
export interface MarkProps {
  /** Width and height in px (the logo is square). @default 48 */
  size?: number;
  /** "default": the scribble between brackets. "site": the cursive du with a brush underline, for the personal website. @default "default" */
  variant?: 'default' | 'site';
  /** Play the draw-in: left bracket fades in, the stroke writes, the green bracket closes. Reserve for first load and meaningful moments. @default false */
  animate?: boolean;
  /** Change this value to replay the animation. */
  replayKey?: string | number;
  /** Accessible label. @default "Derek Urban" */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Mark(props: MarkProps): JSX.Element;
