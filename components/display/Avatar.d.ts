import * as React from 'react';

/** A round portrait or initials for a person. */
export interface AvatarProps {
  /** Image URL. Falls back to initials if missing or broken. */
  src?: string;
  /** Full name; used for initials and the accessible label. */
  name: string;
  /** Diameter in px: 24, 32, 40, 48, 64. @default 32 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
