'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Check,
  X,
  Zap,
  Flame,
  Crown,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'

const PRICES = {
  monthly: { prime: 199, lite: 89, new: 199 },
  yearly: { prime: 2388, lite: 1068, new: 2388 },
}


const planIcons = {
  prime:<svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.11908 21.439L13.2848 10.3909C18.563 3.24938 21.2022 -0.321342 23.6646 0.433218C26.1267 1.1878 26.1267 5.5673 26.1267 14.3263V15.1522C26.1267 18.3114 26.1267 19.891 27.1363 20.8818L27.1897 20.9331C28.2209 21.9031 29.8649 21.9031 33.1529 21.9031C39.0699 21.9031 42.0286 21.9031 43.0283 23.6975C43.0449 23.7271 43.0609 23.7572 43.0766 23.7873C44.0206 25.6097 42.3075 27.9273 38.8814 32.5625L30.7158 43.6105C25.4374 50.7519 22.7982 54.3228 20.3358 53.5681C17.8737 52.8135 17.8737 48.434 17.8737 39.6748L17.8739 38.8495C17.8739 35.69 17.8739 34.1105 16.8643 33.1196L16.811 33.0684C15.7798 32.0985 14.1358 32.0985 10.8477 32.0985C4.93068 32.0985 1.9722 32.0985 0.972333 30.3039C0.955773 30.2743 0.939665 30.2444 0.924039 30.214C-0.019828 28.3919 1.69313 26.0743 5.11908 21.439Z" fill="#4F1E6F"/>
</svg>
,
  lite: <svg width="46" height="53" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.2197 52.1375C34.5555 50.4665 45.3333 44.47 45.3333 28.9639C45.3333 14.8529 35.0045 5.45646 27.5773 1.13892C25.9293 0.180837 24 1.44081 24 3.3471V8.22305C24 12.068 22.3835 19.0863 17.8915 22.0055C15.5982 23.4959 13.1214 21.2652 12.8427 18.5443L12.6138 16.3101C12.3477 13.7127 9.70243 12.136 7.62656 13.7196C3.89725 16.5645 0 21.5463 0 28.9639C0 47.9268 14.1037 52.6676 21.1555 52.6676C21.5656 52.6676 21.9968 52.6553 22.4456 52.6295C18.9635 52.3319 13.3333 50.1713 13.3333 43.1852C13.3333 37.7204 17.3202 34.0233 20.3493 32.2263C21.164 31.7428 22.1176 32.3705 22.1176 33.3177V34.8889C22.1176 36.0913 22.5827 37.9711 23.6896 39.2577C24.9424 40.7137 26.7811 39.1884 26.9293 37.2735C26.9763 36.6695 27.5837 36.2844 28.1069 36.5903C29.8171 37.5897 32 39.7247 32 43.1852C32 48.6465 28.9893 51.1588 26.2197 52.1375Z" fill="white"/>
</svg>
,
  new: <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.4995 29.5816L46.9886 25.0357C47.2494 22.6104 47.4217 21.0088 47.2865 19.9997L47.3337 20C49.5427 20 51.3337 18.2091 51.3337 16C51.3337 13.7909 49.5427 12 47.3337 12C45.1246 12 43.3337 13.7909 43.3337 16C43.3337 16.9991 43.7001 17.9126 44.3057 18.6137C43.4361 19.1504 42.2995 20.2827 40.5883 21.9869C39.2702 23.3 38.611 23.9565 37.8758 24.0584C37.4683 24.1147 37.0534 24.0568 36.6771 23.8912C35.9982 23.592 35.5454 22.7805 34.6401 21.1573L29.8683 12.6011C29.3097 11.5997 28.8422 10.7615 28.4209 10.0871C30.1497 9.20499 31.3337 7.40741 31.3337 5.33333C31.3337 2.38781 28.9459 0 26.0003 0C23.0547 0 20.667 2.38781 20.667 5.33333C20.667 7.40741 21.851 9.20499 23.5798 10.0871C23.1585 10.7616 22.691 11.5996 22.1323 12.6011L17.3605 21.1573C16.4552 22.7805 16.0025 23.592 15.3236 23.8912C14.9474 24.0568 14.5322 24.1147 14.1249 24.0584C13.3896 23.9565 12.7305 23.3 11.4123 21.9869C9.70131 20.2827 8.56449 19.1504 7.69507 18.6137C8.3007 17.9126 8.66699 16.9991 8.66699 16C8.66699 13.7909 6.87614 12 4.66699 12C2.45785 12 0.666992 13.7909 0.666992 16C0.666992 18.2091 2.45785 20 4.66699 20L4.71422 19.9997C4.57905 21.0088 4.75131 22.6104 5.01219 25.0357L5.50113 29.5816C5.77254 32.1048 5.99822 34.5056 6.27465 36.6667H45.7259C46.0025 34.5056 46.2281 32.1048 46.4995 29.5816Z" fill="#4F1E6F"/>
<path d="M23.099 47.9993H28.9012C36.4638 47.9993 40.2449 47.9993 42.7678 45.7412C43.8692 44.7553 44.5662 42.9785 45.0694 40.666H6.93066C7.43384 42.9785 8.13112 44.7553 9.23232 45.7412C11.7552 47.9993 15.5365 47.9993 23.099 47.9993Z" fill="#4F1E6F"/>
</svg>
,
}

