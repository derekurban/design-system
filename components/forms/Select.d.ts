import * as React from 'react';

export interface SelectOption { value: string; label: string; disabled?: boolean; }

/** Native select styled as a hairline control with a Lucide chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Strings or {value,label} objects. */
  options: Array<string | SelectOption>;
  /** Disabled first option shown when value is "". */
  placeholder?: string;
  /** 32 / 40 / 48px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
}
export declare function Select(props: SelectProps): JSX.Element;
