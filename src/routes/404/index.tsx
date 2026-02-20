import { createFileRoute } from '@tanstack/react-router';
import { Page404 } from '~/tanstart-ajjolly-theme-basic/components/page-404';

export const Route = createFileRoute('/404/')({
  component: Page404,
});
