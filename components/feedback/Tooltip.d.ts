import * as React from 'react';

/** A short inverted label on hover or focus. Names a control; never holds essential information. */
export interface TooltipProps {
  content: React.ReactNode;
  /** @default "top" */
  side?: 'top' | 'bottom';
  /** Hover delay in ms. @default 300 */
  delay?: number;
  children: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
