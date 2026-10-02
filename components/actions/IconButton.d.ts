import * as React from 'react';

/** A square, icon-only button for toolbars and compact actions. Always carries an accessible label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name. Required. Wrap in <Tooltip> to show it on hover. */
  label: string;
  /** ghost = no chrome (default, toolbars). secondary = hairline outline. primary = accent fill. @default "ghost" */
  variant?: 'ghost' | 'secondary' | 'primary';
  /** 32 / 40 / 48px square. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Toggle state; tinted accent when on. @default false */
  selected?: boolean;
  /** Turn off the press scale. @default false */
  static?: boolean;
  disabled?: boolean;
  /** The icon, usually <Icon name="…" />. */
  children: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
