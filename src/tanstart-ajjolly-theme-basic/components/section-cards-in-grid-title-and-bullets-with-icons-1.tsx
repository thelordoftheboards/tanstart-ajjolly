import { cn } from 'cn';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { SectionCardsInGridTitleAndBulletsWithIcons1Props } from '../schema/section-cards-in-grid-title-and-bullets-with-icons-1';

//

export function SectionCardsInGridTitleAndBulletsWithIcons1({
  cards,
  containerClassName,
}: SectionCardsInGridTitleAndBulletsWithIcons1Props) {
  return (
    <section className={cn('my-16', containerClassName)}>
      <div className={'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'}>
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <card.icon className={cn('h-6 w-6 text-primary', card.iconClassName)} />
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {card.bullets.map((bullet) => (
                <div className="flex items-center gap-2 text-sm" key={bullet.text}>
                  <bullet.icon className={cn('h-4 w-4 shrink-0 text-green-500', bullet.iconClassName)} />
                  <span>{bullet.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
