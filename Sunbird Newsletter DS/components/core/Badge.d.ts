import * as React from 'react';
/** Small uppercase label marking a newsletter section, product or status. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "marigold" */
  tone?: 'clay' | 'marigold' | 'sky' | 'vermilion' | 'outline';
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
