import { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderWrapper } from '@/components/HeaderWrapper';
import { Footer } from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const tajawal = Tajawal({
  subsets: ["arabic"], // Use the Arabic subset for better performance with RTL content
  weight: ['200','300','400','500','700','800','900'], // You can add more weights if needed
});

// Define SEO metadata per locale
const metadataByLocale: Record<string, Metadata> = {
  ar: {
    title: "زايا الرقمية - عرض و بيع منتجاتك الرقمية بسهولة",
    description:
      "زايا هي منصتك المثالية لعرض وبيع المنتجات الرقمية مثل الكتب الإلكترونية، التصاميم، الفيديوهات، الصوتيات والخدمات حسب الطلب. إدارة سهلة، حماية قوية، وتسليم فوري. ابدأ تجارتك الرقمية بثقة مع زايا.",
    keywords:
      "زايا, منصة رقمية, بيع المنتجات الرقمية, كتب إلكترونية, تصاميم, فيديوهات, صوتيات, خدمات رقمية, متجر رقمي, تحميل مباشر, التجارة الإلكترونية, الربح من المنتجات الرقمية, حماية الملفات الرقمية, بيع تصاميم, بيع كتب, بيع خدمات رقمية",
  },
  en: {
    title: "Zaya Digital - Sell Your Digital Products with Ease and Security",
    description:
      "Zaya is your ideal platform to showcase and sell digital products like eBooks, designs, videos, audio files, and custom services. Easy management, strong protection, and instant delivery. Start your digital business confidently with Zaya.",
    keywords:
      "Zaya, digital platform, sell digital products, eBooks, designs, videos, audio, digital services, online store, direct download, ecommerce, digital product sales, secure file delivery, sell designs, sell eBooks, sell services",
  },
};

// Export dynamic metadata
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  return metadataByLocale[locale] || metadataByLocale.en;
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch localized messages for the current locale
  const messages = await getMessages();

  // Determine text direction based on the locale
  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <head>
      <meta
          property="og:title"
          content="زايا الرقمية - عرض و بيع منتجاتك الرقمية بسهولة"
        />
        <meta
          property="og:description"
          content="زايا هي منصتك المثالية لعرض وبيع المنتجات الرقمية مثل الكتب الإلكترونية، التصاميم، الفيديوهات، الصوتيات والخدمات حسب الطلب. إدارة سهلة، حماية قوية، وتسليم فوري. ابدأ تجارتك الرقمية بثقة مع زايا."
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/zlXa24d.png" // Replace with an actual image link
        />
        <meta
          name="robots"
          content="index, follow"
        />
      </head>
      <body className={tajawal.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <HeaderWrapper direction={direction} />
            {children}
            <Footer direction={direction} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
