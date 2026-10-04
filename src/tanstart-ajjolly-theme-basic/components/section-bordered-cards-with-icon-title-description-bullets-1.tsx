import { cn } from 'cn';
import { SectionBorderedCardsWithIconTitleDescriptionBullets1Props } from '../schema/section-bordered-cards-with-icon-title-description-bullets-1';

export function SectionBorderedCardsWithIconTitleDescriptionBullets1({
  containerClassName,
  cards,
}: SectionBorderedCardsWithIconTitleDescriptionBullets1Props) {
  return (
    <section className={cn('my-16', containerClassName)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              className="space-y-6 rounded-lg border border-border p-8 transition-shadow hover:shadow-sm"
              key={card.title}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted p-3">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-xl">{card.title}</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">{card.description}</p>

              <div className="space-y-2">
                {card.items.map((item) => (
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
    </section>
  );
}

// Inspired by https://www.shadcnblocks.com/block/services4
