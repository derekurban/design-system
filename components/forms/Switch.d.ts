import * as React from 'react';

/** An on/off setting that applies immediately. When on, the thumb becomes the accent dot. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
