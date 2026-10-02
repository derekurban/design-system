import * as React from 'react';

/** The brand's button. Primary is the single accent fill in a view; everything else stays neutral. */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** primary = the one resolving action per view (accent fill). secondary = hairline outline. ghost = no chrome. danger = destructive, neutral fill with danger text. @default "secondary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm 32px, md 40px, lg 48px tall. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon element before the label, usually <Icon name="…" />. */
  iconStart?: React.ReactNode;
  /** Icon element after the label. */
  iconEnd?: React.ReactNode;
  /** Stretch to the container width. @default false */
  fullWidth?: boolean;
  /** Turn off the press scale, e.g. for buttons pressed many times in a row. @default false */
  static?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** @default "button" */
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
