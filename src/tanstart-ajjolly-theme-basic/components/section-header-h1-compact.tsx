export function SectionHeaderH1Compact({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
    </div>
  );
}
