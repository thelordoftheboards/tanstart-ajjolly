import { createFileRoute } from '@tanstack/react-router';
import { PageHome } from '~/tanstart-ajjolly-website/pages/page-home';

export const Route = createFileRoute('/')({
  component: PageHome,
});
