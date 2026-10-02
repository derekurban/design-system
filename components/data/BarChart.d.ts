import * as React from 'react';

/**
 * Vertical bars in --data-neutral with one highlighted bar (the point that resolves). Bars settle up from the baseline on mount.
 */
export interface BarChartProps {
  /** Numbers, or {label, value} objects. */
  data: Array<number | { label?: string; value: number }>;
  /** X-axis labels; empty strings skip a label. Overrides labels inside data. */
  labels?: string[];
  /** Index of the highlighted bar. null for none. @default last bar */
  highlight?: number | null;
  /** accent = the accent green (default). ink = fully neutral chart, for when another chart in the view carries the accent. @default "accent" */
  emphasis?: 'accent' | 'ink';
  /** Pixel height. Width fills the container. @default 180 */
  height?: number;
  /** Appended to value labels, e.g. "%". */
  unit?: string;
  /** Which values show: on hover, all, or only the highlighted bar. @default "hover" */
  showValues?: 'hover' | 'all' | 'highlight';
  /** Settle animation on mount. @default true */
  animate?: boolean;
  /** Change to replay the animation. */
  replayKey?: string | number;
  /** Accessible summary, e.g. "Notes revisited per month, peak in December". */
  label?: string;
  style?: React.CSSProperties;
}
export declare function BarChart(props: BarChartProps): JSX.Element;
