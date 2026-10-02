import * as React from 'react';

/** A small label for topics, filters, or metadata. Neutral by default; tinted accent when selected. */
export interface TagProps {
  children: React.ReactNode;
  /** Tinted accent state for active filters. @default false */
  selected?: boolean;
  /** 24 or 28px tall. @default "md" */
  size?: 'sm' | 'md';
  /** Makes the tag a toggle button. */
  onClick?: () => void;
  /** Shows a remove control. */
  onRemove?: () => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
