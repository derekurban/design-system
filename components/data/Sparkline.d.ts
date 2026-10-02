import * as React from 'react';

/** A tiny trend line with an end dot. Neutral by default; accent only for the one stat that matters. */
export interface SparklineProps {
  data: number[];
  /** @default 96 */
  width?: number;
  /** @default 28 */
  height?: number;
  /** @default "neutral" */
  tone?: 'neutral' | 'accent';
  /** @default true */
  animate?: boolean;
  /** Accessible summary; omit when the adjacent Stat already says it. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Sparkline(props: SparklineProps): JSX.Element;
