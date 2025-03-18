"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

interface BlogPostClientProps {
  service: any;
  content: any;
}

export default function BlogPostClient({ service, content }: BlogPostClientProps) {
  const { t } = useLanguage();

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

      {/* Blog Post Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-6 flex items-center gap-2">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-brand">
                {t("blog.post.home")}
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-brand">
                {t("blog.post.blog")}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium">{service.title}</span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Title */}
            <Badge variant="outline" className="self-start mb-4 px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
              {service.badge}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("blog.post.howToTransform")} {service.title.toLowerCase()} {t("blog.post.yourBusiness")}
            </h1>
            
            {/* Author & Date */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white">
                  JS
                </div>
                <div>
                  <div className="text-sm font-medium">Johan Svensson</div>
                  <div className="text-xs text-muted-foreground">{t("blog.post.aiStrategist")}</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{t("blog.post.published")}: 12 June 2025</div>
            </div>

            {/* Introduction */}
            <div className="prose max-w-none mb-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {content.intro}
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {content.sections.map((section: any, index: number) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose max-w-none mb-8">
                    {section.content.split('\n\n').map((paragraph: string, pIndex: number) => (
                      <p key={pIndex} className="text-lg text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* CTA after each section */}
                  <div className="bg-muted/30 border border-border/30 rounded-lg p-6 my-8">
                    <h3 className="text-xl font-semibold mb-3">{t("blog.post.learnMore")} {service.title.toLowerCase()}?</h3>
                    <p className="text-muted-foreground mb-4">
                      {t("blog.post.expertHelp")}
                    </p>
                    <Button asChild className="shadow-md hover:shadow-lg transition-all duration-300">
                      <Link href="/#contact" className="flex items-center gap-2">
                        {t("blog.post.bookFree")}
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="bg-brand text-white rounded-xl p-8 mt-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-foreground opacity-90"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t("blog.post.ready")} {service.title.toLowerCase()} {t("blog.post.inYourCompany")}
                </h2>
                <p className="mb-6 max-w-2xl">
                  {t("blog.post.guaranteeText")}
                </p>
                <div className="space-y-4">
                  {service.guarantee.points.slice(0, 3).map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="outline" size="lg" className="bg-white text-brand hover:bg-white/90 hover:text-brand shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link href="/#contact" className="flex items-center gap-2">
                      {t("blog.post.bookFree")}
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">{t("blog.post.relatedArticles")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(serviceData)
                  .filter(([key]) => key !== (service.id || ""))
                  .slice(0, 3)
                  .map(([otherSlug, otherService]: [string, any]) => (
                    <div key={otherSlug} className="bg-background rounded-xl overflow-hidden shadow-lg border border-border/20 group hover:-translate-y-1 transition-all duration-300">
                      <div className="relative h-40">
                        <Image 
                          src={otherService.heroImage}
                          alt={otherService.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold mb-2 line-clamp-2">
                          {t("blog.post.howItImproves")} {otherService.title.toLowerCase()} {t("blog.post.businessResults")}
                        </h4>
                        <Button asChild variant="outline" size="sm" className="w-full mt-2">
                          <Link href={`/blog/${otherSlug}`}>
                            {t("blog.post.readArticle")}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}