import { SectionHeroTitleSubtitle1Props } from '../schema/section-hero-title-subtitle-1';

export function SectionHeroTitleSubtitle1({ subtitle, title }: SectionHeroTitleSubtitle1Props) {
  return (
    <section className="mb-12 text-center md:mb-16">
      <h1 className="mb-4 bg-linear-to-r bg-clip-text font-bold text-3xl text-primary tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
    </section>
  );
}
