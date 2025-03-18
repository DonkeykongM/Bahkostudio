import { MessageSquare, PhoneCall, Search, Globe, Share2, TrendingUp, Bot, Headphones, AlertCircle, CheckCircle, Clock, BarChart, Users, MousePointer, FileText, Settings, Code, PenTool, Smartphone, Instagram, Facebook, Twitter, Youtube, Mail, MessageCircle, Video, Link, Lock, Server, PieChart, Zap, CloudLightning as Lightning } from "lucide-react";
import React from "react";

// Fix missing imports
import { 
  Calendar, 
  Heart,
  ShoppingCart, 
  Target, 
  CreditCard,
  Linkedin,
  Image as ImageIcon
} from "lucide-react";

export const serviceData = {
  chatbot: {
    id: "chatbot",
    title: "Intelligent Chatbot",
    badge: "AI-driven kundtjänst",
    description: "Omvandla besökare till kunder 24/7. Vår AI-drivna chatbot svarar på frågor, kvalificerar leads och bokar möten medan du sover.",
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Kundanpassad AI",
        description: "Skräddarsydd för ditt företag med din röst, varumärke och expertis.",
        icon: <Bot className="h-10 w-10 text-brand" />,
      },
      {
        title: "24/7 Tillgänglighet",
        description: "Svara på kundfrågor när som helst, dygnet runt, året om.",
        icon: <Clock className="h-10 w-10 text-brand" />,
      },
      {
        title: "Lead Kvalificering",
        description: "Identifiera och kvalificera potentiella kunder automatiskt.",
        icon: <CheckCircle className="h-10 w-10 text-brand" />,
      },
      {
        title: "Bokningssystem",
        description: "Låt kunder boka möten eller tjänster direkt i chatten.",
        icon: <Calendar className="h-10 w-10 text-brand" />,
      },
      {
        title: "Realtidsanalyser",
        description: "Få insikter om konversationer och kundinteraktioner.",
        icon: <BarChart className="h-10 w-10 text-brand" />,
      },
      {
        title: "Mänsklig Överlämning",
        description: "Sömlös övergång till mänsklig support när det behövs.",
        icon: <Users className="h-10 w-10 text-brand" />,
      },
    ],
    integrations: [
      { name: "Webbplats", icon: <Globe className="h-5 w-5 text-brand" /> },
      { name: "Facebook", icon: <Facebook className="h-5 w-5 text-brand" /> },
      { name: "Instagram", icon: <Instagram className="h-5 w-5 text-brand" /> },
      { name: "WhatsApp", icon: <MessageCircle className="h-5 w-5 text-brand" /> },
      { name: "Twitter", icon: <Twitter className="h-5 w-5 text-brand" /> },
      { name: "E-post", icon: <Mail className="h-5 w-5 text-brand" /> },
    ],
    process: [
      {
        title: "Utbildning",
        description: "Vi utbildar AI:n på ditt företags specifika information och kunskap.",
      },
      {
        title: "Installation",
        description: "Vi integrerar chatboten på din webbplats och andra plattformar.",
      },
      {
        title: "Konfiguration",
        description: "Vi anpassar utseende, svarstoner och funktioner efter dina behov.",
      },
      {
        title: "Testing",
        description: "Vi genomför riggorösa tester för att säkerställa korrekt funktion.",
      },
      {
        title: "Lansering",
        description: "När allt är klart, aktiverar vi chatboten för dina kunder.",
      },
    ],
    guarantee: {
      title: "Vår konverteringsgaranti",
      description: "Vi garanterar ökad konvertering inom 30 dagar eller pengarna tillbaka.",
      points: [
        "Minst 30% förbättring i svarstid på kundförfrågningar",
        "Minst 20% ökning av kvalificerade leads",
        "Minst 15% förbättring av kundnöjdhet",
        "Fullständig integration med dina befintliga system",
        "Kontinuerlig förbättring och optimering av AI-modellen",
        "Obegränsade konversationer utan extra kostnader"
      ]
    }
  },
  phone: {
    id: "phone",
    title: "AI Phone Agent",
    badge: "Automatiserad telefonservice",
    description: "Missa aldrig ett viktigt samtal igen. Vår AI telefonagent hanterar inkommande samtal, kvalificerar potentiella kunder och frigör din tid.",
    heroImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Naturliga Samtal",
        description: "Vår AI låter precis som en mänsklig receptionist med naturligt flöde.",
        icon: <Headphones className="h-10 w-10 text-brand" />,
      },
      {
        title: "Samtalsfiltrering",
        description: "Prioritera viktiga samtal och filtrera bort oönskade.",
        icon: <PhoneCall className="h-10 w-10 text-brand" />,
      },
      {
        title: "Call Routing",
        description: "Dirigera samtal till rätt person baserat på kundens behov.",
        icon: <Share2 className="h-10 w-10 text-brand" />,
      },
      {
        title: "Bokning & Schemaläggning",
        description: "Låt AI:n boka möten direkt i din kalender.",
        icon: <Calendar className="h-10 w-10 text-brand" />,
      },
      {
        title: "Transkription & Sammanfattning",
        description: "Få skrivna sammanfattningar av alla samtal.",
        icon: <FileText className="h-10 w-10 text-brand" />,
      },
      {
        title: "Flerspråksstöd",
        description: "Hantera samtal på flera olika språk samtidigt.",
        icon: <Globe className="h-10 w-10 text-brand" />,
      },
    ],
    integrations: [
      { name: "Fasta telefoner", icon: <PhoneCall className="h-5 w-5 text-brand" /> },
      { name: "Mobiltelefoner", icon: <Smartphone className="h-5 w-5 text-brand" /> },
      { name: "VoIP-system", icon: <Server className="h-5 w-5 text-brand" /> },
      { name: "CRM-system", icon: <Users className="h-5 w-5 text-brand" /> },
      { name: "Kalender", icon: <Calendar className="h-5 w-5 text-brand" /> },
      { name: "E-post", icon: <Mail className="h-5 w-5 text-brand" /> },
    ],
    process: [
      {
        title: "Konfiguration",
        description: "Vi konfigurerar telefonagenten efter dina specifika behov.",
      },
      {
        title: "Integrering",
        description: "Vi kopplar agenten till din befintliga telefonlösning.",
      },
      {
        title: "Anpassning",
        description: "Vi anpassar röst, tonfall och svar för att matcha ditt varumärke.",
      },
      {
        title: "Testing",
        description: "Vi genomför testsamtal för att säkerställa korrekt funktion.",
      },
      {
        title: "Lansering",
        description: "När allt är klart, aktiverar vi telefonagenten för dina inkommande samtal.",
      },
    ],
    guarantee: {
      title: "Vår effektivitetsgaranti",
      description: "Vi garanterar minst 20 timmars sparad tid per vecka eller pengarna tillbaka.",
      points: [
        "Noll missade samtal under öppettider",
        "99.9% korrekt förståelse av kundens ärende",
        "Minskning av väntetider med minst 90%",
        "Sömlös överlämning till mänsklig personal när det behövs",
        "Fullständig integrering med befintliga telefonsystem",
        "Detaljerade rapporter om samtalsvolym och effektivitet"
      ]
    }
  },
  seo: {
    id: "seo",
    title: "AI-driven SEO",
    badge: "Topprankad i sökresultaten",
    description: "Slå konkurrenterna i sökresultaten. Vår AI analyserar exakt vad som krävs för att toppa Google för dina viktigaste sökord.",
    heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Konkurrentanalys",
        description: "Djupgående analys av dina konkurrenters innehåll och strategier.",
        icon: <Search className="h-10 w-10 text-brand" />,
      },
      {
        title: "Nyckelordsforskning",
        description: "Identifiering av de mest värdefulla sökorden för din bransch.",
        icon: <FileText className="h-10 w-10 text-brand" />,
      },
      {
        title: "Innehållsoptimering",
        description: "AI-genererat och optimerat innehåll för högre rankningar.",
        icon: <PenTool className="h-10 w-10 text-brand" />,
      },
      {
        title: "Teknisk SEO",
        description: "Optimering av webbplatsens tekniska aspekter för bättre indexering.",
        icon: <Code className="h-10 w-10 text-brand" />,
      },
      {
        title: "Länkbyggande",
        description: "Strategisk uppbyggnad av auktoritativa länkar till din webbplats.",
        icon: <Link className="h-10 w-10 text-brand" />,
      },
      {
        title: "Resultatmätning",
        description: "Detaljerad rapportering av dina rankningar och trafik.",
        icon: <BarChart className="h-10 w-10 text-brand" />,
      },
    ],
    integrations: [
      { name: "Google Search Console", icon: <Search className="h-5 w-5 text-brand" /> },
      { name: "Google Analytics", icon: <PieChart className="h-5 w-5 text-brand" /> },
      { name: "WordPress", icon: <Globe className="h-5 w-5 text-brand" /> },
      { name: "Shopify", icon: <ShoppingCart className="h-5 w-5 text-brand" /> },
      { name: "Webmaster Tools", icon: <Settings className="h-5 w-5 text-brand" /> },
      { name: "Content Management", icon: <FileText className="h-5 w-5 text-brand" /> },
    ],
    process: [
      {
        title: "Analys",
        description: "Vi analyserar din nuvarande SEO-position och identifierar möjligheter.",
      },
      {
        title: "Strategi",
        description: "Vi utvecklar en skräddarsydd SEO-strategi för ditt företag.",
      },
      {
        title: "Implementering",
        description: "Vi implementerar tekniska förbättringar och innehållsoptimering.",
      },
      {
        title: "Länkbyggande",
        description: "Vi bygger auktoritativa länkar för att öka din domänauktoritet.",
      },
      {
        title: "Uppföljning",
        description: "Vi övervakar rankningar och justerar strategin kontinuerligt.",
      },
    ],
    guarantee: {
      title: "Vår rankningsgaranti",
      description: "Vi garanterar förbättrade rankningar inom 60 dagar eller pengarna tillbaka.",
      points: [
        "Första sidan på Google för dina primära nyckelord",
        "Minst 30% ökning i organisk trafik",
        "Förbättrad konverteringsgrad från organisk trafik",
        "Högre rankning än minst 3 av dina huvudkonkurrenter",
        "Månadsvis rapportering med transparenta resultat",
        "Kontinuerlig optimering utan ytterligare kostnader"
      ]
    }
  },
  web: {
    id: "web",
    title: "Konverterande Webbplats",
    badge: "Design som säljer",
    description: "En webbplats som inte bara ser bra ut – den säljer. Vi bygger hemsidor optimerade för att omvandla besökare till betalande kunder.",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Konverteringsoptimerad Design",
        description: "Design som leder besökare genom köpresan till konvertering.",
        icon: <PenTool className="h-10 w-10 text-brand" />,
      },
      {
        title: "Mobilanpassning",
        description: "Perfekt användarupplevelse på alla enheter och skärmstorlekar.",
        icon: <Smartphone className="h-10 w-10 text-brand" />,
      },
      {
        title: "Snabb Laddningstid",
        description: "Optimerad prestanda för minimala laddningstider.",
        icon: <Zap className="h-10 w-10 text-brand" />,
      },
      {
        title: "SEO-optimerad",
        description: "Inbyggd sökmotoroptimering för bättre synlighet.",
        icon: <Search className="h-10 w-10 text-brand" />,
      },
      {
        title: "Integrerad Analytics",
        description: "Spårning och analys av besökarbeteende för kontinuerlig förbättring.",
        icon: <BarChart className="h-10 w-10 text-brand" />,
      },
      {
        title: "Säkerhet i Toppklass",
        description: "Robusta säkerhetsfunktioner för att skydda både dig och dina kunder.",
        icon: <Lock className="h-10 w-10 text-brand" />,
      },
    ],
    integrations: [
      { name: "E-handel", icon: <ShoppingCart className="h-5 w-5 text-brand" /> },
      { name: "Betalningssystem", icon: <CreditCard className="h-5 w-5 text-brand" /> },
      { name: "CRM-system", icon: <Users className="h-5 w-5 text-brand" /> },
      { name: "Marketing Automation", icon: <Zap className="h-5 w-5 text-brand" /> },
      { name: "Analytics", icon: <PieChart className="h-5 w-5 text-brand" /> },
      { name: "Chatbot", icon: <MessageSquare className="h-5 w-5 text-brand" /> },
    ],
    process: [
      {
        title: "Behovsanalys",
        description: "Vi analyserar dina behov, mål och målgrupp.",
      },
      {
        title: "Design",
        description: "Vi skapar en design som matchar ditt varumärke och konverteringsmål.",
      },
      {
        title: "Utveckling",
        description: "Vi bygger din webbplats med fokus på användbarhet och prestanda.",
      },
      {
        title: "Innehållsproduktion",
        description: "Vi skapar övertygande texter och visuellt innehåll.",
      },
      {
        title: "Lansering",
        description: "Vi lanserar din webbplats och säkerställer att allt fungerar perfekt.",
      },
    ],
    guarantee: {
      title: "Vår 2-dagars garanti",
      description: "Vi levererar din nya webbplats inom 2 dagar eller pengarna tillbaka. Garanterat.",
      points: [
        "Komplett funktionell webbplats inom 48 timmar",
        "Fullt responsiv design för alla enheter",
        "SEO-optimerad struktur från start",
        "Integrerade konverteringsverktyg",
        "Gratis revideringar under första veckan",
        "30 dagars teknisk support efter lansering"
      ]
    }
  },
  social: {
    id: "social",
    title: "Content för Sociala Medier",
    badge: "Engagerande innehåll",
    description: "Innehåll som engagerar och konverterar. Vår AI skapar relevant innehåll som får din målgrupp att agera.",
    heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Strategisk Innehållsplan",
        description: "Utveckling av en sammanhängande strategi för sociala medier.",
        icon: <FileText className="h-10 w-10 text-brand" />,
      },
      {
        title: "AI-genererat Innehåll",
        description: "Högkvalitativt, relevant innehåll skapat med AI-teknik.",
        icon: <PenTool className="h-10 w-10 text-brand" />,
      },
      {
        title: "Visuell Innehållsproduktion",
        description: "Skapande av engagerande bilder och grafik för sociala plattformar.",
        icon: <ImageIcon className="h-10 w-10 text-brand" />,
      },
      {
        title: "Videoinnehåll",
        description: "Kort, fängslande videoinnehåll optimerat för sociala medier.",
        icon: <Video className="h-10 w-10 text-brand" />,
      },
      {
        title: "Engagemangsökning",
        description: "Strategier för att maximera likes, kommentarer och delningar.",
        icon: <Heart className="h-10 w-10 text-brand" />,
      },
      {
        title: "Analytics & Rapportering",
        description: "Detaljerad analys av innehållets prestanda.",
        icon: <BarChart className="h-10 w-10 text-brand" />,
      },
    ],
    integrations: [
      { name: "Instagram", icon: <Instagram className="h-5 w-5 text-brand" /> },
      { name: "Facebook", icon: <Facebook className="h-5 w-5 text-brand" /> },
      { name: "Twitter", icon: <Twitter className="h-5 w-5 text-brand" /> },
      { name: "LinkedIn", icon: <Linkedin className="h-5 w-5 text-brand" /> },
      { name: "TikTok", icon: <Video className="h-5 w-5 text-brand" /> },
      { name: "YouTube", icon: <Youtube className="h-5 w-5 text-brand" /> },
    ],
    process: [
      {
        title: "Målgruppsanalys",
        description: "Vi analyserar din målgrupp och vilket innehåll som engagerar dem.",
      },
      {
        title: "Innehållsstrategi",
        description: "Vi utvecklar en strategi som matchar dina affärsmål.",
      },
      {
        title: "Innehållsproduktion",
        description: "Vi skapar engagerande innehåll för alla dina kanaler.",
      },
      {
        title: "Schemaläggning",
        description: "Vi schemalägger ditt innehåll för optimal synlighet.",
      },
      {
        title: "Analys & Optimering",
        description: "Vi analyserar resultat och optimerar kontinuerligt.",
      },
    ],
    guarantee: {
      title: "Vår engagemangsgaranti",
      description: "Vi garanterar minst 50% ökat engagemang inom 30 dagar eller pengarna tillbaka.",
      points: [
        "Minst 50% ökning i likes, kommentarer och delningar",
        "Minst 30% tillväxt i följare på dina primära plattformar",
        "Högre räckvidd och synlighet för ditt varumärke",
        "Förbättrad konvertering från sociala medier till din webbplats",
        "Konsekvent innehållspublicering enligt optimal frekvens",
        "Detaljerad rapportering av resultat och ROI"
      ]
    }
  },
  marketing: {
    id: "marketing",
    title: "Resultatstyrd Marknadsföring",
    badge: "Maximal ROI",
    description: "Annonsering som faktiskt lönar sig. Vi optimerar dina kampanjer för att maximera avkastningen på varje investerad krona.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Datadrivna Kampanjer",
        description: "Kampanjer baserade på data och analys för maximalt resultat.",
        icon: <PieChart className="h-10 w-10 text-brand" />,
      },
      {
        title: "Målinriktad Annonsering",
        description: "Precis målgruppsanpassning för högre konverteringsgrad.",
        icon: <Target className="h-10 w-10 text-brand" />,
      },
      {
        title: "Kontinuerlig Optimering",
        description: "Löpande förbättring av kampanjprestanda.",
        icon: <Settings className="h-10 w-10 text-brand" />,
      },
      {
        title: "Multikanal Strategi",
        description: "Koordinerad marknadsföring över alla relevanta kanaler.",
        icon: <Share2 className="h-10 w-10 text-brand" />,
      },
      {
        title: "Kreativt Innehåll",
        description: "Övertygande annonser som driver konvertering.",
        icon: <PenTool className="h-10 w-10 text-brand" />,
      },
      {
        title: "ROI-fokuserad Rapportering",
        description: "Transparenta rapporter fokuserade på affärsresultat.",
        icon: <TrendingUp className="h-10 w-10 text-brand" />,
      },
    ],
    integrations: [
      { name: "Google Ads", icon: <Search className="h-5 w-5 text-brand" /> },
      { name: "Facebook Ads", icon: <Facebook className="h-5 w-5 text-brand" /> },
      { name: "Instagram Ads", icon: <Instagram className="h-5 w-5 text-brand" /> },
      { name: "LinkedIn Ads", icon: <Linkedin className="h-5 w-5 text-brand" /> },
      { name: "Google Analytics", icon: <PieChart className="h-5 w-5 text-brand" /> },
      { name: "CRM-system", icon: <Users className="h-5 w-5 text-brand" /> },
    ],
    process: [
      {
        title: "Målsättning",
        description: "Vi definierar tydliga, mätbara mål för dina kampanjer.",
      },
      {
        title: "Målgruppsanalys",
        description: "Vi identifierar och segmenterar dina ideala målgrupper.",
      },
      {
        title: "Kampanjskapande",
        description: "Vi skapar och konfigurerar dina annonskampanjer.",
      },
      {
        title: "Lansering & Övervakning",
        description: "Vi lanserar kampanjerna och övervakar resultaten noggrant.",
      },
      {
        title: "Optimering",
        description: "Vi optimerar kontinuerligt för att maximera din ROI.",
      },
    ],
    guarantee: {
      title: "Vår ROI-garanti",
      description: "Vi garanterar positiv ROI inom 30 dagar eller pengarna tillbaka.",
      points: [
        "Minst 2x ROI på din investering inom 30 dagar",
        "Lägre kostnad per förvärv än dina tidigare kampanjer",
        "Transparent rapportering av alla kampanjkostnader och resultat",
        "Kontinuerlig optimering utan extra kostnad",
        "Inga långsiktiga kontrakt eller bindningstider",
        "Fullständig äganderätt till alla kampanjer och data"
      ]
    }
  },
};