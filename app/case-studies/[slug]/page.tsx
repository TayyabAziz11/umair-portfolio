import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import CaseStudyLayout from "@/components/CaseStudyLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Not Found" };

  return {
    title: study.title,
    description: study.tagline,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return <CaseStudyLayout study={study} />;
}
