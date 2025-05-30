'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function FeaturesSectionMain() {
  const t = useTranslations('Featuresmain');

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white">{t('title')}</h2>
        <p className="text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>
      {/* Main Feature - Full Width */}
      <Card className="flex flex-col lg:flex-row items-center justify-between p-6 rounded-3xl shadow-md">
                <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <Image
            src="/Groups.webp"
            alt="analytics"
            width={400}
            height={500}
            className="max-w-full"
          />
        </div>
        <div className="lg:w-1/2 space-y-4 text-start">
          <div className="inline-flex items-start bg-orange-500 p-2 rounded-full w-fit">
            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3895 15.8091L26.0366 13.3943C26.7919 10.5754 27.1695 9.166 26.8851 7.94629C26.6606 6.98321 26.1555 6.10835 25.4337 5.43234C24.5196 4.57619 23.1101 4.19854 20.2914 3.44322C17.4725 2.68791 16.063 2.31026 14.8434 2.59466C13.8802 2.81921 13.0054 3.32431 12.3294 4.04609C11.5964 4.82872 11.2141 5.97446 10.6453 8.05701C10.5497 8.40675 10.4489 8.78291 10.3403 9.18821L9.69322 11.6033C8.93791 14.4221 8.56026 15.8315 8.84466 17.0513C9.06921 18.0144 9.57431 18.8893 10.2961 19.5653C11.2102 20.4214 12.6196 20.799 15.4385 21.5544C17.9792 22.2351 19.3749 22.6091 20.5187 22.468C20.644 22.4526 20.7661 22.431 20.8865 22.4029C21.8495 22.1784 22.7244 21.6733 23.4004 20.9515C24.2565 20.0374 24.6342 18.628 25.3895 15.8091Z" stroke="white" strokeWidth="2"/>
<path d="M20.5188 22.4676C20.2581 23.2658 19.7999 23.9878 19.1838 24.5649C18.2696 25.421 16.8601 25.7986 14.0414 26.554C11.2225 27.3093 9.81305 27.6869 8.59333 27.4025C7.63026 27.178 6.7554 26.6729 6.07939 25.9511C5.22324 25.037 4.84559 23.6276 4.09027 20.8088L3.44322 18.3939C2.68791 15.575 2.31026 14.1656 2.59466 12.9459C2.81921 11.9828 3.32431 11.108 4.04609 10.432C4.96019 9.57582 6.36961 9.19817 9.18846 8.44285C9.72176 8.29995 10.2046 8.17058 10.6453 8.05664" stroke="white" strokeWidth="2"/>
<path d="M14.7211 12.5L20.7581 14.1176" stroke="white" strokeWidth="2" strokeLinecap="round"/>
<path d="M13.75 16.1218L17.3723 17.0923" stroke="white" strokeWidth="2" strokeLinecap="round"/>
</svg>


          </div>
                    <h1 className="text-2xl md:text-4xl font-semibold leading-tight text-purple-800">
            {t('first')} <br />{t('sec')}
          </h1>
          <svg width="278" height="24" viewBox="0 0 378 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00004 21.7725C49.5376 8.55229 190.772 -10.8752 375.409 17.1765" stroke="#F18825" strokeWidth="3" strokeLinecap="round"/>
</svg>

          <p className=" text-sm leading-loose">
            {t('third')}
          </p>
        </div>

      </Card>

      {/* Two Features Side by Side on Large Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature 2: Marketing Tools */}
        <Card className="flex flex-col p-6 rounded-3xl shadow-md items-center">
          <div className="inline-flex items-start bg-orange-500 p-2 rounded-full self-start">
<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.1373 13.9004V8.41289C26.1373 7.38789 25.3623 6.22539 24.3998 5.83789L17.4373 2.98789C15.8748 2.35039 14.1123 2.35039 12.5498 2.98789L5.5873 5.83789C4.6373 6.22539 3.8623 7.38789 3.8623 8.41289V13.9004C3.8623 20.0129 8.29981 25.7379 14.3623 27.4129C14.7748 27.5254 15.2248 27.5254 15.6373 27.4129C21.6998 25.7379 26.1373 20.0129 26.1373 13.9004ZM15.9373 16.0879V19.3754C15.9373 19.8879 15.5123 20.3129 14.9998 20.3129C14.4873 20.3129 14.0623 19.8879 14.0623 19.3754V16.0879C12.7998 15.6879 11.8748 14.5129 11.8748 13.1254C11.8748 11.4004 13.2748 10.0004 14.9998 10.0004C16.7248 10.0004 18.1248 11.4004 18.1248 13.1254C18.1248 14.5254 17.1998 15.6879 15.9373 16.0879Z" fill="white"/>
</svg>

  

          </div>
          <div className="text-start mt-4 space-y-4">
            <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-purple-800">
             {t('forth')}<br />{t('fifth')}
            </h3>
            
            <p className=" text-sm leading-loose">
             {t('sixth')}
            </p>
          </div>
          <div className="mt-4">
            <Image
              src="/clip.webp"
              alt="marketing tools"
              width={220}
              height={220}
            />
          </div>
        </Card>

        {/* Feature 3: Instant Delivery */}
        <Card className="flex flex-col p-6 rounded-3xl shadow-md items-center">
          <div className="inline-flex items-start bg-orange-500 p-2 rounded-full self-start">
                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 26.5625C27.5 27.075 27.075 27.5 26.5625 27.5H3.4375C2.925 27.5 2.5 27.075 2.5 26.5625C2.5 26.05 2.925 25.625 3.4375 25.625H26.5625C27.075 25.625 27.5 26.05 27.5 26.5625Z" fill="white"/>
<path d="M19.2392 5.65215L5.81426 19.0771C5.30176 19.5896 4.47676 19.5896 3.97676 19.0771H3.96426C2.22676 17.3271 2.22676 14.5021 3.96426 12.7646L12.9017 3.82715C14.6517 2.07715 17.4767 2.07715 19.2267 3.82715C19.7392 4.31465 19.7392 5.15215 19.2392 5.65215Z" fill="white"/>
<path d="M26.0267 10.6129L22.2142 6.80039C21.7017 6.28789 20.8767 6.28789 20.3767 6.80039L6.95176 20.2254C6.43926 20.7254 6.43926 21.5504 6.95176 22.0629L10.7643 25.8879C12.5142 27.6254 15.3392 27.6254 17.0892 25.8879L26.0142 16.9504C27.7892 15.2004 27.7892 12.3629 26.0267 10.6129ZM15.9517 21.9004L14.4392 23.4254C14.1267 23.7379 13.6142 23.7379 13.2892 23.4254C12.9767 23.1129 12.9767 22.6004 13.2892 22.2754L14.8142 20.7504C15.1142 20.4504 15.6392 20.4504 15.9517 20.7504C16.2642 21.0629 16.2642 21.6004 15.9517 21.9004ZM20.9142 16.9379L17.8642 20.0004C17.5517 20.3004 17.0392 20.3004 16.7142 20.0004C16.4017 19.6879 16.4017 19.1754 16.7142 18.8504L19.7767 15.7879C20.0767 15.4879 20.6017 15.4879 20.9142 15.7879C21.2267 16.1129 21.2267 16.6254 20.9142 16.9379Z" fill="white"/>
</svg>      

          </div>
          <div className="text-start mt-4 space-y-4">
            <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-purple-800">
              {t('seven')}<br />{t('eight')}
            </h3>
            <p className="text-sm leading-loose">
                {t('nine')}
            </p>
          </div>
          <div className="mt-4">
            <Image
            src="/Layer_1.webp"
              alt="instant delivery"
              width={220}
              height={220}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
