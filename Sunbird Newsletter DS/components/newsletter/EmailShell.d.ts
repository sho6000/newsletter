import * as React from 'react';
/**
 * Outer wrapper for a newsletter issue: warm desk background, 640px white sheet.
 */
export interface EmailShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inbox preview line shown above the sheet in web view. */
  preheader?: string;
  /** Square corners, hairline border, no shadow — matches the printed edition. @default false */
  flat?: boolean;
  children?: React.ReactNode;
}
export declare function EmailShell(props: EmailShellProps): JSX.Element;
