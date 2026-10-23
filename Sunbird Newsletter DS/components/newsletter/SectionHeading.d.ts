import * as React from 'react';
/** Eyebrow + heading pair that opens a newsletter section. */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase kicker, e.g. "Sunbird + Education". */
  eyebrow?: string;
  title: string;
  /** Colour of the node dot beside the eyebrow. */
  dot?: string;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
