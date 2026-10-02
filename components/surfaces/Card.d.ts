import * as React from 'react';

/**
 * A quiet container: surface fill, 0.5px hairline ring plus a very soft resting shadow (--shadow-rest), 18px radius.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** raised = surface, hairline and soft shadow (default). sunk = recessed well, no ring. outline = transparent with hairline only. @default "raised" */
  variant?: 'raised' | 'sunk' | 'outline';
  /** 0 / 16 / 24 / 32px. Inner corners should be 18 minus this padding. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Hover firms the ring and lifts the shadow slightly; use when the whole card is a link. @default false */
  interactive?: boolean;
  /** Element to render, e.g. "a" or "article". @default "div" */
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
