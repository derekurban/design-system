import * as React from 'react';

export interface MenuItemDef {
  /** "item" (default), "divider", or "label" (a quiet sentence-case group label). */
  type?: 'item' | 'divider' | 'label';
  label?: React.ReactNode;
  value?: string;
  icon?: React.ReactNode;
  /** Shortcut hint, e.g. "⌘D". */
  shortcut?: string;
  /** Shows an accent check. */
  selected?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

/** A floating list of actions or choices. Radius 12 with 4px padding; items radius 8 (concentric). */
export interface MenuProps {
  items: MenuItemDef[];
  onSelect?: (value: string, item: MenuItemDef) => void;
  /** Element that toggles the menu. Omit to render the panel inline (static). */
  trigger?: React.ReactNode;
  /** Horizontal alignment to the trigger. @default "start" */
  align?: 'start' | 'end';
  /** Minimum panel width in px. @default 200 */
  width?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: React.CSSProperties;
}
export declare function Menu(props: MenuProps): JSX.Element;
