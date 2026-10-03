import { Link } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';

export const Page404 = () => (
  <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8 text-center">
    <h2 className="mb-6 font-semibold text-5xl">404</h2>
    <h3 className="mb-1.5 font-semibold text-3xl">Not Found</h3>
    <p className="mb-6 max-w-sm text-muted-foreground">
      Something went wrong. The page you&apos;re looking for isn&apos;t found, we suggest you back to home.
    </p>
    <Button className="rounded-lg text-base" render={<Link to="/" />} size="lg">
      Go to home
    </Button>
  </div>
);
