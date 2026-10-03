import { IconArrowRight } from '@tabler/icons-react';
import { cn } from 'cn';
import { Button } from '~/components/ui/button';
import { SectionCardsInGridWithHalfCardImageTitleAndText1Props } from '../schema/section-cards-in-grid-with-half-card-image-title-and-text-1';

const MAX_FEATURES = 6;

export const SectionCardsInGridWithHalfCardImageTitleAndText1 = ({
  buttons,
  className,
  description,
  features,
  heading,
}: SectionCardsInGridWithHalfCardImageTitleAndText1Props) => {
  const items = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn('py-32', className)}>
      <div className="container mx-auto">
        <div className="mb-9 lg:mb-14 lg:max-w-3xl">
          <h2 className="mb-3 text-balance font-semibold text-3xl tracking-tight md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          {!!description && <p className="mb-8 text-muted-foreground lg:text-lg">{description}</p>}
          {!!buttons?.primary && (
            <Button
              nativeButton={false}
              render={
                <a className="group flex items-center font-medium md:text-base lg:text-lg" href={buttons.primary.url} />
              }
              variant="link"
            >
              {buttons.primary.text}
              <IconArrowRight />
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((feature) => (
            <div className="flex flex-col overflow-clip rounded-xl border border-border" key={feature.title}>
              <a href={feature.href}>
                {/** biome-ignore lint/correctness/useImageSize: Allow */}
                <img
                  alt={feature.image.alt}
                  className="aspect-4/3 h-full w-full object-cover object-top transition-opacity hover:opacity-80"
                  src={feature.image.src}
                />
              </a>
              <div className="px-5 pt-6 pb-6 md:px-6 md:pb-7 lg:px-8 lg:pb-8">
                <h3 className="mb-2 font-semibold text-base md:text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Inspired by https://www.shadcnblocks.com/block/feature73
