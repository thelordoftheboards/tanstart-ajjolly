import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '~/components/theme-toggle';
import { Button } from '~/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { HeaderIcon, headerTitle } from '~/tanstart-ajjolly-theme-basic-config/client/header-with-burger-menu';
import { type HeaderWithBurgerMenuLinkType } from '../schema/header-with-burger-menu';

export function HeaderWithMobileMenu({ links }: { links: HeaderWithBurgerMenuLinkType[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link className="flex gap-2" to="/">
            <HeaderIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">{headerTitle}</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center md:flex">
          {links.map((link) => (
            <Link
              className="ml-8 font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              key={link.to}
              to={link.to}
            >
              {link.title}
            </Link>
          ))}

          <div className="min-w-4" />

          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Sheet onOpenChange={setMobileMenuOpen} open={mobileMenuOpen}>
            <SheetTrigger
              render={
                <Button size="icon" variant="ghost">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              }
            />
            <SheetContent className="w-75 sm:w-100" side="right">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HeaderIcon className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">{headerTitle}</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  <ThemeToggle />
                  {links.map((link) => (
                    <Button
                      className="w-full justify-start"
                      key={link.to}
                      render={
                        <Link className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)} to={link.to}>
                          {link.title}
                        </Link>
                      }
                      variant="ghost"
                    />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
