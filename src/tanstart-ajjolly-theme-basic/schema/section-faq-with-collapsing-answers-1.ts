interface FaqItem {
  answer: string;
  className?: string;
  id: string;
  question: string;
}

/**
 * The component properties describe a section with FAQ where the questions are
 * always visible and only one answer can be visible at a time, collapsible.
 * The header has title with larger font and subtitle with smaller font.
 * Each card has three sections separated vertically:
 * - On top: taking more than half the vertical space on the card, an image.
 * Recommendation: The viewable area is square.
 * - In the middle: A title with medium sized bold font.
 * Recommendation: 15-20 characters.
 * - At the bottom: Content with smaller font.
 * Recommendation: 200-300 characters, keep the length similar across cards.
 */
export interface SectionFAQWithCollapsingAnswers1Props {
  containerClassName?: string;
  heading: string;
  items: FaqItem[];
}
