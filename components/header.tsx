'use client';
import {Link} from '@/i18n/routing';
import { useTranslations } from "next-intl";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface HeaderProps {
  direction: "rtl" | "ltr";
  currentPath: string;
}

export const Header = ({ direction, currentPath }: HeaderProps) => {
  const t = useTranslations("navigation");
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isRTL = direction === 'rtl';

  const navItems = [
    { label: t('home'), href: '#main' },
    { label: t('education'), href: '#education' },
    { label: t('solutions'), href: '#' },
    { label: t('marketplace'), href: '' },
    { label: t('pricing'), href: '#pricing' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-black shadow-sm`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-4 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Link href='/'>
        <Image src="/logo.png" alt="Logo" width={140} height={60}/>
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className={`hidden md:flex items-center gap-6 ${isRTL ? 'flex-row' : ''}`}>
        {navItems.map(({ label, href }) => {
          const isActive = currentPath === href;
          return (
            <Link key={href} href={href}>
              <span
                className={classNames(
                  'relative text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-primary',
                  {
                    'text-primary': isActive,
                    '': !isActive,
                  }
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-2 h-1 bg-primary rounded-full"></span>
                )}
              </span>
            </Link>
          );
        })}

<div className='flex gap-2 items-center'>

  {/* Profile Button */}
  <button className="h-[42px] aspect-square rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.1494 9C11.2204 9 12.8994 7.32107 12.8994 5.25C12.8994 3.17894 11.2204 1.5 9.1494 1.5C7.07834 1.5 5.39941 3.17894 5.39941 5.25C5.39941 7.32107 7.07834 9 9.1494 9Z" stroke="#4F1E6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.25 16.5C2.67778 15.0249 3.56097 13.7228 4.7733 12.7799C5.98562 11.837 7.46501 11.3015 9 11.25C12.09 11.25 14.7225 13.4325 15.75 16.5" stroke="#4F1E6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>

  {/* Create Store Button */}
  <button className="bg-purple-900 hover:bg-purple-800 transition text-white text-sm font-medium px-5 py-3 rounded-full flex items-center gap-2">
    {t('createStore')}
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.66191 10.0243C4.10955 7.78608 4.33336 6.66697 5.07292 5.94619C5.20961 5.81297 5.35749 5.69175 5.51492 5.58384C6.36674 5 7.50801 5 9.79054 5H11.2096C13.4922 5 14.6335 5 15.4853 5.58384C15.6427 5.69175 15.7905 5.81297 15.9273 5.94619C16.6668 6.66697 16.8906 7.78608 17.3383 10.0243C17.981 13.2376 18.3023 14.8443 17.5625 15.9827C17.4286 16.1889 17.2723 16.3796 17.0965 16.5513C16.1251 17.5 14.4866 17.5 11.2096 17.5H9.79054C6.51356 17.5 4.87507 17.5 3.90376 16.5513C3.72789 16.3796 3.57156 16.1889 3.43762 15.9827C2.69791 14.8443 3.01924 13.2376 3.66191 10.0243Z" stroke="#F18825" strokeWidth="1.5"/>
      <path d="M8 5V4.16667C8 2.78596 9.11925 1.66667 10.5 1.66667C11.8807 1.66667 13 2.78596 13 4.16667V5" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.14246 12.5C8.48565 13.471 9.41171 14.1667 10.5002 14.1667C11.5887 14.1667 12.5148 13.471 12.858 12.5" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </button>

</div>
        
      </nav>

        {/* Mobile Menu Button - visible only on mobile */}
  <button
    onClick={() => setMobileMenuOpen(true)}
    className="md:hidden p-2 rounded-md focus:outline-none"
    aria-label="Open menu"
  >
    {/* Hamburger Icon */}
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  {/* Mobile Side Menu */}
<div
  className={classNames(
    "fixed inset-0 z-50 flex pointer-events-none", // disable pointer-events initially
    { "pointer-events-auto": mobileMenuOpen }      // enable when open
  )}
>
  {/* Overlay */}
  <div
    className={classNames(
      "fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300",
      { "opacity-100": mobileMenuOpen, "opacity-0": !mobileMenuOpen }
    )}
    onClick={() => setMobileMenuOpen(false)}
  />

  {/* Side drawer */}
  <div
    className={classNames(
      "relative bg-background w-64 p-6 flex flex-col transition-transform duration-300",
      {
        "translate-x-0": mobileMenuOpen,
        "ltr: -translate-x-full": isRTL === false && !mobileMenuOpen,
        "rtl: translate-x-full": isRTL === true && !mobileMenuOpen,
      }
    )}
  >
    {/* Close button */}
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="self-end mb-4 p-1 rounded-md focus:outline-none"
      aria-label="Close menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

        {/* Nav Items */}
        <nav className="flex flex-col gap-4">
          {navItems.map(({ label, href }) => {
            const isActive = currentPath === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)} // close menu on click
                className={classNames(
                  'text-base font-medium cursor-pointer hover:text-primary',
                  {
                    'text-primary': isActive,
                    '': !isActive,
                  }
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-3 pt-6">
          <button className="h-[42px] rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            {/* Profile SVG */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.1494 9C11.2204 9 12.8994 7.32107 12.8994 5.25C12.8994 3.17894 11.2204 1.5 9.1494 1.5C7.07834 1.5 5.39941 3.17894 5.39941 5.25C5.39941 7.32107 7.07834 9 9.1494 9Z" stroke="#4F1E6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.25 16.5C2.67778 15.0249 3.56097 13.7228 4.7733 12.7799C5.98562 11.837 7.46501 11.3015 9 11.25C12.09 11.25 14.7225 13.4325 15.75 16.5" stroke="#4F1E6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="bg-purple-900 hover:bg-purple-800 transition text-white text-sm font-medium px-5 py-3 rounded-full flex items-center gap-2 justify-center">
            {t('createStore')}
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66191 10.0243C4.10955 7.78608 4.33336 6.66697 5.07292 5.94619C5.20961 5.81297 5.35749 5.69175 5.51492 5.58384C6.36674 5 7.50801 5 9.79054 5H11.2096C13.4922 5 14.6335 5 15.4853 5.58384C15.6427 5.69175 15.7905 5.81297 15.9273 5.94619C16.6668 6.66697 16.8906 7.78608 17.3383 10.0243C17.981 13.2376 18.3023 14.8443 17.5625 15.9827C17.4286 16.1889 17.2723 16.3796 17.0965 16.5513C16.1251 17.5 14.4866 17.5 11.2096 17.5H9.79054C6.51356 17.5 4.87507 17.5 3.90376 16.5513C3.72789 16.3796 3.57156 16.1889 3.43762 15.9827C2.69791 14.8443 3.01924 13.2376 3.66191 10.0243Z" stroke="#F18825" strokeWidth="1.5"/>
              <path d="M8 5V4.16667C8 2.78596 9.11925 1.66667 10.5 1.66667C11.8807 1.66667 13 2.78596 13 4.16667V5" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.14246 12.5C8.48565 13.471 9.41171 14.1667 10.5002 14.1667C11.5887 14.1667 12.5148 13.471 12.858 12.5" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
          </div>
    </header>
  );
};