const planBadges = {
  prime: 'badges.prime',
  lite: 'badges.lite',
    new: 'badges.new',

}

const planKeys = ['prime', 'lite', 'new'] as const;

const featureKeys = [
  '1', '2', '3', '4', '5', '6',
  '7', '8', '9', '10', '11', '12','13',
  '14','15', '16','17','18','19','20','21','22'
] as const;

// Define FeatureKey as a union of values
type FeatureKey = typeof featureKeys[number];
type PlanKey = typeof planKeys[number];

// ✅ Allow arrays of any valid feature keys
const planFeatures: Record<PlanKey, FeatureKey[]> = {
  prime: [...featureKeys], // ✅ full list, converted to mutable
  lite: [...featureKeys],
  new: ['1', '3'], // ✅ partial subset is valid now
};

export default function PricingSection() {
  const t = useTranslations('pricing')
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
const [showAllFeatures, setShowAllFeatures] = useState(false)


  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white">{t('title')}</h2>
        <p className="text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        <div className="flex justify-center mt-4">
          <Button
          className='rounded-full'
            variant={billing === 'monthly' ? 'default' : 'ghost'}
            onClick={() => setBilling('monthly')}
          >
            {t('monthly')}
          </Button>
          <Button
            className='rounded-full'
            variant={billing === 'yearly' ? 'default' : 'ghost'}
            onClick={() => setBilling('yearly')}
          >
            {t('yearly')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {planKeys.map((plan) => {
          const price = PRICES[billing][plan]
          const features = planFeatures[plan]
          const shownFeatures = showAllFeatures ? featureKeys : featureKeys.slice(0, 8)
          const isHighlight = plan === 'lite'

          return (
            <div
              key={plan}
              className={clsx(
                'relative rounded-xl p-6 pt-12 shadow-lg',
                isHighlight
                  ? 'bg-purple-800 text-white border-2 border-orange-500'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              )}
            >
              {/* Badge top-left */}
              <div className="absolute top-2 left-2 px-3 py-1 text-xs font-bold bg-orange-500 text-white rounded-full z-10">
                {t(planBadges[plan])}
              </div>

              {/* Icon + Title */}
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2">{planIcons[plan]}</div>
                <h3 className="text-xl font-semibold text-center">{t(`plans.${plan}`)}</h3>
              </div>

              {/* Price */}
              <div className="flex mx-auto justify-center text-3xl font-bold text-center mb-4">
                {price} <span className="text-base font-medium">
  <svg
    className={clsx(
      'w-[42px] h-[42px] fill-current',
      plan === 'lite' ? 'text-white' : 'text-black dark:text-white'
    )}
    viewBox="0 0 240 240"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M133.663 56.3338C140.414 48.7553 144.563 45.3529 152.713 41.0513V167.247L133.663 171.184V56.3338Z" />
    <path d="M194.529 119.779C198.478 111.443 198.943 107.738 200 99.187L53.9804 130.894C50.5177 138.607 49.4031 142.918 48.8695 150.576L194.529 119.779Z" />
    <path d="M194.529 158.433C198.478 150.097 198.943 146.392 200 137.84L134.36 151.733C133.895 159.375 134.429 163.295 133.895 170.952L194.529 158.433Z" />
    <path d="M194.529 197.08C198.478 188.744 198.943 185.04 200 176.488L140.168 189.477C137.148 193.645 135.289 200.591 133.895 209.6L194.529 197.08Z" />
    <path d="M99.5134 183.919C105.321 176.741 111.361 167.711 115.543 160.301L45.1108 175.567C41.6481 183.28 40.5335 187.592 39.9999 195.249L99.5134 183.919Z" />
    <path d="M96.4934 45.6824C103.245 38.1039 107.394 34.7015 115.543 30.3999V160.764L96.4934 164.7V45.6824Z" />
  </svg>
</span>
              </div>

              {/* Features */}
<ul className="space-y-2 mt-4 text-sm">
  {shownFeatures.map((key) => {
    const isAvailable = planFeatures[plan].includes(key)
    return (
      <li key={key} className="flex items-center gap-2">
        {isAvailable ? (
          <svg     className={clsx(
      'ml-1',
      plan === 'lite' ? 'text-white' : 'text-[#4F1E6F]'
    )} width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.02975 0.343703C7.9834 -0.114568 10.0166 -0.114568 11.9703 0.343703C14.7916 1.00549 16.9945 3.20842 17.6563 6.02975C18.1146 7.9834 18.1146 10.0166 17.6563 11.9703C16.9945 14.7916 14.7916 16.9945 11.9703 17.6563C10.0166 18.1146 7.9834 18.1146 6.02975 17.6563C3.20842 16.9945 1.0055 14.7916 0.343703 11.9703C-0.114568 10.0166 -0.114568 7.9834 0.343703 6.02974C1.0055 3.20841 3.20842 1.00549 6.02975 0.343703ZM12.0524 7.4773C12.2689 7.2454 12.2563 6.88195 12.0244 6.6655C11.7925 6.44906 11.4291 6.46159 11.2126 6.6935L8.2678 9.8487L6.77358 8.3545C6.54927 8.1302 6.1856 8.1302 5.9613 8.3545C5.73699 8.5788 5.73699 8.9425 5.9613 9.1668L7.8759 11.0814C7.986 11.1915 8.1362 11.2522 8.2919 11.2495C8.4477 11.2468 8.5956 11.181 8.7019 11.0671L12.0524 7.4773Z" fill="currentColor"/>
</svg>

        ) : (
          <svg className={clsx(
      'ml-1',
      plan === 'lite' ? 'text-white' : 'text-black'
    )} width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.02975 0.343703C7.9834 -0.114568 10.0166 -0.114568 11.9703 0.343703C14.7916 1.00549 16.9945 3.20842 17.6563 6.02975C18.1146 7.9834 18.1146 10.0166 17.6563 11.9703C16.9945 14.7916 14.7916 16.9945 11.9703 17.6563C10.0166 18.1146 7.9834 18.1146 6.02975 17.6563C3.20842 16.9945 1.0055 14.7916 0.343703 11.9703C-0.114568 10.0166 -0.114568 7.9834 0.343703 6.02974C1.0055 3.20841 3.20842 1.00549 6.02975 0.343703ZM7.7139 6.90158C7.4896 6.67727 7.1259 6.67727 6.90158 6.90158C6.67727 7.1259 6.67727 7.4896 6.90158 7.7139L8.1877 9L6.90158 10.2861C6.67727 10.5104 6.67727 10.8741 6.90158 11.0984C7.1259 11.3227 7.4896 11.3227 7.7139 11.0984L9 9.8123L10.2861 11.0984C10.5104 11.3227 10.8741 11.3227 11.0984 11.0984C11.3227 10.8741 11.3227 10.5104 11.0984 10.2861L9.8123 9L11.0984 7.7139C11.3227 7.4896 11.3227 7.1259 11.0984 6.90158C10.8741 6.67727 10.5104 6.67727 10.2861 6.90158L9 8.1877L7.7139 6.90158Z" fill="currentColor"/>
</svg>

        )}
        {t(`features.${key}`)}
      </li>
    )
  })}
</ul>

{featureKeys.length > 8 && (
  <div className="mt-8 flex justify-center">
    <button
      onClick={() => setShowAllFeatures(prev => !prev)}
      className={clsx(
      'flex items-center gap-1 text-sm cursor-pointer hover:underline transition',
      plan === 'lite' ? 'text-white' : 'text-purple-600 dark:text-purple-300'
    )}
    >
      {showAllFeatures ? t('showLess') : t('showMore')}
      {showAllFeatures ? (
        <ChevronUp className="w-4 h-4" />
      ) : (
        <ChevronDown className="w-4 h-4" />
      )}
    </button>
  </div>
)}

              {/* Buy button */}
              <Button className="rounded-full flex mx-auto gap-2 mt-4">{t('buy')} 
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="20" fill="white"/>
<path d="M13.1619 20.0243C13.6095 17.7861 13.8333 16.667 14.5729 15.9462C14.7096 15.813 14.8575 15.6918 15.0149 15.5838C15.8667 15 17.008 15 19.2905 15H20.7096C22.9922 15 24.1334 15 24.9853 15.5838C25.1427 15.6918 25.2905 15.813 25.4273 15.9462C26.1668 16.667 26.3906 17.7861 26.8383 20.0243C27.4809 23.2376 27.8023 24.8443 27.0625 25.9827C26.9286 26.1889 26.7723 26.3796 26.5964 26.5513C25.6251 27.5 23.9866 27.5 20.7096 27.5H19.2905C16.0135 27.5 14.375 27.5 13.4037 26.5513C13.2279 26.3796 13.0715 26.1889 12.9376 25.9827C12.1979 24.8443 12.5192 23.2376 13.1619 20.0243Z" stroke="#F18825" strokeWidth="1.5"/>
<path d="M17.5 15.0003V14.167C17.5 12.7863 18.6192 11.667 20 11.667C21.3807 11.667 22.5 12.7863 22.5 14.167V15.0003" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M17.6424 22.5C17.9856 23.471 18.9117 24.1667 20.0002 24.1667C21.0887 24.1667 22.0148 23.471 22.3579 22.5" stroke="#F18825" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

</Button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
