import { cn } from 'cn';
import { SectionFooterCompact1Props } from '../schema/section-footer-copact-1';

export function SectionFooterCompact1({ className, copyrightName }: SectionFooterCompact1Props) {
  return (
    <footer className={cn('mt-16 border-t', className)}>
      <div className="container py-6 text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} {copyrightName}
      </div>
    </footer>
  );
}
