import * as React from 'react';
/**
 * A single story in an issue: optional image, kicker, headline, excerpt and a ghost CTA.
 */
export interface StoryItemProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  excerpt?: string;
  href?: string;
  /** @default "Read more" */
  cta?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** @default "stacked" */
  layout?: 'stacked' | 'side';
}
export declare function StoryItem(props: StoryItemProps): JSX.Element;
