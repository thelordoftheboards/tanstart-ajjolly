import { cn } from 'cn';
import { SectionBorderedCardsWithIconTitleDescriptionBullets1Props } from '../schema/section-bordered-cards-with-icon-title-description-bullets-1';

export function SectionBorderedCardsWithIconTitleDescriptionBullets1({
  className,
  heading,
  services,
  subtitle,
}: SectionBorderedCardsWithIconTitleDescriptionBullets1Props) {
  return (
    <section className={cn('py-32', className)}>
      <div className="container">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-semibold text-3xl tracking-tight md:text-4xl">{heading}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground tracking-tight md:text-xl">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                className="space-y-6 rounded-lg border border-border p-8 transition-shadow hover:shadow-sm"
                key={service.title}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-3">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.items.map((item) => (
                    <div className="flex items-center gap-2" key={item}>
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Inspired by https://www.shadcnblocks.com/block/services4
