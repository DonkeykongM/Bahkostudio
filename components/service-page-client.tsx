"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { serviceData } from "@/lib/service-data";

interface ServicePageClientProps {
  serviceId: string;
  service: any;
}

export default function ServicePageClient({ serviceId, service }: ServicePageClientProps) {
  const { t } = useLanguage();

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("service.notFound.title")}</h1>
        <p className="mb-8">{t("service.notFound.description")}</p>
        <Button asChild>
          <Link href="/#services">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            {t("service.notFound.backToServices")}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/10 py-6 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-brand flex items-center gap-2">
            <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center">B</span>
            bahkostudio
          </Link>
          <Button asChild>
            <Link href="/#contact">{t("nav.consultation")}</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-brand-foreground/5"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/#services" className="text-sm font-medium text-muted-foreground hover:text-brand flex items-center gap-1">
                <ArrowLeftIcon className="h-4 w-4" />
                {t("service.allServices")}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium">{service.title}</span>
            </div>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
              {service.badge}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 max-w-xl">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/#pricing">{t("service.seePricing")}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-brand/30 hover:bg-brand/5">
                <Link href="/#contact">{t("service.contactUs")}</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-brand-foreground/20 rounded-xl blur-xl -z-10"></div>
              <div className="relative w-full h-[400px]">
                  <Image 
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="rounded-xl shadow-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    quality={100}
                    loading="eager"
                    unoptimized
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("service.features.title").replace("{service}", service.title.toLowerCase())}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("service.features.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-background rounded-xl p-8 shadow-lg border border-border/20 relative group hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 bg-brand/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("service.integration.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("service.integration.description").replace("{service}", service.title.toLowerCase())}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20">
              <h3 className="text-xl font-semibold mb-6">{t("service.integration.platforms")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {service.integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                    {integration.icon}
                    <span>{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20">
              <h3 className="text-xl font-semibold mb-6">{t("service.integration.process")}</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-brand/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-foreground opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">{service.guarantee.title}</h2>
            <p className="text-lg mb-6 text-center">{service.guarantee.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {service.guarantee.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" variant="outline" className="bg-white text-brand hover:bg-white/90 hover:text-brand shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/#contact">{t("service.guarantee.cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("service.cta.title").replace("{service}", service.title.toLowerCase())}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("service.cta.description").replace("{service}", service.title.toLowerCase())}
          </p>
          <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <Link href="/#contact">{t("service.cta.button")}</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}