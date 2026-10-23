import * as React from 'react';
/** Full-bleed clay quote panel — one per issue, used as a pace change. */
export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  attribution?: string;
  role?: string;
}
export declare function Quote(props: QuoteProps): JSX.Element;
