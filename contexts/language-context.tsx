"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "sv" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

const translations = {
  nav: {
    services: {
      sv: "Tjänster",
      en: "Services",
    },
    pricing: {
      sv: "Priser",
      en: "Pricing",
    },
    cases: {
      sv: "Case Studies",
      en: "Case Studies",
    },
    newsletter: {
      sv: "Nyhetsbrev",
      en: "Newsletter",
    },
    consultation: {
      sv: "Boka konsultation",
      en: "Book Consultation",
    },
  },
  hero: {
    badge: {
      sv: "Din partner för tillväxt",
      en: "Your Growth Partner",
    },
    title: {
      sv: "Nå dina mål och drömresultat",
      en: "Achieve your goals and get the results you've always dreamed of",
    },
    description: {
      sv: "Vi hjälper företag växa med beprövade metoder. Fler kunder, mer försäljning, bättre resultat.",
      en: "We help companies grow with proven methods. More customers, more sales, better results.",
    },
    cta1: {
      sv: "Få garanterad tillväxt nu",
      en: "Get guaranteed growth now",
    },
    cta2: {
      sv: "Vår resultatgaranti",
      en: "Our result guarantee",
    },
    stats: {
      roi: {
        sv: "Genomsnittlig ROI för våra kunder",
        en: "Average ROI for our customers",
      },
      days: {
        sv: "Dagar till första resultaten",
        en: "Days to first results",
      },
      satisfied: {
        sv: "Nöjda kunder eller pengarna tillbaka",
        en: "Satisfied customers or money back",
      },
    },
  },
  howItWorks: {
    badge: {
      sv: "Så här fungerar det",
      en: "How it works",
    },
    title: {
      sv: "Hur får du ut maximalt av din marknadsföring?",
      en: "AI that saves time and improves results",
    },
    description: {
      sv: "Vill du ha en marknadsföring som faktiskt fungerar? Vi har lösningen som passar just ditt företag.",
      en: "We use AI to automate time-consuming tasks and optimize your business processes.",
    },
    steps: {
      step1: {
        title: {
          sv: "GÖRA ALLT SJÄLV?",
          en: "Automated customer service",
        },
        description: {
          sv: "Om du har lite att göra är det inget problem. Men om du är upptagen... då är det inte genomförbart.",
          en: "AI chatbot and phone agent handle inquiries and bookings 24/7, so you can focus on more important things.",
        },
      },
      step2: {
        title: {
          sv: "ANSTÄLLA NY PERSONAL?",
          en: "Smart marketing",
        },
        description: {
          sv: "Att hitta bra personal är svårt, att utbilda dem är dyrt. Även om du hittar den perfekta personen... Du förlitar dig fortfarande på en individ.",
          en: "AI analyzes your target audience and optimizes your campaigns for the best possible results and returns.",
        },
      },
      step3: {
        title: {
          sv: "ANLITA EN BYRÅ?",
          en: "Data-driven growth",
        },
        description: {
          sv: "Har du inte en marknadsföringsbudget på tiotusentals kronor per månad? Då hamnar ditt konto ofta hos praktikanten till assistentens assistent. Inte optimalt.",
          en: "AI finds patterns in your data and provides concrete recommendations for increased sales and efficiency.",
        },
      },
    },
  },
  services: {
    badge: {
      sv: "Våra lösningar",
      en: "Our Solutions",
    },
    title: {
      sv: "OK... Men vad gör oss annorlunda?",
      en: "AI automations that give you an edge",
    },
    description: {
      sv: "Våra lösningar är byggda för en sak: att ge ditt företag mätbara resultat inom den första månaden.",
      en: "Our solutions are built for one thing: to give your business measurable results within the first month.",
    },
    chatbot: {
      title: {
        sv: "Intelligent Chatbot",
        en: "Intelligent Chatbot",
      },
      description: {
        sv: "Omvandla besökare till kunder 24/7. Vår AI-drivna chatbot svarar på frågor, kvalificerar leads och bokar möten medan du sover.",
        en: "Convert visitors to customers 24/7. Our AI-driven chatbot answers questions, qualifies leads, and books meetings while you sleep.",
      },
    },
    phone: {
      title: {
        sv: "AI Phone Agent",
        en: "AI Phone Agent",
      },
      description: {
        sv: "Missa aldrig ett viktigt samtal igen. Vår AI telefonagent hanterar inkommande samtal, kvalificerar potentiella kunder och frigör din tid.",
        en: "Never miss an important call again. Our AI phone agent handles incoming calls, qualifies potential customers, and frees up your time.",
      },
    },
    seo: {
      title: {
        sv: "AI-driven SEO",
        en: "AI-driven SEO",
      },
      description: {
        sv: "Slå konkurrenterna i sökresultaten. Vår AI analyserar exakt vad som krävs för att toppa Google för dina viktigaste sökord.",
        en: "Beat competitors in search results. Our AI analyzes exactly what's needed to top Google for your most important keywords.",
      },
    },
    web: {
      title: {
        sv: "Konverterande Webbplats",
        en: "Converting Website",
      },
      description: {
        sv: "En webbplats som inte bara ser bra ut – den säljer. Vi bygger hemsidor optimerade för att omvandla besökare till betalande kunder.",
        en: "A website that doesn't just look good – it sells. We build websites optimized to convert visitors into paying customers.",
      },
    },
    social: {
      title: {
        sv: "Content för Sociala Medier",
        en: "Social Media Content",
      },
      description: {
        sv: "Innehåll som engagerar och konverterar. Vår AI skapar relevant innehåll som får din målgrupp att agera.",
        en: "Content that engages and converts. Our AI creates relevant content that gets your target audience to take action.",
      },
    },
    marketing: {
      title: {
        sv: "Resultatstyrd Marknadsföring",
        en: "Results-Driven Marketing",
      },
      description: {
        sv: "Annonsering som faktiskt lönar sig. Vi optimerar dina kampanjer för att maximera avkastningen på varje investerad krona.",
        en: "Advertising that actually pays off. We optimize your campaigns to maximize the return on every dollar invested.",
      },
    },
  },
  pricing: {
    badge: {
      sv: "Priser",
      en: "Pricing",
    },
    title: {
      sv: "Välj det paket som passar ditt företag",
      en: "Choose the package that suits your business",
    },
    description: {
      sv: "Oavsett storlek på ditt företag har vi ett paket som passar dina behov och mål. Alla paket inkluderar vår resultatgaranti.",
      en: "Regardless of the size of your business, we have a package that suits your needs and goals. All packages include our result guarantee.",
    },
    standard: {
      title: {
        sv: "Standard",
        en: "Standard",
      },
      description: {
        sv: "Perfekt för mindre företag som vill börja med AI-automation",
        en: "Perfect for smaller businesses looking to start with AI automation",
      },
      features: {
        f1: {
          sv: "1 AI-automation efter val",
          en: "1 AI automation of choice",
        },
        f2: {
          sv: "Månatlig optimering",
          en: "Monthly optimization",
        },
        f3: {
          sv: "E-postrapport varje vecka",
          en: "Weekly email report",
        },
        f4: {
          sv: "Grundläggande kundtjänst",
          en: "Basic customer service",
        },
        f5: {
          sv: "30-dagars resultatgaranti",
          en: "30-day result guarantee",
        },
      },
      cta: {
        sv: "Kom igång",
        en: "Get started",
      },
    },
    professional: {
      title: {
        sv: "Professional",
        en: "Professional",
      },
      description: {
        sv: "För växande företag som vill accelerera sin digitala närvaro",
        en: "For growing companies looking to accelerate their digital presence",
      },
      features: {
        f1: {
          sv: "3 AI-automationer efter val",
          en: "3 AI automations of choice",
        },
        f2: {
          sv: "Veckovis optimering",
          en: "Weekly optimization",
        },
        f3: {
          sv: "Dedikerad projektledare",
          en: "Dedicated project manager",
        },
        f4: {
          sv: "Premium kundtjänst",
          en: "Premium customer service",
        },
        f5: {
          sv: "Månatliga strategi-möten",
          en: "Monthly strategy meetings",
        },
        f6: {
          sv: "30-dagars resultatgaranti",
          en: "30-day result guarantee",
        },
      },
      cta: {
        sv: "Populäraste valet",
        en: "Most popular choice",
      },
    },
    enterprise: {
      title: {
        sv: "Enterprise",
        en: "Enterprise",
      },
      description: {
        sv: "Komplett AI-drivna lösningar för företag med höga ambitioner",
        en: "Complete AI-driven solutions for companies with high ambitions",
      },
      features: {
        f1: {
          sv: "Alla AI-automationer",
          en: "All AI automations",
        },
        f2: {
          sv: "Kontinuerlig optimering",
          en: "Continuous optimization",
        },
        f3: {
          sv: "Dedikerad strateg & utvecklare",
          en: "Dedicated strategist & developer",
        },
        f4: {
          sv: "24/7 prioriterad support",
          en: "24/7 prioritized support",
        },
        f5: {
          sv: "Veckovisa strategi-möten",
          en: "Weekly strategy meetings",
        },
        f6: {
          sv: "Skräddarsydda rapporter",
          en: "Customized reports",
        },
        f7: {
          sv: "30-dagars resultatgaranti",
          en: "30-day result guarantee",
        },
      },
      cta: {
        sv: "Kontakta oss",
        en: "Contact us",
      },
    },
  },
  guarantee: {
    badge: {
      sv: "Vår garanti",
      en: "Our Guarantee",
    },
    title: {
      sv: "Resultatgaranti utan krångel",
      en: "Result guarantee without hassle",
    },
    description: {
      sv: "Vi är så säkra på att våra metoder fungerar att vi erbjuder en enkel garanti: Mätbara resultat inom 30 dagar eller pengarna tillbaka. Inga ursäkter. Inga kryphål. Bara garanterade resultat.",
      en: "We are so confident that our methods work that we offer a simple guarantee: Measurable results within 30 days or your money back. No excuses. No loopholes. Just guaranteed results.",
    },
    cta: {
      sv: "Ta del av garantin",
      en: "Get the guarantee",
    },
    steps: {
      step1: {
        title: {
          sv: "Steg 1",
          en: "Step 1",
        },
        description: {
          sv: "Vi analyserar ditt företag och sätter upp tydliga, mätbara mål.",
          en: "We analyze your business and set up clear, measurable goals.",
        },
      },
      step2: {
        title: {
          sv: "Steg 2",
          en: "Step 2",
        },
        description: {
          sv: "Vi implementerar våra beprövade AI-automationer för att nå målen.",
          en: "We implement our proven AI automations to reach the goals.",
        },
      },
      step3: {
        title: {
          sv: "Steg 3",
          en: "Step 3",
        },
        description: {
          sv: "Du ser mätbara resultat inom 30 dagar eller får pengarna tillbaka.",
          en: "You see measurable results within 30 days or get your money back.",
        },
      },
    },
  },
  cases: {
    badge: {
      sv: "Case Studies",
      en: "Case Studies",
    },
    title: {
      sv: "Verkliga resultat för riktiga företag",
      en: "Real results for real companies",
    },
    description: {
      sv: "Här är exempel på vad vi åstadkommit för företag som ditt.",
      en: "Here are examples of what we've accomplished for companies like yours.",
    },
    case1: {
      category: {
        sv: "E-handel",
        en: "E-commerce",
      },
      title: {
        sv: "Svensk klädbutik dubblar online-försäljningen",
        en: "Swedish clothing store doubles online sales",
      },
      description: {
        sv: "Med vår AI-chatbot och optimerad marknadsföring ökade konverteringsgraden med 156%.",
        en: "With our AI chatbot and optimized marketing, the conversion rate increased by 156%.",
      },
      result: {
        sv: "Resultat: 218% ROI inom 24 dagar",
        en: "Result: 218% ROI within 24 days",
      },
    },
    case2: {
      category: {
        sv: "B2B-tjänster",
        en: "B2B services",
      },
      title: {
        sv: "Konsultbolag tripplar kvalificerade leads",
        en: "Consulting company triples qualified leads",
      },
      description: {
        sv: "Genom AI Phone Agent och SEO-optimering ökade antalet bokade möten med 312%.",
        en: "Through AI Phone Agent and SEO optimization, the number of booked meetings increased by 312%.",
      },
      result: {
        sv: "Resultat: 5 nya storkundavtal inom första månaden",
        en: "Result: 5 new major customer agreements within the first month",
      },
    },
    case3: {
      category: {
        sv: "Restaurangbranschen",
        en: "Restaurant industry",
      },
      title: {
        sv: "Lokal restaurangkedja ökar online-bokningar",
        en: "Local restaurant chain increases online bookings",
      },
      description: {
        sv: "Med ny webbplats och sociala medier-strategi ökade bokningar online med 189%.",
        en: "With a new website and social media strategy, online bookings increased by 189%.",
      },
      result: {
        sv: "Resultat: Fullbokade kvällar och 42% ökad omsättning",
        en: "Result: Fully booked evenings and 42% increased turnover",
      },
    },
  },
  testimonials: {
    badge: {
      sv: "Testimonials",
      en: "Testimonials",
    },
    title: {
      sv: "Vad våra kunder säger",
      en: "What our customers say",
    },
    description: {
      sv: "Företag som litat på vår resultatgaranti och fått mer än vad de hoppats på.",
      en: "Companies that trusted our result guarantee and got more than they hoped for.",
    },
    testimonial1: {
      quote: {
        sv: "Jag var skeptisk till AI-lösningar, men bahkostudio levererade exakt vad de lovade. Vår konverteringsgrad ökade med 82% redan under första månaden.",
        en: "I was skeptical about AI solutions, but bahkostudio delivered exactly what they promised. Our conversion rate increased by 82% already during the first month.",
      },
      name: {
        sv: "Maria Andersson",
        en: "Maria Andersson",
      },
      position: {
        sv: "VD, Svea Design",
        en: "CEO, Svea Design",
      },
    },
    testimonial2: {
      quote: {
        sv: "Deras AI Phone Agent frigjorde 20 timmar i veckan för vårt team, samtidigt som vi kvalificerade fler leads än någonsin. Bästa investeringen vi gjort.",
        en: "Their AI Phone Agent freed up 20 hours a week for our team, while we qualified more leads than ever. The best investment we've made.",
      },
      name: {
        sv: "Johan Eriksson",
        en: "Johan Eriksson",
      },
      position: {
        sv: "Försäljningschef, Teknik AB",
        en: "Sales Manager, Teknik AB",
      },
    },
    testimonial3: {
      quote: {
        sv: "Vår webbplats var en katastrof. bahkostudio byggde om den från grunden med fokus på konvertering, och nu bokar vi 3 gånger fler kundmöten än tidigare.",
        en: "Our website was a disaster. bahkostudio rebuilt it from the ground up with a focus on conversion, and now we book 3 times more customer meetings than before.",
      },
      name: {
        sv: "Sara Björk",
        en: "Sara Björk",
      },
      position: {
        sv: "Grundare, Ekonomikonsulterna",
        en: "Founder, Ekonomikonsulterna",
      },
    },
  },
  newsletter: {
    title: {
      sv: "Prenumerera på vårt nyhetsbrev",
      en: "Subscribe to our newsletter",
    },
    subtitle: {
      sv: "Expertinsikter direkt i din inkorg",
      en: "Expert insights directly to your inbox",
    },
    description: {
      sv: "Få de senaste AI-trenderna och strategierna varje vecka.",
      en: "Get the latest AI trends and strategies every week.",
    },
    form: {
      description: {
        sv: "Anmäl dig till vårt nyhetsbrev och få exklusiva tips, case studies och erbjudanden varje månad.",
        en: "Sign up for our newsletter and get exclusive tips, case studies, and offers every month.",
      },
      email: {
        sv: "E-post",
        en: "Email",
      },
      placeholder: {
        sv: "din@email.se",
        en: "your@email.com",
      },
      button: {
        sv: "Prenumerera nu",
        en: "Subscribe now",
      },
      terms: {
        sv: "Genom att prenumerera godkänner du våra villkor och integritetspolicy.",
        en: "By subscribing, you agree to our terms and privacy policy.",
      },
    },
    success: {
      sv: "Tack för din anmälan! Vi har skickat ett bekräftelsemail till",
      en: "Thank you for your subscription! We have sent a confirmation email to",
    },
  },
  contact: {
    badge: {
      sv: "Kontakta oss",
      en: "Contact us",
    },
    title: {
      sv: "Dags att accelerera ditt företag?",
      en: "Time to accelerate your business?",
    },
    description: {
      sv: "Boka en kostnadsfri konsultation idag. Vi analyserar ditt företag och visar exakt hur vi kan leverera mätbara resultat inom 30 dagar.",
      en: "Book a free consultation today. We analyze your business and show exactly how we can deliver measurable results within 30 days.",
    },
    cta: {
      sv: "Boka din kostnadsfria konsultation",
      en: "Book your free consultation",
    },
  },
  footer: {
    description: {
      sv: "Vi hjälper företag växa med AI-automationer som ger garanterade resultat.",
      en: "We help companies grow with AI automations that deliver guaranteed results.",
    },
    services: {
      title: {
        sv: "Tjänster",
        en: "Services",
      },
      chatbot: {
        sv: "AI Chatbot",
        en: "AI Chatbot",
      },
      phone: {
        sv: "AI Phone Agent",
        en: "AI Phone Agent",
      },
      seo: {
        sv: "AI-driven SEO",
        en: "AI-driven SEO",
      },
      web: {
        sv: "Webbplatser",
        en: "Websites",
      },
      social: {
        sv: "Social Media",
        en: "Social Media",
      },
      marketing: {
        sv: "Marknadsföring",
        en: "Marketing",
      },
    },
    resources: {
      title: {
        sv: "Resurser",
        en: "Resources",
      },
      cases: {
        sv: "Case Studies",
        en: "Case Studies",
      },
      blog: {
        sv: "Blogg",
        en: "Blog",
      },
      reviews: {
        sv: "Kundrecensioner",
        en: "Customer Reviews",
      },
      webinars: {
        sv: "Webinars",
        en: "Webinars",
      },
    },
    contact: {
      title: {
        sv: "Kontakt",
        en: "Contact",
      },
      email: {
        sv: "info@bahkostudio.se",
        en: "info@bahkostudio.com",
      },
      phone: {
        sv: "08-123 45 67",
        en: "+46 8 123 45 67",
      },
      city1: {
        sv: "Stockholm",
        en: "Stockholm",
      },
      city2: {
        sv: "Malmö",
        en: "Malmö",
      },
      city3: {
        sv: "Göteborg",
        en: "Gothenburg",
      },
    },
    legal: {
      copyright: {
        sv: "© 2025 bahkostudio. Alla rättigheter förbehållna.",
        en: "© 2025 bahkostudio. All rights reserved.",
      },
      privacy: {
        sv: "Integritetspolicy",
        en: "Privacy Policy",
      },
      terms: {
        sv: "Användarvillkor",
        en: "Terms of Use",
      },
      cookies: {
        sv: "Cookies",
        en: "Cookies",
      },
    },
  },
  language: {
    sv: {
      sv: "Svenska",
      en: "Swedish",
    },
    en: {
      sv: "Engelska",
      en: "English",
    },
  },
  blog: {
    backToHome: {
      sv: "Tillbaka till startsidan",
      en: "Back to home",
    },
    knowledgeBase: {
      sv: "Kunskapsbank",
      en: "Knowledge Base",
    },
    exploreBlog: {
      sv: "Utforska vår blogg",
      en: "Explore our blog",
    },
    description: {
      sv: "Djupdykningar i hur AI-drivna automationer kan transformera din verksamhet och öka dina resultat.",
      en: "Deep dives into how AI-driven automations can transform your business and increase your results.",
    },
    readMore: {
      sv: "Läs mer",
      en: "Read more",
    },
    readyToImplement: {
      sv: "Redo att implementera dessa strategier?",
      en: "Ready to implement these strategies?",
    },
    consultationText: {
      sv: "Boka en kostnadsfri konsultation idag för att diskutera hur vi kan hjälpa ditt företag växa med beprövade AI-automationer.",
      en: "Book a free consultation today to discuss how we can help your business grow with proven AI automations.",
    },
    bookConsultation: {
      sv: "Boka konsultation",
      en: "Book consultation",
    },
    newsletter: {
      title: {
        sv: "Nyhetsbrev",
        en: "Newsletter",
      },
      heading: {
        sv: "Håll dig uppdaterad",
        en: "Stay updated",
      },
      description: {
        sv: "Prenumerera på vårt nyhetsbrev för att få de senaste artiklarna och insikterna direkt till din inkorg.",
        en: "Subscribe to our newsletter to get the latest articles and insights straight to your inbox.",
      },
      emailPlaceholder: {
        sv: "Din e-postadress",
        en: "Your email address",
      },
      subscribe: {
        sv: "Prenumerera",
        en: "Subscribe",
      },
      terms: {
        sv: "Genom att prenumerera godkänner du våra villkor och integritetspolicy.",
        en: "By subscribing, you agree to our terms and privacy policy.",
      },
    },
    post: {
      home: {
        sv: "Hem",
        en: "Home",
      },
      blog: {
        sv: "Blogg",
        en: "Blog",
      },
      aiStrategist: {
        sv: "AI Strateg",
        en: "AI Strategist",
      },
      published: {
        sv: "Publicerad",
        en: "Published",
      },
      learnMore: {
        sv: "Vill du lära dig mer om",
        en: "Want to learn more about",
      },
      expertHelp: {
        sv: "Låt våra experter visa hur denna teknik kan implementeras specifikt för din verksamhet.",
        en: "Let our experts show you how this technology can be implemented specifically for your business.",
      },
      bookFree: {
        sv: "Boka kostnadsfri konsultation",
        en: "Book a free consultation",
      },
      ready: {
        sv: "Är du redo att implementera",
        en: "Are you ready to implement",
      },
      inYourCompany: {
        sv: "i ditt företag?",
        en: "in your company?",
      },
      guaranteeText: {
        sv: "Vi erbjuder en 30-dagars resultatgaranti på alla våra tjänster. Om du inte ser mätbara resultat inom 30 dagar får du pengarna tillbaka.",
        en: "We offer a 30-day result guarantee on all our services. If you don't see measurable results within 30 days, you get your money back.",
      },
      relatedArticles: {
        sv: "Relaterade artiklar",
        en: "Related articles",
      },
      howItImproves: {
        sv: "Hur",
        en: "How",
      },
      businessResults: {
        sv: "förbättrar dina affärsresultat",
        en: "improves your business results",
      },
      readArticle: {
        sv: "Läs artikel",
        en: "Read article",
      },
      howToTransform: {
        sv: "Hur",
        en: "How",
      },
      yourBusiness: {
        sv: "kan transformera din verksamhet",
        en: "can transform your business",
      }
    },
  },
  service: {
    notFound: {
      title: {
        sv: "Tjänsten kunde inte hittas",
        en: "Service not found"
      },
      description: {
        sv: "Vi kunde inte hitta den tjänst du letade efter.",
        en: "We couldn't find the service you were looking for."
      },
      backToServices: {
        sv: "Tillbaka till tjänster",
        en: "Back to services"
      }
    },
    allServices: {
      sv: "Alla tjänster",
      en: "All services"
    },
    seePricing: {
      sv: "Se våra priser",
      en: "See our pricing"
    },
    contactUs: {
      sv: "Kontakta oss",
      en: "Contact us"
    },
    features: {
      title: {
        sv: "Vad ingår i vår {service} tjänst?",
        en: "What's included in our {service} service?"
      },
      description: {
        sv: "Vi erbjuder en komplett lösning som säkerställer att du får maximal avkastning på din investering.",
        en: "We offer a complete solution that ensures you get maximum return on your investment."
      }
    },
    integration: {
      title: {
        sv: "Hur integreras lösningen?",
        en: "How is the solution integrated?"
      },
      description: {
        sv: "Vår {service} tjänst integreras sömlöst med dina befintliga plattformar och verktyg.",
        en: "Our {service} service integrates seamlessly with your existing platforms and tools."
      },
      platforms: {
        sv: "Integrerade plattformar",
        en: "Integrated platforms"
      },
      process: {
        sv: "Implementeringsprocess",
        en: "Implementation process"
      }
    },
    guarantee: {
      cta: {
        sv: "Ta del av garantin",
        en: "Get the guarantee"
      }
    },
    cta: {
      title: {
        sv: "Redo att börja med {service}?",
        en: "Ready to start with {service}?"
      },
      description: {
        sv: "Kontakta oss idag för att diskutera hur vi kan hjälpa ditt företag att växa med vår {service} tjänst.",
        en: "Contact us today to discuss how we can help your business grow with our {service} service."
      },
      button: {
        sv: "Boka din kostnadsfria konsultation",
        en: "Book your free consultation"
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("sv");

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Try to get the stored language preference
      const storedLang = localStorage.getItem("language") as Language;
      if (storedLang && (storedLang === "sv" || storedLang === "en")) {
        setLanguageState(storedLang);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string) => {
    const keyParts = key.split(".");
    let result = translations;
    
    for (const part of keyParts) {
      if (result && result[part]) {
        result = result[part] as any;
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    if (result && result[language]) {
      return result[language];
    }
    
    return key; // Return the key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider };