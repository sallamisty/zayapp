'use client'

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {useTranslations} from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('Faq');

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') },
    { q: t('q8'), a: t('a8') },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2 dark:text-white">{t('title')}</h2>
      <p className=" mb-10">{t('subtitle')}</p>

      <Accordion type="single" collapsible className="w-full space-y-2 text-right">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className=" rounded px-4 bg-gray-100">
            <AccordionTrigger className="flex justify-between text-start items-center text-purple-900 font-medium text-md">
              <div className="flex gap-2 text-sm sm:text-base">
              <svg width="22" height="26" viewBox="0 0 26 26" fill="none" className="shrink-0" xmlns="http://www.w3.org/2000/svg">
              <rect width="26" height="26" rx="13" fill="#4F1E6F"/>
              <path d="M8.5 13H17.5M13 8.5V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {faq.q}
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-700 leading-relaxed text-start">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
