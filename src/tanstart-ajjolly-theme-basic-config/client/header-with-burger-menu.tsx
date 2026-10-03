/** biome-ignore-all lint/correctness/useImageSize: Allow */
import { type IconProps } from '@tabler/icons-react';
import { cn } from 'cn';
import IconDarkMode from '../../base-config/icon/logo-32x32-transparent-dark-mode.svg';
import IconLightMode from '../../base-config/icon/logo-32x32-transparent-light-mode.svg';

export const headerTitle = 'Tanstart A. J. Jolly';

export const HeaderIcon = ({ className, ...props }: IconProps) => (
  <>
    {/* @ts-expect-error */}
    <img alt={`${headerTitle} Logo`} className={cn('dark:hidden', className)} src={IconLightMode} {...props} />
    {/* @ts-expect-error */}
    <img alt={`${headerTitle} Logo`} className={cn('hidden dark:block', className)} src={IconDarkMode} {...props} />
  </>
);
