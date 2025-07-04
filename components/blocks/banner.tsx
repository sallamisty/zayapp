import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link';

export default function Banner() {
  const t = useTranslations("banner")

  return (
    <div className="rounded bg-gradient-to-br from-purple-900 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text & Button Section */}
        <div className="flex-1 text-center md:text-start space-y-6">
          <p className="text-orange-400 text-sm">{t('title')}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t('things')} <br />
            {t('thingstwo')}
          </h1>
          <div className="relative inline-block">
          <p className="text-4xl font-bold">
            10.000.00 <span className="text-3xl font-medium">{t('sales')}</span>
          </p>
<svg width="178" height="24" viewBox="0 0 378 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00004 21.7725C49.5376 8.55229 190.772 -10.8752 375.409 17.1765" stroke="#F18825" strokeWidth="7" strokeLinecap="round"/>
</svg>

</div>

          <p className="text text-gray-300">
            {t('nother')}
          </p>
            <Link  href="https://forms.gle/wcqpYEr6FT2mshwv8" target='_blank'>
          <Button className="bg-orange-500 hover:bg-orange-500 text-white px-4 py-6 rounded-full gap-2">
            {t('create')}

            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="20" fill="white"/>
<path d="M13.1619 20.0243C13.6095 17.7861 13.8333 16.667 14.5729 15.9462C14.7096 15.813 14.8575 15.6918 15.0149 15.5838C15.8667 15 17.008 15 19.2905 15H20.7096C22.9922 15 24.1334 15 24.9853 15.5838C25.1427 15.6918 25.2905 15.813 25.4273 15.9462C26.1668 16.667 26.3906 17.7861 26.8383 20.0243C27.4809 23.2376 27.8023 24.8443 27.0625 25.9827C26.9286 26.1889 26.7723 26.3796 26.5964 26.5513C25.6251 27.5 23.9866 27.5 20.7096 27.5H19.2905C16.0135 27.5 14.375 27.5 13.4037 26.5513C13.2279 26.3796 13.0715 26.1889 12.9376 25.9827C12.1979 24.8443 12.5192 23.2376 13.1619 20.0243Z" stroke="#F18825" strokeWidth="1.5"/>
<path d="M17.5 15.0003V14.167C17.5 12.7863 18.6192 11.667 20 11.667C21.3807 11.667 22.5 12.7863 22.5 14.167V15.0003" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M17.6424 22.5C17.9856 23.471 18.9117 24.1667 20.0002 24.1667C21.0887 24.1667 22.0148 23.471 22.3579 22.5" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

          </Button>
          </Link>
        </div>

        {/* Image/Card Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image 
            src="/banner.webp" 
            alt="zaya digital" 
            width={600} 
            height={400} 
            className="max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}