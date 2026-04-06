"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Dlaczego my",
          id: "about",
        },
        {
          name: "Oferta",
          id: "features",
        },
        {
          name: "Realizacje",
          id: "realizations",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="RAFEX"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Tworzymy reklamę, której nie da się zignorować"
      description="Banery wielkoformatowe, oznakowanie firm, projekty specjalne – realizowane terminowo i bez kompromisów."
      testimonials={[
        {
          name: "Kwidzyn Biznes",
          handle: "@rafex-client",
          testimonial: "Fantastyczna robota, profesjonalna obsługa i zaangażowanie.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/gold-foil-business-card-template_23-2148886788.jpg?_wi=1",
          imageAlt: "outdoor advertising banner modern design",
        },
        {
          name: "Lokalny Partner",
          handle: "@rafex-client",
          testimonial: "Baner olbrzymi, wszystko wykonane perfekcyjnie.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-works-with-professional-precision-drilling-tool_169016-13116.jpg",
          imageAlt: "industrial design precision work",
        },
        {
          name: "Firma Usługowa",
          handle: "@rafex-client",
          testimonial: "Wszystko super sprawnie, na czas.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197266.jpg?_wi=1",
          imageAlt: "large format advertising banner mockup",
        },
        {
          name: "Produkcja X",
          handle: "@rafex-client",
          testimonial: "Profesjonalne podejście do sprawy.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=1",
          imageAlt: "professional business portrait happy",
        },
        {
          name: "Mieszkaniec Kwidzyna",
          handle: "@rafex-client",
          testimonial: "Najlepsza firma w regionie.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/gold-foil-business-card-template_23-2148886788.jpg?_wi=2",
          imageAlt: "outdoor advertising banner modern design",
        },
      ]}
      buttons={[
        {
          text: "Wyceń projekt",
          href: "#contact",
        },
        {
          text: "Zobacz realizacje",
          href: "#realizations",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/gold-foil-business-card-template_23-2148886788.jpg?_wi=3"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Ponad 500 zrealizowanych projektów w Kwidzynie"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Dlaczego ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/carpenter-works-with-professional-precision-drilling-tool_169016-13116.jpg",
          alt: "RAFEX",
        },
        {
          type: "text",
          content: "RAFEX?",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          label: "Jakość",
          title: "Pełen profesjonalizm",
          items: [
            "Indywidualne podejście",
            "Skalowanie realizacji",
            "Wysoka estetyka",
          ],
        },
        {
          id: "2",
          label: "Czas",
          title: "Zawsze na czas",
          items: [
            "Dotrzymywanie terminów",
            "Szybka realizacja",
            "Efektywny montaż",
          ],
        },
        {
          id: "3",
          label: "Nietypowe",
          title: "Nasza specjalność",
          items: [
            "Konstrukcje specjalne",
            "Wielkie formaty",
            "Scenografia",
          ],
        },
      ]}
      title="Dlaczego RAFEX?"
      description="Przewaga, którą budujemy jakością i terminowością."
    />
  </div>

  <div id="realizations" data-section="realizations">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Banery wielkoformatowe",
          price: "Wycena",
          variant: "Popularne",
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197266.jpg?_wi=2",
        },
        {
          id: "p2",
          name: "Oznakowanie firm",
          price: "Wycena",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197266.jpg?_wi=3",
        },
        {
          id: "p3",
          name: "Reklama zewnętrzna",
          price: "Wycena",
          variant: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197266.jpg?_wi=4",
        },
        {
          id: "p4",
          name: "Scenografia",
          price: "Wycena",
          variant: "Indywidualne",
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197266.jpg?_wi=5",
        },
        {
          id: "p5",
          name: "Druk materiałów",
          price: "Wycena",
          variant: "Basic",
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197266.jpg?_wi=6",
        },
        {
          id: "p6",
          name: "Projekty specjalne",
          price: "Wycena",
          variant: "Specjalne",
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197266.jpg?_wi=7",
        },
      ]}
      title="Co możemy dla Ciebie zrobić"
      description="Nasza oferta obejmuje szeroki zakres usług reklamowych."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Anna Kowalska",
          role: "CEO",
          testimonial: "Fantastyczna robota, pełen profesjonalizm.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Marek Nowak",
          role: "Manager",
          testimonial: "Baner olbrzymi, wykonanie perfekcyjne.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=3",
        },
        {
          id: "3",
          name: "Piotr Zieliński",
          role: "Właściciel",
          testimonial: "Szybko, sprawnie i na czas.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=4",
        },
        {
          id: "4",
          name: "Ewa Wiśniewska",
          role: "Marketing",
          testimonial: "Profesjonalne podejście do każdej sprawy.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=5",
        },
        {
          id: "5",
          name: "Janusz Dąbrowski",
          role: "Dyrektor",
          testimonial: "Polecam każdemu w Kwidzynie.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=6",
        },
      ]}
      title="Zaufanie budujemy latami"
      description="Sprawdź co mówią nasi klienci."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Masz pomysł na reklamę? Zrealizujmy go razem."
      description="Działamy lokalnie w Kwidzynie i okolicach. Skontaktuj się z nami już dziś."
      imageSrc="http://img.b2bpic.net/free-vector/gold-foil-business-card-template_23-2148886788.jpg?_wi=4"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="RAFEX"
      columns={[
        {
          title: "Oferta",
          items: [
            {
              label: "Banery",
              href: "#",
            },
            {
              label: "Oznakowanie",
              href: "#",
            },
          ],
        },
        {
          title: "O nas",
          items: [
            {
              label: "Dlaczego my",
              href: "#",
            },
            {
              label: "Opinie",
              href: "#",
            },
          ],
        },
        {
          title: "Kontakt",
          items: [
            {
              label: "Telefon",
              href: "tel:123456789",
            },
            {
              label: "Email",
              href: "mailto:biuro@rafex.pl",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
