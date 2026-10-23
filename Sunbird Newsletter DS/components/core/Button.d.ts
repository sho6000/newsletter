import * as React from 'react';

/**
 * Primary call-to-action control for Sunbird newsletters and pages.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'alert';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an anchor instead of a button. */
  href?: string;
  disabled?: boolean;
  /** Trailing glyph, e.g. an arrow. */
  iconAfter?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
