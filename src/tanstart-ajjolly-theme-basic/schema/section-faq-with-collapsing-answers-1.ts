interface FaqItem {
  answer: string;
  className?: string;
  id: string;
  question: string;
}

export interface SectionFAQWithCollapsingAnswers1Props {
  containerClassName?: string;
  heading: string;
  items: FaqItem[];
}
