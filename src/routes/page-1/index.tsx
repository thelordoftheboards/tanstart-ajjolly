import { createFileRoute } from '@tanstack/react-router';
import { Page1 } from '~/tanstart-ajjolly-examples/components/page-1';

export const Route = createFileRoute('/page-1/')({
  component: Page1,
});
