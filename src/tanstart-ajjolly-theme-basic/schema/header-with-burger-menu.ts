import { type FileRouteTypes } from '~/routeTree.gen';

export type HeaderWithBurgerMenuLinkType =
  | {
      title: string;
      to: FileRouteTypes['to'];
    }
  | {
      title: string;
      url: string;
    };

export type HeaderWithBurgerMenuProps = {
  links: HeaderWithBurgerMenuLinkType[];
};
