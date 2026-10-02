import * as React from 'react';

/** Text field on a sunk well with a hairline ring. Rises to the surface on focus. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Visible label above the field (sentence case). */
  label?: string;
  /** Helper text below the field. Hidden when error is set. */
  hint?: string;
  /** Error message; turns the ring danger and replaces the hint. Say what happened and what to do. */
  error?: string;
  /** 32 / 40 / 48px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon, e.g. <Icon name="search" />. */
  iconStart?: React.ReactNode;
  /** Trailing text or node, e.g. a unit or character count. */
  suffix?: React.ReactNode;
  /** Render a textarea. @default false */
  multiline?: boolean;
  /** Textarea rows when multiline. @default 4 */
  rows?: number;
  /** Style for the inner input/textarea element. */
  inputStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
