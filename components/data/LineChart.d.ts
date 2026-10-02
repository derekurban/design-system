import * as React from 'react';

/**
 * A single ink line with an optional dashed comparison, direct end labels instead of a legend, and one emphasized latest point.
 */
export interface LineChartProps {
  series: number[];
  /** Comparison series drawn dashed in --data-neutral. Same length as series. */
  compare?: number[];
  /** X-axis labels; empty strings skip a label. */
  labels?: string[];
  /** Direct label at the end of the main line, e.g. "34 this week". */
  endLabel?: string;
  /** Direct label at the end of the comparison line. */
  compareLabel?: string;
  /** accent = the accent green on the latest point (default). ink = fully neutral chart. @default "accent" */
  emphasis?: 'accent' | 'ink';
  /** @default 180 */
  height?: number;
  /** Line draws on, then the point settles. @default true */
  animate?: boolean;
  replayKey?: string | number;
  /** Accessible summary. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function LineChart(props: LineChartProps): JSX.Element;
