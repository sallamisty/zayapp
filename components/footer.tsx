import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { Mail, PhoneCall, MapPin } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import LocalSwitcher from "@/components/ui/locals";
interface HeaderProps {
    direction: "rtl" | "ltr";
  }


export const Footer = ({ direction }: HeaderProps) => {
    const t = useTranslations("footer");

  return (
    <footer className="text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

        
        {/* Zaya Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-2">{t('zaya')}</h3>
          <div className="h-1 w-10 rounded bg-purple-700 mb-4"></div>
          <ul className="space-y-2">
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/market">{t('digital_market')}</Link></li>
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/join-team">{t('join_team')}</Link></li>
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/terms">{t('terms')}</Link></li>
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/privacy">{t('privacy')}</Link></li>
          </ul>
        </div>

        {/* App Store Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-2">{t('app_store')}</h3>
          <div className="h-1 w-10 rounded bg-purple-700 mb-4"></div>
          <ul className="space-y-2">
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/about-store">{t('what_is_store')}</Link></li>
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/browse-apps">{t('browse_apps')}</Link></li>
          </ul>
        </div>

        {/* Support Services */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-2">{t('support_services')}</h3>
          <div className="h-1 w-10 rounded bg-purple-700 mb-4"></div>
          <ul className="space-y-2">
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/help-center">{t('help_center')}</Link></li>
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/zaya-academy">{t('zaya_academy')}</Link></li>
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/whatsapp-community">{t('whatsapp_community')}</Link></li>
            <li className='transition-colors duration-200 cursor-pointer hover:text-primary'><Link href="/complaints">{t('complaints')}</Link></li>
          </ul>
        </div>

      {/* Store Buttons */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-2">{t('soon')}</h3>
          <div className="h-1 w-10 rounded bg-purple-700 mb-4"></div>
          <div className="space-y-4">
            <a href="#" className="block w-fit">
              <Image
                className='rounded-full hover:opacity-85'
                src="/ap.webp"
                alt="Download on Apple Store"
                width={160}
                height={50}
              />
            </a>
            <a href="#" className="block w-fit">
              <Image
                className='rounded-full hover:opacity-85'
                src="/gp.webp"
                alt="Download on Google Play"
                width={160}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto font-bold px-4 py-2 text-primary border-t text-center text-xs flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="mt-2 md:mt-0">
          {t('rights')} © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-2 flex-col md:flex-row">
          <span className='flex gap-1 items-center'>{t('maps')}<MapPin className="w-3 h-3" strokeWidth={3}/> </span>
          <span className='flex gap-1 items-center'>{t('email')}<Mail className="w-3 h-3" strokeWidth={3} /> </span>
          <span className='flex gap-1 items-center'>{t('phone')} <PhoneCall  className="w-3 h-3" strokeWidth={3} /> </span>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shadow-md modetoggle">
    <ModeToggle />
  </div>
  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shadow-md localtoggle">
    <LocalSwitcher />
  </div>
</div>
    </footer>
  );
};