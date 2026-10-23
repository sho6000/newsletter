import * as React from 'react';
/** Pipe-separated attribute strip that sits above the sign-off in every issue. */
export interface TaglineStripProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default ["Open source","Modular","Scalable","Extensible"] */
  items?: string[];
  /** @default "plain" */
  tone?: 'clay' | 'marigold' | 'plain';
}
export declare function TaglineStrip(props: TaglineStripProps): JSX.Element;
