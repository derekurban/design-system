import * as React from 'react';

/** A short, calm confirmation that floats above the page. Past-tense and specific: "Draft saved". */
export interface ToastProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** neutral = no marker. success = accent dot (the thing resolved). danger / warning / info = status dot. @default "neutral" */
  tone?: 'neutral' | 'success' | 'danger' | 'warning' | 'info';
  /** Optional inline action, usually <Button variant="ghost" size="sm">Undo</Button>. */
  action?: React.ReactNode;
  /** Shows a dismiss control. Called after the exit animation (120ms). */
  onDismiss?: () => void;
  /** Enter with opacity, 8px rise and 4px blur. Set false for toasts already on screen at page load. @default true */
  animateIn?: boolean;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
