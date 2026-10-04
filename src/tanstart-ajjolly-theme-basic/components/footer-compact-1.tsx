import { cn } from 'cn';
import { FooterCompact1Props } from '../schema/footer-compact-1';

//

export function FooterCompact1({ containerClassName, copyrightName }: FooterCompact1Props) {
  return (
    <footer className={cn('mt-16 border-t', containerClassName)}>
      <div className="container py-6 text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} {copyrightName}
      </div>
    </footer>
  );
}
