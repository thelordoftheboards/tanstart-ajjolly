import { cn } from 'cn';
import { Button } from '~/components/ui/button';
import { SectionIconReasonsWithCenteredCallToAction1Props } from '../schema/section-icon-reasons-with-centered-call-to-action-1';

const MAX_FEATURES = 6;

export const SectionIconReasonsWithCenteredCallToAction1 = ({
  title,
  bottomButtoms: buttons,
  features,
  containerClassName,
}: SectionIconReasonsWithCenteredCallToAction1Props) => {
  const items = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn('flex items-center justify-center py-32', containerClassName)}>
      <div className="container">
        {!!title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-pretty font-semibold text-4xl tracking-tight lg:text-5xl">{title}</h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, ix) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Allow
            <div className="flex flex-col" key={ix}>
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">{feature.icon}</div>
              <h3 className="mb-2 font-medium text-xl">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        {!!buttons?.primary?.url && (
          <div className="mt-16 flex justify-center">
            <Button nativeButton={false} render={<a href={buttons.primary.url} />} size="lg">
              {buttons.primary.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

// Inspired by https://www.shadcnblocks.com/block/feature43
