import * as React from 'react';
/**
 * Top band of every Sunbird newsletter issue.
 */
export interface MastheadProps extends React.HTMLAttributes<HTMLElement> {
  /** Issue headline, sentence case. */
  title: string;
  /** e.g. "Issue 04". */
  issue?: string;
  /** e.g. "November 2025". */
  date?: string;
  /** Uppercase kicker above the headline. */
  kicker?: string;
  /** Path to the wordmark PNG. */
  logoSrc?: string;
}
export declare function Masthead(props: MastheadProps): JSX.Element;
