import type { Metadata } from "next";
import Link from "next/link";
import { HeroCrossfade } from "@/components/HeroCrossfade";
import { BlogCarousel } from "@/components/BlogCarousel";
import { Icon } from "@/components/Icon";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Gutachtensoftware für Bausachverständige",
  description: "KI-gestützte Gutachtenerstellung für Bausachverständige. Fallverwaltung, digitale Akte und rechtssicherer Export — strukturiert vom Beweisbeschluss bis zum fertigen Gutachten.",
  alternates: { canonical: "https://gutachten-ai.de" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://gutachten-ai.de",
    siteName: "gutachten-ai.de",
    title: "Gutachtensoftware für Bausachverständige",
    description: "KI-gestützte Gutachtenerstellung für Bausachverständige. Fallverwaltung, digitale Akte und rechtssicherer Export — strukturiert vom Beweisbeschluss bis zum fertigen Gutachten.",
  },
};

async function getHomeData() {
  const [page, posts] = await Promise.all([
    client.fetch(groq`*[_type == "homePage"][0]`),
    client.fetch(groq`*[_type == "post"] | order(publishedAt desc)[0...9]{ title, "slug": slug.current, category, publishedAt, excerpt }`),
  ]);
  return { page, posts };
}

export default async function Home() {
  const { page: d, posts } = await getHomeData();

  return (
    <main>

      {/* 1. HERO */}
      <section className="relative min-h-[819px] flex items-center bg-bg overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.1] mb-8 text-on-surface">
              {d?.heroTitle}
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              {d?.heroSubtext}
            </p>
            <div className="flex items-center gap-4">
              <Link href="/funktionen" className="bg-button-bg text-white px-8 py-4 rounded-xl font-medium hover:bg-button-bg/90 transition-colors">
                {d?.heroPrimaryButton}
              </Link>
              <Link href="/ablauf" className="border-[0.5px] border-outline text-on-surface px-8 py-4 rounded-xl font-medium hover:bg-surface-container-high transition-colors">
                {d?.heroSecondaryButton}
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block z-0">
            <HeroCrossfade />
          </div>
        </div>
      </section>

      {/* 2. TRUST-BANDEROLE */}
      <section className="bg-bg border-y-[0.5px] border-outline py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {d?.trustItems?.map((item: { icon: string; label: string }, i: number) => (
              <div key={i} className="flex items-center gap-2 text-on-surface-variant">
                <Icon name={item.icon} size={16} className="icon-gray" />
                <span className="text-xs font-medium tracking-wider uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS */}
      <section className="bg-surface border-b-[0.5px] border-outline">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {d?.stats?.map((stat: { value: string; label: string; highlight: boolean }, i: number) => (
              <div key={i} className="text-center md:text-left">
                <div className={`text-3xl font-medium mb-1 ${stat.highlight ? "text-primary" : "text-on-surface"}`}>{stat.value}</div>
                <div className="text-xs text-on-surface-variant font-medium tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROBLEM/SOLUTION */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl font-medium text-on-surface mb-4">{d?.problemTitle}</h2>
            <p className="text-on-surface-variant">{d?.problemSubtext}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-[0.5px] border-outline bg-surface">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="warning" size={20} className="icon-red" />
                <span className="font-medium text-on-surface">Der klassische Weg</span>
              </div>
              <ul className="space-y-4">
                {d?.problemItems?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <Icon name="close" size={14} className="icon-red mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border-[0.5px] border-primary/40 bg-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="auto_awesome" size={20} className="icon-orange" />
                <span className="font-medium text-on-surface">Mit dem Gutachten Assistenten</span>
              </div>
              <ul className="space-y-4">
                {d?.solutionItems?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <Icon name="check" size={14} className="icon-orange mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURES GRID */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium text-on-surface mb-4">{d?.featuresTitle}</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">{d?.featuresSubtext}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline">
            {d?.features?.map((f: { icon: string; title: string; description: string }, i: number) => (
              <div key={i} className="p-10 bg-surface hover:bg-surface-container transition-colors">
                <Icon name={f.icon} size={24} className="icon-orange mb-6 block" />
                <h3 className="text-xl font-medium text-on-surface mb-4">{f.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">{f.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/funktionen" className="border-[0.5px] border-outline text-on-surface px-8 py-4 rounded-xl font-medium hover:bg-surface-container-high transition-colors inline-block">
              Alle Funktionen im Detail →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ABLAUF */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium text-on-surface mb-4">{d?.ablaufTitle}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{d?.ablaufSubtext}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-[0.5px] bg-outline"></div>
            {d?.ablaufSteps?.map((step: { step: string; icon: string; title: string; description: string }, i: number) => (
              <div key={i} className="relative p-8 rounded-2xl border-[0.5px] border-outline bg-surface">
                <div className="flex items-center gap-4 mb-6">
                  <span aria-hidden="true" className="text-4xl font-light text-primary/30">{step.step}</span>
                  <Icon name={step.icon} size={24} className="icon-orange" />
                </div>
                <h3 className="text-xl font-medium text-on-surface mb-3">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/ablauf" className="border-[0.5px] border-outline text-on-surface px-8 py-4 rounded-xl font-medium hover:bg-surface-container-high transition-colors inline-block">
              {d?.ablaufButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FÜR WEN */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-medium text-on-surface mb-4">{d?.fuerWenTitle}</h2>
            <p className="text-on-surface-variant">{d?.fuerWenSubtext}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d?.fuerWenItems?.map((item: { icon: string; title: string; description: string }, i: number) => (
              <div key={i} className="p-8 rounded-2xl border-[0.5px] border-outline bg-surface-container">
                <Icon name={item.icon} size={30} className="icon-orange mb-6 block" />
                <h3 className="text-lg font-medium text-on-surface mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BLOG KARUSSELL */}
      <BlogCarousel
        posts={posts}
        title={d?.blogTitle}
        subtext={d?.blogSubtext}
        linkText={d?.blogLinkText}
      />

      {/* 9. OFFER CARD */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-full max-w-2xl p-12 rounded-3xl border-[0.5px] border-primary/40 bg-surface relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-button-bg text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1 rounded-full">
              {d?.offerBadge}
            </div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-medium text-on-surface mb-4">{d?.offerTitle}</h2>
              <p className="text-on-surface-variant">{d?.offerSubtext}</p>
            </div>
            <div className="space-y-6 mb-12">
              {d?.offerItems?.map((item: string, i: number) => (
                <div key={i} className={`flex items-center justify-between pb-4 ${i < d.offerItems.length - 1 ? "border-b-[0.5px] border-outline" : ""}`}>
                  <span className="text-on-surface-variant">{item}</span>
                  <Icon name="done_all" size={20} className="icon-orange" />
                </div>
              ))}
            </div>
            <Link href="/kontakt#formular" className="block w-full bg-button-bg text-white py-5 rounded-xl font-medium text-lg text-center hover:shadow-[0_0_20px_rgba(197,79,14,0.3)] transition-all">
              {d?.offerButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 bg-bg text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-on-surface mb-8">{d?.ctaTitle}</h2>
          <p className="text-lg text-on-surface-variant mb-12">{d?.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={d?.ctaPrimaryButtonLink || "/kontakt#formular"} className="bg-button-bg text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">
              {d?.ctaPrimaryButtonText}
            </Link>
            <Link href={d?.ctaSecondaryButtonLink || "/funktionen"} className="border-[0.5px] border-outline text-on-surface px-10 py-4 rounded-xl font-medium text-lg hover:bg-surface-container-high transition-all">
              {d?.ctaSecondaryButtonText}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
