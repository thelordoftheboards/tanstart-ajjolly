import { ReactNode } from 'react';

//

/**
 * The component properties describe a small in-section header.
 * On top there is a H2 title with larger font, centered.
 * Below is the subtitle paragraph with smaller font.
 */
export interface SectionHeaderH2Compact1Props {
  children?: ReactNode;
  containerClassName?: string;
  subtitle: string;
  title: string;
}
