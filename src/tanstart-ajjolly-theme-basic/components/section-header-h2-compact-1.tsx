import { cn } from 'cn';
import { SectionHeaderH2Compact1Props } from '../schema/section-header-h2-compact-1';

//

export function SectionHeaderH2Compact1({
  subtitle,
  title,
  containerClassName,
  children,
}: SectionHeaderH2Compact1Props) {
  return (
    <section className={cn('my-16', containerClassName)}>
      <div className="text-center">
        <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
      </div>

      {children}
    </section>
  );
}
