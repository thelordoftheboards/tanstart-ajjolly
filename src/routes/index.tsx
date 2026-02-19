import { createFileRoute } from '@tanstack/react-router';
import { PageHome } from '~/tanstart-ajjolly-examples/components/page-home';

export const Route = createFileRoute('/')({
  component: PageHome,
});
