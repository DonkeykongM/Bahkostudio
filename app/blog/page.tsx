"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { serviceData } from "@/lib/service-data";

export default function BlogPage() {
  const { t, language } = useLanguage();

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
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand mb-4">
            <ArrowLeftIcon className="h-4 w-4" />
            {t("blog.backToHome")}
          </Link>
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
            {t("blog.knowledgeBase")}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            {t("blog.exploreBlog")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("blog.description")}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceData).map(([slug, service]) => (
              <div key={slug} className="bg-background rounded-xl overflow-hidden shadow-lg border border-border/20 group hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48">
                  <Image 
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-2">{service.badge}</Badge>
                  <h3 className="text-xl font-semibold mb-3">{t("blog.post.howItImproves")} {service.title.toLowerCase()} {t("blog.post.businessResults")}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" className="w-full mt-2">
                    <Link href={`/blog/${slug}`} className="flex items-center justify-center gap-2">
                      {t("blog.readMore")}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-brand text-white rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-foreground opacity-90"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("blog.readyToImplement")}</h2>
              <p className="max-w-2xl mx-auto mb-8">
                {t("blog.consultationText")}
              </p>
              <Button variant="outline" size="lg" className="bg-white text-brand hover:bg-white/90 hover:text-brand shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/#contact" className="flex items-center gap-2">
                  {t("blog.bookConsultation")}
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-2 px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("blog.newsletter.title")}
              </Badge>
              <h2 className="text-3xl font-bold mb-2">{t("blog.newsletter.heading")}</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("blog.newsletter.description")}
              </p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder={t("blog.newsletter.emailPlaceholder")}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
                  required
                />
              </div>
              <Button type="submit" className="shadow-md hover:shadow-lg transition-all duration-300">
                {t("blog.newsletter.subscribe")}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              {t("blog.newsletter.terms")}
            </p>
          </div>
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