import * as React from 'react';

export interface SegmentedOption { value: string; label?: React.ReactNode; icon?: React.ReactNode; }

/** 2–4 mutually exclusive views or modes, shown side by side on a sunk track with a sliding surface. */
export interface SegmentedControlProps {
  options: Array<string | SegmentedOption>;
  value: string;
  onChange?: (value: string) => void;
  /** Track heights 32 / 36 / 44px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Segments share the full width. @default false */
  fullWidth?: boolean;
  /** Accessible name for the group. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
