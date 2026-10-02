import * as React from 'react';

/** A Lucide icon drawn at the brand's 1.5 stroke. Requires the Lucide UMD script on the page (window.lucide). */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  /** Lucide icon name, kebab or Pascal case: "arrow-right", "ArrowRight". */
  name: string;
  /** Pixel size. 16 in dense UI, 20 in controls at lg, 24 for standalone. @default 16 */
  size?: number;
  /** Stroke width. Keep at 1.5; use 1.25 above 24px. @default 1.5 */
  strokeWidth?: number;
  /** @default "currentColor" */
  color?: string;
  /** Accessible label. Omit for decorative icons (they get aria-hidden). */
  label?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
