import * as React from 'react';

export interface TabItem { value: string; label: React.ReactNode; /** Optional tabular count after the label. */ count?: number; }

/** Page-level tabs on a hairline. The selected tab is marked by a 2px accent indicator that slides between tabs. */
export interface TabsProps {
  items: Array<string | TabItem>;
  value: string;
  onChange?: (value: string) => void;
  /** 36 or 44px row. @default "md" */
  size?: 'sm' | 'md';
  label?: string;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
