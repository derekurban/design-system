import * as React from 'react';

/**
 * A modal surface for a focused decision. Scrim, 18px radius, overlay shadow; enters over 200ms, exits in 90ms.
 */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  /** Sentence-case title naming the decision, e.g. "Delete this note?". */
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned buttons. Put the resolving action last. */
  actions?: React.ReactNode;
  /** Max width in px. @default 440 */
  width?: number;
  /** Scrim click and Escape close it. @default true */
  dismissible?: boolean;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
