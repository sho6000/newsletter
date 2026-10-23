import * as React from 'react';
/** Section separator: a plain rule, a hairline, or the dotted constellation motif. */
export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "rule" */
  variant?: 'rule' | 'hairline' | 'constellation';
  /** Node count for the constellation variant. @default 3 */
  nodes?: number;
}
export declare function Divider(props: DividerProps): JSX.Element;
