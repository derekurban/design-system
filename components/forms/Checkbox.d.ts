import * as React from 'react';

/** Checkbox with label and optional description. Checked state is the tinted accent, never a solid fill. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  /** Controlled state. Omit and use defaultChecked for uncontrolled. */
  checked?: boolean;
  defaultChecked?: boolean;
  /** Called with the new checked value. */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: React.ReactNode;
  /** Show a dash for partial selection. @default false */
  indeterminate?: boolean;
  disabled?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
