import { cn } from 'cn';
import { BookOpen } from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { SectionCardsInGridTitleContentLinks1Props } from '../schema/section-cards-in-grid-title-content-links-1';

//

export function SectionCardsInGridTitleContentLinks1({
  cards,
  containerClassName,
}: SectionCardsInGridTitleContentLinks1Props) {
  return (
    <section className={cn('', containerClassName)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((item) => (
            <Card className="flex flex-col transition-shadow duration-200 hover:shadow-lg" key={item.title}>
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                <item.titleIcon className="h-6 w-6 text-primary" />
                <CardTitle className="font-semibold text-lg">{item.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1">
                <CardDescription className="mb-4">{item.content}</CardDescription>

                <div className="flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <Badge key={link.name} variant="secondary">
                      {link.href ? (
                        <a
                          className="flex items-center gap-1 hover:underline"
                          href={link.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {link.name} <BookOpen className="h-3 w-3 text-muted-foreground" />
                        </a>
                      ) : (
                        link.name
                      )}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
