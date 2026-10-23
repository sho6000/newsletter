import * as React from 'react';
/** Tinted aside for an editor's note, a deadline, or a one-line ask. */
export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase kicker above the text. */
  label?: string;
  /** @default "marigold" */
  tone?: 'marigold' | 'sky' | 'vermilion';
  children?: React.ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;
