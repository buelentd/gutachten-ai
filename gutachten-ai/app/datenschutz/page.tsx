import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Datenschutzerklärung — gutachten-ai.de",
  description: "Datenschutzerklärung gemäß DSGVO für gutachten-ai.de",
  alternates: { canonical: "https://gutachten-ai.de/datenschutz" },
  robots: { index: false },
};

async function getDatenschutz() {
  return await client.fetch(groq`*[_type == "datenschutz"][0]{ sections[] { title, content } }`);
}

export default async function Datenschutz() {
  const d = await getDatenschutz();

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Datenschutzerklärung", href: "/datenschutz" }]} />
        <h1 className="text-4xl font-normal tracking-tight text-on-surface mb-12">Datenschutzerklärung</h1>
        <div className="space-y-10 text-on-surface">
          {d?.sections?.map((section: { title: string; content: string }, i: number) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-on-surface mb-4">{section.title}</h2>
              <p className="text-on-surface-variant leading-relaxed text-sm whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
