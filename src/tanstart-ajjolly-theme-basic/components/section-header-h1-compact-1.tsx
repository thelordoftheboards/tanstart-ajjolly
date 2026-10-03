import { SectionHeaderH1Compact1Props } from '../schema/section-header-h1-compact-1';

export function SectionHeaderH1Compact1({ subtitle, title }: SectionHeaderH1Compact1Props) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
    </div>
  );
}
