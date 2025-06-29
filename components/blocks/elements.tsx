
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const cards = [
  {
    titleKey: 'cards.guide.title',
    descKey: 'cards.guide.desc',
    href: 'https://forms.gle/wcqpYEr6FT2mshwv8',
  },
  {
    titleKey: 'cards.blog.title',
    descKey: 'cards.blog.desc',
    href: 'https://forms.gle/wcqpYEr6FT2mshwv8',
  },
  {
    titleKey: 'cards.community.title',
    descKey: 'cards.community.desc',
    href: 'https://forms.gle/wcqpYEr6FT2mshwv8',
  },
  {
    titleKey: 'cards.help.title',
    descKey: 'cards.help.desc',
    href: 'https://forms.gle/wcqpYEr6FT2mshwv8',
  },
]


export default function CardsSection() {
  const t = useTranslations("cards")

  return (
    <section id="education" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 dark:text-white">
        {t('sectionTitle')}
        </h2>
        <p className="text">
         {t('sectionDesc')}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div key={i} className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="bg-orange-400 text-white rounded-full p-1 w-10 h-10 items-center justify-center flex" >

                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_242_537)">
<path fillRule="evenodd" clipRule="evenodd" d="M22.7066 3.45652L23.0255 3.4964C23.868 3.6129 24.9823 3.76897 25.6143 4.40092C26.1312 4.91797 26.3298 5.75785 26.4487 6.50763L26.5187 6.9896C26.676 8.12723 26.7171 9.61796 26.4487 11.2727C25.9189 14.5391 24.1801 18.4362 19.8132 21.4536C19.7901 21.689 19.7883 21.9258 19.7937 22.1632L19.8053 22.5194C19.8259 23.0654 19.8464 23.6106 19.6935 24.1415C19.4558 24.967 18.6106 25.5103 17.8198 25.9005L17.432 26.0835L16.932 26.3041C15.9968 26.701 14.7341 27.1084 13.9425 26.3169C13.4684 25.8428 13.2724 25.1476 13.1136 24.4559L13.0553 24.1971C12.9796 23.858 12.9056 23.5265 12.8045 23.2296C12.7424 23.0474 12.6754 22.8616 12.6028 22.6739C12.5236 22.7707 12.4388 22.8646 12.3485 22.9549C11.9171 23.3864 11.2736 23.6875 10.7434 23.8981C10.1646 24.1279 9.51009 24.3281 8.90391 24.4926L8.59306 24.575L7.99682 24.7232L7.4568 24.8477L6.81054 24.9854L6.40656 25.0646C6.0461 25.1317 5.61064 25.0442 5.28324 24.7169C4.95584 24.3894 4.86829 23.954 4.93545 23.5935L5.04237 23.0548L5.2346 22.1824L5.38945 21.546L5.5075 21.0961C5.67193 20.49 5.87219 19.8355 6.10201 19.2566C6.31254 18.7265 6.61375 18.083 7.04516 17.6516L7.14563 17.5547L7.06499 17.5231C6.86256 17.444 6.64369 17.3716 6.4164 17.3007L6.07018 17.1946C5.20301 16.9314 4.27544 16.6497 3.69831 16.0726C2.9999 15.3742 3.23495 14.309 3.57247 13.4255L3.71098 13.0831L3.93164 12.5831L4.11462 12.1953C4.50487 11.4046 5.04816 10.5593 5.87363 10.3216C6.31128 10.1956 6.76646 10.1884 7.22375 10.2011L7.49825 10.2103C7.85571 10.2233 8.21258 10.2363 8.56146 10.2019C11.5789 5.83496 15.476 4.09625 18.7424 3.56643C20.2467 3.32242 21.6155 3.33418 22.7066 3.45652ZM10.4415 19.2991C10.0377 18.9989 9.49397 18.9736 9.06668 19.2233L8.92891 19.3168L8.81293 19.4194L8.65665 19.6177C8.33122 20.0871 8.14638 20.7372 8.00211 21.3448L7.86767 21.9299C7.84628 22.0223 7.8251 22.1115 7.80365 22.1964L8.04259 22.1387L8.56464 22.0192C9.28796 21.8506 10.0882 21.6307 10.581 21.1869C11.0291 20.7387 11.0656 20.0353 10.6909 19.5452L10.5887 19.4274L10.5593 19.3985L10.4415 19.2991ZM19.4196 10.5807C18.4432 9.60435 16.8604 9.60435 15.884 10.5807C14.9078 11.557 14.9078 13.1399 15.884 14.1162C16.8604 15.0925 18.4432 15.0925 19.4196 14.1162C20.3959 13.1399 20.3959 11.557 19.4196 10.5807Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_242_537">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>

                </div>
              </div>
                <h3 className="text-purple-800 font-bold text-xl flex items-center gap-1">
                {t(card.titleKey)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                {t(card.descKey)}
                </p>
            </div>
            <div className="mt-6 flex justify-between items-center">
            <Link href={card.href} target='_blank'>
              <Button variant="ghost" className="text-purple-700 p-0 hover:text-purple-500 hover:bg-white-100">
                {t('discoverNow')}
              </Button>
            </Link>
                        <Link href={card.href} target='_blank'>
              <div className="bg-purple-700 text-white p-2 rounded-full">
                <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2917 16.2913L6.70837 6.70801M6.70837 6.70801V15.333M6.70837 6.70801H15.3334" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </div>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
