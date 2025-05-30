'use client';
import { usePathname } from 'next/navigation';
import { Header } from './header';

interface HeaderWrapperProps {
  direction: 'rtl' | 'ltr';
}

export const HeaderWrapper = ({ direction }: HeaderWrapperProps) => {
  const pathname = usePathname();

  // Strip locale prefix (e.g., '/en', '/ar') from pathname
  const currentPath = pathname.replace(/^\/(en|ar)(?=\/|$)/, '');

  return <Header direction={direction} currentPath={currentPath || '/'} />;
};
