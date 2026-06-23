import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SERVICES, getServiceById } from "@/lib/data/services-data";
import ServiceCarousel from "@/components/services/services-carousel";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return {};
  return {
    title: `${service.name} | SignFix`,
    description: service.description[0],
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 md:py-24">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm  transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ServiceCarousel images={service.images} alt={service.name} />

          <div>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {service.name}
            </h1>

            <div className="mt-6 space-y-4">
              {service.description.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-xs md:text-sm text-white/55 not-dark:text-neutral-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-lime text-ink-dark px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Request a quote
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
