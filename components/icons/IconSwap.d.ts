import * as React from 'react';

/** Cross-fades between two icons with opacity, scale (0.25 to 1) and blur (4px to 0). For contextual state changes such as copy to check. */
export interface IconSwapProps {
  /** false shows `from`, true shows `to`. @default false */
  active?: boolean;
  /** Resting icon, usually <Icon name="copy" />. */
  from: React.ReactNode;
  /** Icon for the changed state, usually <Icon name="check" />. */
  to: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function IconSwap(props: IconSwapProps): JSX.Element;
