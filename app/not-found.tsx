import { getTranslations } from 'next-intl/server';
import NotFoundClient from './not-found-client';
import "./globals.css";

export default async function NotFoundPage() {
  const t = await getTranslations('notfound');

  return (
    <NotFoundClient
      forofor={t('forofor')}
      oups={t('oups')}
      seconds={t('seconds')}
      button={t('button')}
    />
  );
}