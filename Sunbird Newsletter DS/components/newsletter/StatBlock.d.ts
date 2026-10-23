import * as React from 'react';
export interface Stat { value: string; label: string; }
/** Row of impact numbers — Sunbird copy leans hard on scale figures. */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: Stat[];
  /** @default 3 */
  columns?: number;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
