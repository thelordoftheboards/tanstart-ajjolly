import { cn } from 'cn';
import { ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { SectionHeroSplitWithImageOnRight1Props } from '~/tanstart-ajjolly-theme-basic/schema/section-hero-split-with-image-on-right-1';

//

export const SectionHeroSplitWithImageOnRight1 = ({
  heading,
  description,
  buttons,
  image,
  containerClassName,
}: SectionHeroSplitWithImageOnRight1Props) => {
  return (
    <section className={cn('py-32', containerClassName)}>
      <div className="container mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <h1 className="max-w-xl text-pretty font-semibold text-4xl tracking-tight md:text-5xl lg:max-w-3xl lg:text-6xl">
              {heading}
            </h1>

            <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">{description}</p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {!!buttons?.primary && (
                <Button
                  className="w-full sm:w-auto"
                  nativeButton={false}
                  render={<a href={buttons.primary.url} />}
                  size="lg"
                >
                  {buttons.primary.text}
                  <ArrowRight className="size-4" />
                </Button>
              )}
              {!!buttons?.secondary && (
                <Button
                  className="w-full sm:w-auto"
                  nativeButton={false}
                  render={<a href={buttons.secondary.url} />}
                  size="lg"
                  variant="outline"
                >
                  {buttons.secondary.text}
                </Button>
              )}
            </div>
          </div>

          {image.srcDark ? (
            <>
              {/** biome-ignore lint/correctness/useImageSize: Allow */}
              <img
                alt={image.alt}
                className="aspect-video w-full rounded-md border border-border object-cover object-top dark:hidden"
                src={image.src}
              />
              {/** biome-ignore lint/correctness/useImageSize: Allow */}
              <img
                alt={image.alt}
                className="hidden aspect-video w-full rounded-md border border-border object-cover object-top dark:block"
                src={image.srcDark}
              />
            </>
          ) : (
            // biome-ignore lint/correctness/useImageSize: Allow
            <img
              alt={image.alt}
              className="aspect-video w-full rounded-md border border-border object-cover object-top"
              src={image.src}
            />
          )}
        </div>
      </div>
    </section>
  );
};

// Inspired by https://www.shadcnblocks.com/block/hero1
