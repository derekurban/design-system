import * as React from 'react';

/** A headline figure: caption label, Albert Sans 300 value with tabular figures, optional delta and sparkline. */
export interface StatProps {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Plain-language change, e.g. "+12% from August". */
  delta?: React.ReactNode;
  /** Numbers for a Sparkline beside the delta. */
  trend?: number[];
  /** The one stat that matters in the view: accent text and accent sparkline. @default false */
  emphasis?: boolean;
  /** Value at 28 / 36 / 48px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): JSX.Element;
