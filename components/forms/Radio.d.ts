import * as React from 'react';

/** One option in a mutually exclusive set. The selected radio shows a single accent dot. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value'> {
  checked?: boolean;
  /** Called with this radio's value when chosen. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Group name shared by the set. */
  name?: string;
  value: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): JSX.Element;
