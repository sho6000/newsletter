import * as React from 'react';
export interface FooterLink { label: string; href: string; }
/** Closing band: attribute strip, COSS mark, maintainer line, contact, sign-off and legal links. */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  links?: FooterLink[];
  /** Show the OPEN SOURCE | MODULAR | SCALABLE | EXTENSIBLE strip. @default true */
  tagline?: boolean;
  /** "Maintained by COSS · <microsite>" line. */
  maintainer?: string;
  contactLabel?: string;
  contactHref?: string;
  /** e.g. "— Team Sunbird". */
  signOff?: string;
  address?: string;
  cossLogoSrc?: string;
  unsubscribeHref?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
