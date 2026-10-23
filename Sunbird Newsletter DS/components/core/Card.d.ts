import * as React from 'react';
/** Flat, hairline-bordered container. The base surface for every newsletter block. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "paper" */
  tone?: 'paper' | 'marigold' | 'clay' | 'sky' | 'vermilion';
  /** Softer, warmer drop shadow. @default false */
  raised?: boolean;
  /** CSS padding value. @default "var(--space-5)" */
  padding?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
