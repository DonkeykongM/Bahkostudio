"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRightIcon,
  Briefcase,
  Users,
  Building2,
  PhoneCall,
  Search,
  Globe,
  Share2,
  TrendingUp,
  Mail,
  MessageSquare,
  Facebook,
  Instagram
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SectionDialog } from "@/components/section-dialog";
import { AutoPhoneDialog } from "@/components/auto-phone-dialog";
import { PhoneDialog } from "@/components/phone-dialog";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

function ServiceCard({ icon, title, description, slug }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20 relative group hover:-translate-y-1 transition-all duration-300 h-full">
        <div className="absolute top-0 left-0 w-1 h-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="mb-6 bg-brand/10 w-16 h-16 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

function PricingCard({ title, price, description, features, cta, popular }: PricingCardProps) {
  const { language } = useLanguage();
  
  return (
    <div className={`bg-background rounded-xl p-8 shadow-lg border ${popular ? 'border-brand' : 'border-border/20'} relative flex flex-col`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-medium">
          {cta}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-2">{price} <span className="text-lg font-normal text-muted-foreground">{language === "en" ? "SEK/month" : "kr/mån"}</span></div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-brand/10 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-brand"></div>
            </div>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={popular ? "default" : "outline"}>
        {popular ? cta : language === "en" ? "Get started" : "Kom igång"}
      </Button>
    </div>
  );
}

interface CaseStudyCardProps {
  category: string;
  title: string;
  description: string;
  result: string;
  imageSrc: string;
}

function CaseStudyCard({ category, title, description, result, imageSrc }: CaseStudyCardProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg border border-border/20 group">
      <div className="relative h-48">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Badge variant="outline" className="mb-2">{category}</Badge>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="font-medium text-brand">{result}</div>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  initials: string;
  image: string;
}

function TestimonialCard({ quote, name, position, initials, image }: TestimonialCardProps) {
  return (
    <div className="bg-background rounded-xl p-6 shadow-lg border border-border/20">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image 
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{position}</div>
        </div>
      </div>
      <p className="text-muted-foreground">{quote}</p>
    </div>
  );
}

export default function Home() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`${t("newsletter.success")} ${email}.`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <AutoPhoneDialog />
      {/* Header */}
      <header className="border-b border-border/10 py-6 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-brand flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
            <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center">B</span>
            bahkostudio
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-brand font-medium transition-colors">{t("nav.services")}</a>
            <a href="#pricing" className="text-foreground/80 hover:text-brand font-medium transition-colors">{t("nav.pricing")}</a>
            <a href="#cases" className="text-foreground/80 hover:text-brand font-medium transition-colors">{t("nav.cases")}</a>
            <Link href="/blog" className="text-foreground/80 hover:text-brand font-medium transition-colors">{language === "en" ? "Blog" : "Blogg"}</Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild className="shadow-md hover:shadow-lg transition-all duration-300">
              <a href="#contact">{t("nav.consultation")}</a>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-brand-foreground/5"></div>
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] rounded-full bg-gradient-to-br from-brand/10 to-brand-foreground/10 blur-3xl"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("hero.badge")}
              </Badge>
              <SectionDialog
                title={language === "en" ? "Welcome to bahkostudio" : "Välkommen till bahkostudio"}
                description={language === "en" ? 
                  "We are experts in AI automation and help companies grow with proven methods. Our team has over 10 years of experience in digital transformation and has helped hundreds of companies achieve their goals." : 
                  "Vi är experter på AI-automation och hjälper företag att växa med beprövade metoder. Vårt team har över 10 års erfarenhet av digital transformation och har hjälpt hundratals företag att nå sina mål."}
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 max-w-xl">
              {language === "en" ? (
                <>More customers, more sales and better results <span className="text-destructive font-bold">GUARANTEED</span></>
              ) : (
                <>Flera kunder, mer försäljning och bättre resultat <span className="text-destructive font-bold">GARANTERAD</span></>
              )}
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#pricing" className="flex items-center gap-2">
                  {t("hero.cta1")}
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <PhoneDialog />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/40">
                <div className="text-4xl font-bold text-brand">87%</div>
                <div className="text-muted-foreground">{t("hero.stats.roi")}</div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/40">
                <div className="text-4xl font-bold text-brand">30</div>
                <div className="text-muted-foreground">{t("hero.stats.days")}</div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/40">
                <div className="text-4xl font-bold text-brand">98%</div>
                <div className="text-muted-foreground">{t("hero.stats.satisfied")}</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-brand-foreground/20 rounded-xl blur-xl -z-10"></div>
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt={language === "en" ? "AI automations for business growth" : "AI-automationer för företagstillväxt"}
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold text-brand">+65%</div>
                <div className="text-sm">{language === "en" ? "Increased conversion" : "Ökad konvertering"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="outline" className="px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("howItWorks.badge")}
              </Badge>
              <SectionDialog
                title={language === "en" ? "How we work" : "Hur vi arbetar"}
                description={language === "en" ? 
                  "Our process is designed to give you maximum return on your investment. We use proven methods and the latest technology to ensure you get the best results." :
                  "Vår process är utformad för att ge dig maximal avkastning på din investering. Vi använder beprövade metoder och den senaste tekniken för att säkerställa att du får de bästa resultaten."}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("howItWorks.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("howItWorks.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20 relative group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("howItWorks.steps.step1.title")}</h3>
              <p className="text-muted-foreground">{t("howItWorks.steps.step1.description")}</p>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20 relative group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("howItWorks.steps.step2.title")}</h3>
              <p className="text-muted-foreground">{t("howItWorks.steps.step2.description")}</p>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20 relative group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("howItWorks.steps.step3.title")}</h3>
              <p className="text-muted-foreground">{t("howItWorks.steps.step3.description")}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="outline" className="px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("services.badge")}
              </Badge>
              <SectionDialog
                title={language === "en" ? "Our services" : "Våra tjänster"}
                description={language === "en" ? 
                  "We offer a wide range of AI-driven services that help your business grow. Each service is tailored to your needs and goals." :
                  "Vi erbjuder ett brett utbud av AI-drivna tjänster som hjälper ditt företag att växa. Varje tjänst är skräddarsydd efter dina behov och mål."}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<MessageSquare className="h-10 w-10 text-brand" />}
              title={t("services.chatbot.title")}
              description={t("services.chatbot.description")}
              slug="chatbot"
            />
            
            <ServiceCard 
              icon={<PhoneCall className="h-10 w-10 text-brand" />}
              title={t("services.phone.title")}
              description={t("services.phone.description")}
              slug="phone"
            />
            
            <ServiceCard 
              icon={<Search className="h-10 w-10 text-brand" />}
              title={t("services.seo.title")}
              description={t("services.seo.description")}
              slug="seo"
            />
            
            <ServiceCard 
              icon={<Globe className="h-10 w-10 text-brand" />}
              title={t("services.web.title")}
              description={t("services.web.description")}
              slug="web"
            />
            
            <ServiceCard 
              icon={<Share2 className="h-10 w-10 text-brand" />}
              title={t("services.social.title")}
              description={t("services.social.description")}
              slug="social"
            />
            
            <ServiceCard 
              icon={<TrendingUp className="h-10 w-10 text-brand" />}
              title={t("services.marketing.title")}
              description={t("services.marketing.description")}
              slug="marketing"
            />
          </div>
          
          {/* Blog Section Link */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="shadow-sm hover:shadow-md transition-all duration-300">
              <Link href="/blog" className="flex items-center gap-2">
                {language === "en" ? "Read our articles about these services" : "Läs våra artiklar om dessa tjänster"}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="outline" className="px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("pricing.badge")}
              </Badge>
              <SectionDialog
                title={language === "en" ? "Our pricing" : "Våra priser"}
                description={language === "en" ? 
                  "We offer flexible pricing plans that suit businesses of all sizes. All our packages come with our 30-day result guarantee." :
                  "Vi erbjuder flexibla prisplaner som passar företag i alla storlekar. Alla våra paket kommer med vår 30-dagars resultatgaranti."}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("pricing.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title={t("pricing.standard.title")}
              price="10 000"
              description={t("pricing.standard.description")}
              features={[
                language === "en" ? "(Chatbot and AI Phone Agent)" : "(Chatbot och AI Phone Agent)",
                t("pricing.standard.features.f2"),
                t("pricing.standard.features.f3"),
                t("pricing.standard.features.f4"),
                t("pricing.standard.features.f5")
              ]}
              cta={t("pricing.standard.cta")}
              popular={false}
            />
            
            <PricingCard 
              title={t("pricing.professional.title")}
              price="20 000"
              description={t("pricing.professional.description")}
              features={[
                language === "en" ? "(Chatbot, AI Phone Agent and Email Marketing)" : "(Chatbot, AI Phone Agent och E-post Marketing)",
                t("pricing.professional.features.f2"),
                t("pricing.professional.features.f3"),
                t("pricing.professional.features.f4"),
                t("pricing.professional.features.f5"),
                t("pricing.professional.features.f6")
              ]}
              cta={t("pricing.professional.cta")}
              popular={true}
            />
            
            <PricingCard 
              title={t("pricing.enterprise.title")}
              price="50 000"
              description={t("pricing.enterprise.description")}
              features={[
                t("pricing.enterprise.features.f1"),
                t("pricing.enterprise.features.f2"),
                t("pricing.enterprise.features.f3"),
                t("pricing.enterprise.features.f4"),
                t("pricing.enterprise.features.f5"),
                t("pricing.enterprise.features.f6"),
                t("pricing.enterprise.features.f7")
              ]}
              cta={t("pricing.enterprise.cta")}
              popular={false}
            />
          </div>
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section id="guarantee" className="py-20 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-foreground opacity-90"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="outline" className="mb-2 px-4 py-1.5 text-white border-white/20 bg-white/5">
            {t("guarantee.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("guarantee.title")}</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8" dangerouslySetInnerHTML={{ 
            __html: language === "en" ? 
              t("guarantee.description").replace(
                'Measurable results within 30 days or your money back.', 
                '<span class="font-bold text-white ml-1">Measurable results within 30 days or your money back.</span>'
              ) :
              t("guarantee.description").replace(
                'Mätbara resultat inom 30 dagar eller pengarna tillbaka.', 
                '<span class="font-bold text-white ml-1">Mätbara resultat inom 30 dagar eller pengarna tillbaka.</span>'
              )
          }}>
          </p>
          <Button variant="outline" size="lg" className="bg-white text-brand hover:bg-white/90 hover:text-brand shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <a href="#contact" className="flex items-center gap-2">
              {t("guarantee.cta")}
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </a>
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">{t("guarantee.steps.step1.title")}</div>
              <p>{t("guarantee.steps.step1.description")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">{t("guarantee.steps.step2.title")}</div>
              <p>{t("guarantee.steps.step2.description")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">{t("guarantee.steps.step3.title")}</div>
              <p>{t("guarantee.steps.step3.description")}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section id="cases" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="outline" className="px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("cases.badge")}
              </Badge>
              <SectionDialog
                title={language === "en" ? "Our case studies" : "Våra kundcase"}
                description={language === "en" ? 
                  "See how we've helped other businesses achieve their goals through AI automation. Each case study shows concrete results and ROI." : 
                  "Se hur vi har hjälpt andra företag att nå sina mål genom AI-automation. Varje case study visar konkreta resultat och ROI."}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cases.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("cases.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              category={t("cases.case1.category")}
              title={t("cases.case1.title")}
              description={t("cases.case1.description")}
              result={t("cases.case1.result").replace("218%", "78%")}
              imageSrc="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
            
            <CaseStudyCard 
              category={t("cases.case2.category")}
              title={t("cases.case2.title")}
              description={t("cases.case2.description").replace("312%", "112%")}
              result={t("cases.case2.result")}
              imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
            
            <CaseStudyCard 
              category={t("cases.case3.category")}
              title={t("cases.case3.title")}
              description={t("cases.case3.description").replace("189%", "89%")}
              result={t("cases.case3.result").replace("42%", "32%")}
              imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-brand/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="outline" className="px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("testimonials.badge")}
              </Badge>
              <SectionDialog
                title={language === "en" ? "What our customers say" : "Vad våra kunder säger"}
                description={language === "en" ? 
                  "Read what our satisfied customers say about our services and results. We are proud to have helped so many businesses succeed." : 
                  "Läs vad våra nöjda kunder säger om våra tjänster och resultat. Vi är stolta över att ha hjälpt så många företag att lyckas."}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("testimonials.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard 
              quote={t("testimonials.testimonial1.quote").replace("82%", "42%")}
              name={t("testimonials.testimonial1.name")}
              position={t("testimonials.testimonial1.position")}
              initials="MA"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            />
            
            <TestimonialCard 
              quote={t("testimonials.testimonial2.quote")}
              name={t("testimonials.testimonial2.name")}
              position={t("testimonials.testimonial2.position")}
              initials="JE"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            />
            
            <TestimonialCard 
              quote={t("testimonials.testimonial3.quote")}
              name={t("testimonials.testimonial3.name")}
              position={t("testimonials.testimonial3.position")}
              initials="SB"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section id="newsletter" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-xl p-8 shadow-lg border border-border/20 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-2 px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
                {t("newsletter.title")}
              </Badge>
              <h2 className="text-3xl font-bold mb-2">{t("newsletter.subtitle")}</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("newsletter.description")}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.form.placeholder")}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
                  required
                />
              </div>
              <Button type="submit" className="shadow-md hover:shadow-lg transition-all duration-300">
                {t("newsletter.form.button")}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              {t("newsletter.form.terms")}
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-4 py-1.5 text-brand border-brand/20 bg-brand/5">
              {t("contact.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-background rounded-xl p-8 shadow-lg border border-border/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{language === "en" ? "Contact form" : "Kontaktformulär"}</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">{language === "en" ? "Name" : "Namn"}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
                      placeholder={language === "en" ? "Your name" : "Ditt namn"}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">{language === "en" ? "Email" : "E-post"}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
                      placeholder={language === "en" ? "your@email.com" : "din@email.se"}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">{language === "en" ? "Phone" : "Telefon"}</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
                      placeholder={language === "en" ? "07X-XXX XX XX" : "07X-XXX XX XX"}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">{language === "en" ? "Message" : "Meddelande"}</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
                      placeholder={language === "en" ? "How can we help you?" : "Hur kan vi hjälpa dig?"}
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full shadow-md hover:shadow-lg transition-all duration-300">
                    {t("contact.cta")}
                  </Button>
                </form>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">{language === "en" ? "Direct contact" : "Direktkontakt"}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">{language === "en" ? "Email" : "E-post"}</div>
                      <a href="mailto:info@bahkostudio.se" className="text-brand hover:underline">info@bahkostudio.se</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">{language === "en" ? "Phone" : "Telefon"}</div>
                      <a href="tel:+4681234567" className="text-brand hover:underline">08-123 45 67</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">{language === "en" ? "Office" : "Kontor"}</div>
                      <div className="text-muted-foreground">
                        <p>Stockholm {language === "en" ? "(Head Office)" : "(Huvudkontor)"}</p>
                        <p>Malmö</p>
                        <p>{language === "en" ? "Gothenburg" : "Göteborg"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="font-medium mb-2">{language === "en" ? "Follow us" : "Följ oss"}</div>
                    <div className="flex gap-3">
                      <a href="#" className="bg-brand/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand/20 transition-colors">
                        <Facebook className="h-5 w-5 text-brand" />
                      </a>
                      <a href="#" className="bg-brand/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand/20 transition-colors">
                        <Search className="h-5 w-5 text-brand" />
                      </a>
                      <a href="#" className="bg-brand/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand/20 transition-colors">
                        <Instagram className="h-5 w-5 text-brand" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-brand flex items-center gap-2 mb-4">
                <span className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center">B</span>
                bahkostudio
              </div>
              <p className="text-muted-foreground mb-4">
                {t("footer.description")}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.services.title")}</h3>
              <ul className="space-y-2">
                <li><a href="/services/chatbot" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.services.chatbot")}</a></li>
                <li><a href="/services/phone" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.services.phone")}</a></li>
                <li><a href="/services/seo" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.services.seo")}</a></li>
                <li><a href="/services/web" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.services.web")}</a></li>
                <li><a href="/services/social" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.services.social")}</a></li>
                <li><a href="/services/marketing" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.services.marketing")}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.resources.title")}</h3>
              <ul className="space-y-2">
                <li><a href="#cases" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.resources.cases")}</a></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-brand transition-colors">{language === "en" ? "Blog" : "Blogg"}</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.resources.reviews")}</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.resources.webinars")}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.contact.title")}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand" />
                  <a href="mailto:info@bahkostudio.se" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.contact.email")}</a>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-brand" />
                  <a href="tel:+4681234567" className="text-muted-foreground hover:text-brand transition-colors">{t("footer.contact.phone")}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-brand" />
                  <span className="text-muted-foreground">{t("footer.contact.city1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-brand" />
                  <span className="text-muted-foreground">{t("footer.contact.city2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-brand" />
                  <span className="text-muted-foreground">{t("footer.contact.city3")}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {t("footer.legal.copyright")}
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-brand transition-colors">{t("footer.legal.privacy")}</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-brand transition-colors">{t("footer.legal.terms")}</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-brand transition-colors">{t("footer.legal.cookies")}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}