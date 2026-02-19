import { BookOpen } from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { CategoryCardCollectionItemType } from '../schema/category-card-collection';

export function CategoryCardCollection({ items }: { items: CategoryCardCollectionItemType[] }) {
  return (
    <>
      {items.map((item) => (
        <Card className="flex flex-col transition-shadow duration-200 hover:shadow-lg" key={item.category}>
          <CardHeader className="flex flex-row items-center gap-3 pb-4">
            <item.icon className="h-6 w-6 text-primary" />
            <CardTitle className="font-semibold text-lg">{item.category}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription className="mb-4">{item.description}</CardDescription>
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
    </>
  );
}
