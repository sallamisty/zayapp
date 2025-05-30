'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Button } from "@/components/ui/button";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale(); // Current active locale
  const pathname = usePathname(); // Current pathname

  const onLanguageChange = (language: string) => {
    startTransition(() => {
      // Replace the current locale in the pathname with the new one
      const newPathname = `/${language}${pathname.substring(locale.length + 1)}`;
      router.replace(newPathname);
    });
  };

  return (
    <div className="flex gap-2">
      {/* Only show the button for the language that's different from the current one */}
      {locale !== 'ar' && (
        <Button
          variant="ghost"
          disabled={isPending}
          onClick={() => onLanguageChange('ar')}
        >
          AR
        </Button>
      )}
      {locale !== 'en' && (
        <Button
          variant="ghost"
          disabled={isPending}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </Button>
      )}
    </div>
  );
}
