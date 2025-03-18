import { serviceData } from "@/lib/service-data";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog-post-client";

type ServiceSlug = keyof typeof serviceData;

// Define the blog content structure
type BlogContent = {
  [key in ServiceSlug]: {
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
  }
};

const blogContent: BlogContent = {
  chatbot: {
    intro: "AI Chatbotar har revolutionerat kundtjänst och försäljning för företag i alla storlekar. Med avancerad naturlig språkförståelse kan moderna chatbotar hantera komplexa konversationer och lösa kundärenden utan mänsklig inblandning.",
    sections: [
      {
        title: "Fördelar med AI Chatbotar för företag",
        content: "Den främsta fördelen med en AI-driven chatbot är tillgänglighet dygnet runt. Din verksamhet kan svara på frågor, kvalificera leads och till och med genomföra försäljningar när du sover. Detta ger en dramatisk förbättring av kundupplevelsen samtidigt som det minskar belastningen på din personal.\n\nEn annan avgörande fördel är skalbarhet. En chatbot kan hantera hundratals eller till och med tusentals konversationer samtidigt utan att kvaliteten försämras, något som är omöjligt för ett mänskligt team utan enorma resurser."
      },
      {
        title: "Hur vår chatbot skiljer sig från konkurrenterna",
        content: "Till skillnad från många generiska lösningar är vår chatbot skräddarsydd för ditt företags specifika behov och varumärkesröst. Vi tränar AI:n på ditt existerande material och kunskap, vilket gör att den kan svara på specifika frågor om dina produkter och tjänster.\n\nVi implementerar också avancerad lead-kvalificering, vilket innebär att chatboten inte bara samlar kontaktuppgifter utan även utvärderar kundens behov, budget och beslutsprocess för att prioritera de mest lovande kunderna."
      },
      {
        title: "Implementeringsprocess och tidslinje",
        content: "Implementeringen av vår chatbot är enkel och tar vanligtvis mindre än en vecka från start till lansering. Vi börjar med en djupgående analys av ditt företags behov, målgrupp och vanliga kundförfrågningar.\n\nNästa steg är att utbilda AI:n på ditt företags information, produkter, tjänster och vanliga frågor. Vi anpassar också chatbotens personlighet för att matcha ditt varumärkes ton och röst.\n\nEfter grundlig testning och finjustering lanserar vi chatboten på din webbplats och andra plattformar, och fortsätter sedan att optimera baserat på verkliga konversationer."
      }
    ]
  },
  phone: {
    intro: "AI Phone Agent är nästa generations telefonlösning som använder avancerad AI för att hantera inkommande samtal, kvalificera leads och frigöra din tid för mer värdefulla aktiviteter.",
    sections: [
      {
        title: "Hur AI Phone Agent transformerar kundservice",
        content: "Traditionell telefonservice innebär ofta långa väntetider, kundfrustration och missade affärsmöjligheter. Vår AI Phone Agent eliminerar dessa problem genom att svara direkt på varje samtal med en naturlig, mänsklig röst som kan förstå kundens intentioner och hantera deras ärenden effektivt.\n\nAI-agenten kan filtrera och prioritera samtal, vidarebefordra viktiga ärenden till rätt person, och samtidigt hantera rutinfrågor och bokningar helt automatiskt."
      },
      {
        title: "Affärsfördelar med AI Phone Agent",
        content: "Den omedelbara affärsfördelen är tidsbesparingen - företagsledare och nyckelpersonal frigör i genomsnitt 20 timmar per vecka som tidigare ägnades åt telefonsamtal. Denna tid kan istället användas för strategiskt arbete och intäktsskapande aktiviteter.\n\nEn annan kritisk fördel är att du aldrig missar ett viktigt samtal eller en potentiell försäljningsmöjlighet. AI-agenten är alltid tillgänglig, oavsett tid på dygnet eller veckodagar, vilket maximerar dina möjligheter att fånga varje affärstillfälle."
      },
      {
        title: "Verkliga resultat från våra kunder",
        content: "Ett medelstort konsultföretag som implementerade vår AI Phone Agent rapporterade en 45% ökning i konverteringsgrad från telefonleads till bokade möten under de första 30 dagarna. Ett annat företag inom detaljhandeln minskade sin administrativa personalkostnad med 38% samtidigt som kundnöjdheten förbättrades.\n\nEn gemensam nämnare för alla våra kunder är den dramatiska minskningen av missade samtal - från typiskt 20-30% till praktiskt taget noll, vilket direkt påverkar intäkterna positivt."
      }
    ]
  },
  seo: {
    intro: "AI-driven SEO är den mest effektiva metoden för att systematiskt förbättra din webbplats synlighet i sökmotorer som Google. Genom att analysera konkurrenter, identifiera nyckelord och optimera innehåll kan vi hjälpa ditt företag att dominera sökresultaten.",
    sections: [
      {
        title: "Varför traditionell SEO inte längre räcker",
        content: "I dagens konkurrensutsatta digitala landskap räcker det inte längre med grundläggande SEO-teknik. Sökmotorernas algoritmer har blivit extremt sofistikerade och värderar nu innehållskvalitet, användarupplevelse och teknisk prestanda långt högre än enkla nyckelord.\n\nDessutom uppdateras Googles algoritmer hundratals gånger per år, vilket gör det nästan omöjligt för interna team att hålla sig uppdaterade med bästa praxis utan dedikerade SEO-specialister och avancerade verktyg."
      },
      {
        title: "Hur AI-driven SEO fungerar",
        content: "Vår AI-drivna SEO-metod börjar med en djupgående analys av dina konkurrenters strategier, innehåll och nyckelord. Detta ger oss en strategisk karta över exakt vad som krävs för att överträffa dem i sökresultaten.\n\nSedån använder vi avancerade AI-algoritmer för att identifiera de mest lönsamma nyckelorden med hög sökvolym och låg konkurrens, samt analyserar användarnas sökintentioner för att skapa innehåll som perfekt matchar vad de letar efter.\n\nSlutligen optimerar vi alla tekniska aspekter av din webbplats, från sidstruktur och schema-markup till mobilvänlighet och sidladdningstider, för att ge dig maximal fördel i Googles ögon."
      },
      {
        title: "Mätbara resultat inom 60 dagar",
        content: "Till skillnad från traditionell SEO som ofta tar 6-12 månader att visa resultat, kan vår AI-drivna approach leverera mätbara förbättringar inom 60 dagar. Detta inkluderar första-sidans rankningar för dina prioriterade nyckelord och en betydande ökning av organisk trafik.\n\nVi ger dig också detaljerade månatliga rapporter som visar exakt vilka framsteg som gjorts, vilka nyckelord som förbättrats, och hur detta har påverkat din trafik, leads och försäljning."
      }
    ]
  },
  web: {
    intro: "En konverterande webbplats är mer än bara ett skyltfönster online - det är en försäljningsmaskin som systematiskt omvandlar besökare till kunder. Vårt team skapar webbplatser specifikt designade för att maximera din konverteringsgrad.",
    sections: [
      {
        title: "Varför de flesta webbplatser misslyckas med att konvertera",
        content: "De flesta företags webbplatser är byggda med fokus på utseende snarare än resultat. De saknar en strategisk approach till användarresan, har otydliga uppmaningar till handling (CTA), och ignorerar ofta grundläggande principer för konverteringsoptimering.\n\nDetta resulterar i att även vackert designade webbplatser ofta har konverteringsgrader under 1%, vilket betyder att 99% av all trafik du betalar för att få till webbplatsen lämnar utan att ta önskad åtgärd."
      },
      {
        title: "Nyckelelement i en konverterande webbplats",
        content: "En webbplats optimerad för konvertering börjar med en tydlig förståelse av användarens avsikt och en strategisk struktur som guidar dem genom köpresan. Detta inkluderar övertygande värdeerbjudanden, strategiskt placerade CTA:er, och innehåll som adresserar kundens smärtpunkter och objektioner.\n\nTekniska faktorer är också avgörande: snabb laddningstid (under 3 sekunder), full mobilanpassning, och en sömlös användarupplevelse över alla enheter. Vår data visar att förbättringar i dessa områden ensamma kan öka konverteringsgraden med 25-35%."
      },
      {
        title: "Vår 2-dagars snabbleverans process",
        content: "Vi har revolutionerat webbplatsutveckling genom vår 2-dagars leveransprocess, vilket är möjligt tack vare vår AI-drivna designmetodik och ett bibliotek av föroptimerade konverteringselement.\n\nVårt team börjar med att analysera ditt företag, målgrupp och försäljningsmål. Sedan använder vi våra beprövade konverteringsmallar för att skapa en skräddarsydd webbplats som inte bara ser professionell ut utan också är strategiskt utformad för att omvandla besökare till kunder."
      }
    ]
  },
  social: {
    intro: "Social media content är nyckeln till att bygga en engagerad publik och driva trafik till din webbplats. Vår AI-drivna content creation process producerar engagerande, delbart innehåll som resonerar med din målgrupp och stärker ditt varumärke.",
    sections: [
      {
        title: "Utmaningarna med att skapa effektivt socialt innehåll",
        content: "Att konsekvent producera högkvalitativt innehåll för sociala medier är en av de största utmaningarna för de flesta företag. Det kräver kreativitet, förståelse för varje plattforms unika dynamik, och förmågan att hålla jämna steg med trender och algoritmförändringar.\n\nDessutom måste innehållet inte bara vara engagerande utan också strategiskt utformat för att stödja dina affärsmål och leda följare genom försäljningstratten - något som kräver både analytisk och kreativ expertis."
      },
      {
        title: "Vår AI-drivna innehållsstrategi",
        content: "Vi har utvecklat en unik AI-driven process för att skapa innehåll som konsekvent genererar högre engagemang än manuellt skapat innehåll. Vår AI analyserar tusentals högpresterande inlägg inom din bransch för att identifiera exakt vilken typ av innehåll, format, och budskap som resonerar bäst med din målgrupp.\n\nSedan kombinerar vi denna data med vår kreativa expertis för att producera innehåll som är både dataoptimerat och autentiskt för ditt varumärke. Detta inkluderar textinlägg, bilder, grafik och korta videor anpassade för varje specifik plattform."
      },
      {
        title: "Mätbara resultat inom 30 dagar",
        content: "Till skillnad från traditionella sociala mediebyråer som ber om 3-6 månader för att visa resultat, garanterar vi mätbara förbättringar inom 30 dagar. Våra kunder ser i genomsnitt en 50% ökning i engagemang och en 30% tillväxt i följare under den första månaden.\n\nVi levererar också detaljerade veckovisa rapporter som visar exakta resultat från varje inlägg och strategiska rekommendationer baserade på data, så att du kan se det direkta affärsvärdet av dina sociala mediesatsningar."
      }
    ]
  },
  marketing: {
    intro: "Resultatstyrd marknadsföring handlar om att maximera avkastningen på varje investerad krona. Vårt team av AI-experter och marknadsföringsspecialister använder datadriven strategi för att skapa kampanjer som konsekvent levererar mätbara resultat.",
    sections: [
      {
        title: "Problemen med traditionell marknadsföring",
        content: "Traditionell marknadsföring lider av flera inneboende problem: svårigheter att mäta ROI, långa feedback-loopar, och ofta ett överdrivet fokus på kreativitet över resultat. Många företag slösar stora delar av sina marknadsföringsbudgetar på kanaler och budskap som helt enkelt inte genererar avkastning.\n\nDessutom misslyckas traditionella byråer ofta med att optimera kampanjer i realtid baserat på data, vilket leder till månader av underpresterande marknadsföring innan justeringar görs."
      },
      {
        title: "Vår AI-drivna approach till marknadsföring",
        content: "Vår metod börjar med en djupgående analys av din målmarknad, konkurrenter och tidigare marknadsföringsdata. AI-algoritmer identifierar exakt vilka målgrupper, budskap och kanaler som har högst sannolikhet att konvertera för ditt specifika erbjudande.\n\nSedan skapar vi multikanal-kampanjer med kontinuerlig A/B-testning av alla variabler (från annonstext och bilder till målgrupper och budgivningsstrategier). Våra AI-system analyserar resultaten i realtid och omfördelar automatiskt budgeten till de högst presterande kombinationerna."
      },
      {
        title: "2X ROI-garanti inom 30 dagar",
        content: "Vår resultatstyrda approach är så effektiv att vi kan erbjuda en 2X ROI-garanti inom 30 dagar - vilket betyder att vi garanterar att du får tillbaka minst dubbelt så mycket som du investerar i vår marknadsföring.\n\nDetta är möjligt eftersom vår AI-drivna optimering typiskt förbättrar resultat med 40-60% jämfört med traditionella metoder, och vårt fokus på konvertering snarare än vanfärd (som klick eller visningar) säkerställer att varje aspekt av kampanjen är utformad för att driva faktiska affärsresultat."
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Type guard to ensure slug is a valid key
  if (!(slug in serviceData) || !(slug in blogContent)) {
    return notFound();
  }
  
  // Now TypeScript knows slug is a valid key
  const service = serviceData[slug as ServiceSlug];
  const content = blogContent[slug as ServiceSlug];

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
              Hur {service.title} kan transformera din verksamhet
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
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose max-w-none mb-8">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
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
                  {service.guarantee.points.slice(0, 3).map((point, index) => (
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
                  .filter(([key]) => key !== slug)
                  .slice(0, 3)
                  .map(([otherSlug, otherService]) => (
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
  return <BlogPostClient service={service} content={content} />;
}