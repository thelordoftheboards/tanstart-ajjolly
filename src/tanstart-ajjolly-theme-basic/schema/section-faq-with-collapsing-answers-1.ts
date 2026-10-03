interface FaqItem {
  answer: string;
  className?: string;
  id: string;
  question: string;
}

export interface SectionFAQWithCollapsingAnswers1Props {
  className?: string;
  heading: string;
  items: FaqItem[];
}
