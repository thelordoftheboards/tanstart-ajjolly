import { copyrightName } from '~/tanstart-ajjolly-theme-basic-config/client/footer-compact';

export function FooterCompact() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-6 text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} {copyrightName}
      </div>
    </footer>
  );
}
