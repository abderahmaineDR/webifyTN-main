import { Language } from "@/contexts/LanguageContext";

export interface Translations {
  // Navbar
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    getStarted: string;
  };
  // Home Page
  home: {
    badge: string;
    hero: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      cta: string;
      viewWork: string;
    };
    whatWeOffer: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      services: {
        vitrine: {
          title: string;
          description: string;
        };
        landing: {
          title: string;
          description: string;
        };
        backend: {
          title: string;
          description: string;
        };
        applications: {
          title: string;
          description: string;
        };
        portfolio: {
          title: string;
          description: string;
        };
        static: {
          title: string;
          description: string;
        };
      };
      cta: string;
    };
    whyChoose: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      values: {
        clarity: {
          title: string;
          description: string;
        };
        performance: {
          title: string;
          description: string;
        };
        trust: {
          title: string;
          description: string;
        };
      };
    };
    builtBy: {
      title: string;
      titleHighlight: string;
      description: string;
      cta: string;
    };
    process: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      steps: {
        discovery: {
          title: string;
          description: string;
        };
        design: {
          title: string;
          description: string;
        };
        development: {
          title: string;
          description: string;
        };
        launch: {
          title: string;
          description: string;
        };
      };
    };
    testimonials: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      items: {
        idriss: {
          quote: string;
          name: string;
          role: string;
        };
      };
    };
    finalCTA: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  // About Page
  about: {
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
    };
    story: {
      title: string;
      titleHighlight: string;
      p1: string;
      p2: string;
      p3: string;
    };
    mission: {
      title: string;
      description: string;
    };
    achievements: {
      title: string;
    };
    stats: {
      projects: string;
      satisfaction: string;
      experience: string;
      response: string;
    };
    team: {
      description: string;
    };
    values: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      items: {
        purposeDriven: {
          title: string;
          description: string;
        };
        clientFocused: {
          title: string;
          description: string;
        };
        qualityFirst: {
          title: string;
          description: string;
        };
      };
    };
    founders: {
      title: string;
      titleHighlight: string;
      abdou: {
        name: string;
        title: string;
        bio: string;
      };
      ameen: {
        name: string;
        title: string;
        bio: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  // Services Page
  services: {
    hero: {
      title: string;
      titleHighlight: string;
      subtitle: string;
    };
    title: string;
    titleHighlight: string;
    subtitle: string;
    learnMore: string;
    additional: {
      title: string;
      subtitle: string;
    };
    items: {
      vitrine: {
        title: string;
        description: string;
        features: string[];
      };
      landing: {
        title: string;
        description: string;
        features: string[];
      };
      backend: {
        title: string;
        description: string;
        features: string[];
      };
      applications: {
        title: string;
        description: string;
        features: string[];
      };
      portfolio: {
        title: string;
        description: string;
        features: string[];
        price: string;
      };
      static: {
        title: string;
        description: string;
        features: string[];
        price: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  // Portfolio Page
  portfolio: {
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
    };
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewProject: string;
    projects: {
      creator: {
        category: string;
        title: string;
        description: string;
        tags: string[];
      };
      ecommerce: {
        category: string;
        title: string;
        description: string;
        tags: string[];
      };
      mentalHealth: {
        category: string;
        title: string;
        description: string;
        tags: string[];
      };
      tenux: {
        category: string;
        title: string;
        description: string;
        tags: string[];
      };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  // Contact Page
  contact: {
    hero: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
    };
    form: {
      title: string;
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
      submit: string;
    };
    validation: {
      required: string;
      invalidEmail: string;
      invalidFormat: string;
      nameTooShort: string;
      messageTooShort: string;
    };
    toast: {
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
      serviceError: string;
    };
    info: {
      title: string;
      emailTitle: string;
      emailValue: string;
      emailSubtitle: string;
      locationTitle: string;
      locationValue: string;
      locationSubtitle: string;
      responseTitle: string;
      responseValue: string;
      responseSubtitle: string;
    };
    faq: {
      title: string;
      questions: {
        q1: string;
        a1: string;
        q2: string;
        a2: string;
        q3: string;
        a3: string;
      };
    };
  };
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
  };
  // Not Found
  notFound: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      getStarted: "Commencer",
    },
    home: {
      badge: "Agence Digitale en Tunisie",
      hero: {
        title: "Construisez Votre Fondation Digitale",
        titleHighlight: "avec Confiance",
        subtitle: "WebifyTN se spécialise dans la création de sites web statiques propres et de haute qualité qui aident les petites entreprises, créateurs et professionnels à établir une forte présence en ligne.",
        cta: "Commencer",
        viewWork: "Voir Notre Travail",
      },
      whatWeOffer: {
        title: "Ce Que Nous",
        titleHighlight: "Offrons",
        subtitle: "Solutions de sites web professionnels conçues pour votre succès",
        services: {
          vitrine: {
            title: "Sites Vitrines",
            description: "Sites web professionnels qui présentent magnifiquement votre entreprise, services et identité de marque.",
          },
          landing: {
            title: "Pages d'Atterrissage",
            description: "Pages à forte conversion conçues pour générer des leads et maximiser vos actions marketing.",
          },
          backend: {
            title: "Développement Backend & Sécurité",
            description: "Architecture serveur robuste, développement full stack et sécurisation avancée contre les attaques et vulnérabilités.",
          },
          applications: {
            title: "Applications & Logiciels Sur Mesure",
            description: "Développement d'applications desktop et mobiles performantes adaptées aux besoins spécifiques de votre entreprise.",
          },
          portfolio: {
            title: "Sites Portfolio",
            description: "Sites web élégants pour présenter votre travail et vos réalisations professionnelles.",
          },
          static: {
            title: "Sites Statiques",
            description: "Sites web rapides et sécurisés, parfaits pour les petites entreprises et les projets simples.",
          },
        },
        cta: "Explorer Tous Les Services",
      },
      whyChoose: {
        title: "Pourquoi Choisir",
        titleHighlight: "WebifyTN",
        subtitle: "Nous construisons des sites web qui travaillent aussi dur que vous",
        values: {
          clarity: {
            title: "Clarté",
            description: "Designs propres et intuitifs qui communiquent votre message efficacement et engagent les visiteurs.",
          },
          performance: {
            title: "Performance",
            description: "Sites web ultra-rapides optimisés pour la vitesse, garantissant la meilleure expérience utilisateur.",
          },
          trust: {
            title: "Confiance",
            description: "Solutions professionnelles et fiables qui renforcent la crédibilité et la confiance auprès de votre audience.",
          },
        },
      },
      builtBy: {
        title: "Construit par des",
        titleHighlight: "Professionnels",
        description: "WebifyTN a été fondée par Abdou et Ameen, deux développeurs passionnés par la création d'expériences web exceptionnelles. Nous croyons en la simplicité, la qualité et la construction de relations durables avec nos clients.",
        cta: "En Savoir Plus Sur Nous",
      },
      process: {
        title: "Notre",
        titleHighlight: "Processus",
        subtitle: "Une approche éprouvée pour obtenir des résultats exceptionnels",
        steps: {
          discovery: {
            title: "Découverte",
            description: "Nous commençons par comprendre votre entreprise, vos objectifs et votre public cible pour créer une stratégie sur mesure.",
          },
          design: {
            title: "Conception",
            description: "Notre équipe crée des visuels époustouflants et des mises en page intuitives qui reflètent l'identité de votre marque.",
          },
          development: {
            title: "Développement",
            description: "Nous construisons votre site web en utilisant des technologies modernes garantissant vitesse, sécurité et évolutivité.",
          },
          launch: {
            title: "Lancement",
            description: "Après des tests rigoureux, nous déployons votre site et fournissons un support continu pour un succès durable.",
          },
        },
      },
      testimonials: {
        title: "Approuvé par des",
        titleHighlight: "Professionnels",
        subtitle: "Voici ce que nos clients disent de travailler avec nous",
        items: {
          idriss: {
            quote: "Témoignage à venir",
            name: "Idriss Ruissi",
            role: "Créateur de contenu & Monteur vidéo",
          },
        },
      },
      finalCTA: {
        title: "Prêt à Construire Votre Fondation Digitale ?",
        subtitle: "Créons un site web qui représente votre entreprise avec clarté, performe exceptionnellement et grandit avec confiance.",
        cta: "Démarrer Votre Projet",
      },
    },
    about: {
      hero: {
        badge: "À Propos de Nous",
        title: "À Propos de",
        titleHighlight: "WebifyTN",
        subtitle: "Construire des sites web qui responsabilisent les entreprises et inspirent la confiance",
      },
      story: {
        title: "Notre",
        titleHighlight: "Histoire",
        p1: "WebifyTN est née d'une vision simple : aider les petites entreprises, créateurs et professionnels à établir une présence en ligne forte sans la complexité et le coût élevé des sites web traditionnels.",
        p2: "Nous avons remarqué que de nombreuses entreprises avaient du mal à se démarquer en ligne. Elles avaient besoin de sites web professionnels mais faciles à gérer, rapides et adaptés à leurs besoins. C'est pourquoi nous nous spécialisons dans les sites web statiques.",
        p3: "Aujourd'hui, nous sommes fiers de servir des clients à travers la Tunisie et au-delà, créant des sites web propres, performants et efficaces qui aident les entreprises à prospérer.",
      },
      mission: {
        title: "Notre Mission",
        description: "Responsabiliser les entreprises avec des outils numériques qui les aident à croître, se connecter avec leur public et atteindre leurs objectifs. Nous croyons en la construction de relations durables avec nos clients, pas seulement des sites web.",
      },
      achievements: {
        title: "Nos Réalisations",
      },
      stats: {
        projects: "Projets Livrés",
        satisfaction: "Satisfaction Client",
        experience: "Années d'Expérience",
        response: "Temps de Réponse",
      },
      team: {
        description: "Nous sommes une petite équipe dévouée de professionnels passionnés par la création d'expériences numériques exceptionnelles.",
      },
      values: {
        title: "Nos",
        titleHighlight: "Valeurs",
        subtitle: "Les principes qui guident notre travail",
        items: {
          purposeDriven: {
            title: "Orienté vers un But",
            description: "Chaque ligne de code que nous écrivons sert un but. Pas de superflu, pas de fonctionnalités inutiles—juste ce qui fonctionne.",
          },
          clientFocused: {
            title: "Centré sur le Client",
            description: "Votre succès est notre succès. Nous écoutons, nous adaptons et livrons des solutions qui dépassent les attentes.",
          },
          qualityFirst: {
            title: "Qualité d'Abord",
            description: "Nous ne faisons jamais de compromis sur la qualité. Chaque projet reçoit toute notre attention et notre expertise.",
          },
        },
      },
      founders: {
        title: "Rencontrez les",
        titleHighlight: "Fondateurs",
        abdou: {
          name: "Abdou",
          title: "Co-Fondateur & Développeur",
          bio: "Développeur passionné avec un œil attentif au design et aux détails. Abdou se spécialise dans la création d'expériences web propres et intuitives qui ravissent les utilisateurs.",
        },
        ameen: {
          name: "Ameen",
          title: "Co-Fondateur & Développeur",
          bio: "Résolveur de problèmes créatif passionné par la construction de sites web rapides et fiables. Ameen se concentre sur la performance et la fourniture de solutions qui fonctionnent.",
        },
      },
      cta: {
        title: "Travaillons Ensemble",
        subtitle: "Prêt à amener votre présence en ligne au niveau supérieur ?",
        button: "Démarrer un Projet",
      },
    },
    services: {
      hero: {
        title: "Nos",
        titleHighlight: "Services",
        subtitle: "Solutions de sites web professionnels adaptées aux besoins de votre entreprise",
      },
      title: "Ce Que Nous",
      titleHighlight: "Offrons",
      subtitle: "Choisissez la solution parfaite pour votre présence en ligne",
      learnMore: "En Savoir Plus",
      additional: {
        title: "Services Additionnels",
        subtitle: "Nous offrons également ces solutions spécialisées pour répondre à vos besoins uniques",
      },
      items: {
        vitrine: {
          title: "Sites Vitrines",
          description: "Sites web professionnels qui présentent magnifiquement votre entreprise et vos services.",
          features: [
            "Design moderne et réactif",
            "Jusqu'à 5 pages",
            "Intégration formulaire de contact",
            "Optimisation SEO",
            "Design adapté aux mobiles",
            "Intégration réseaux sociaux",
            "2 tours de révisions",
          ],
        },
        landing: {
          title: "Pages d'Atterrissage",
          description: "Pages à forte conversion conçues pour générer des leads et des actions.",
          features: [
            "Design d'une page réactif",
            "Formulaire de capture de leads",
            "Optimisation des appels à l'action",
            "Vitesse de chargement rapide",
            "Approche mobile-first",
            "Prêt pour les tests A/B",
            "1 tour de révisions",
          ],
        },
        backend: {
          title: "Développement Backend & Sécurité",
          description: "Architecture serveur robuste et sécurisation avancée pour des applications web performantes et protégées.",
          features: [
            "Conception d'API sécurisées et évolutives",
            "Développement Full Stack",
            "Intégration bases de données (SQL / NoSQL / Supabase)",
            "Authentification et gestion des rôles",
            "Création de tableaux de bord administrateur et gestion avancée des rôles",
            "Protection contre attaques DDoS et injections",
            "Sécurisation des données et chiffrement",
            "Optimisation des performances serveur",
            "Surveillance et prévention des intrusions",
          ],
        },
        applications: {
          title: "Applications & Logiciels Sur Mesure",
          description: "Conception et développement d'applications performantes pour desktop et mobile, adaptées aux besoins spécifiques de votre entreprise.",
          features: [
            "Développement d'applications desktop (Windows / macOS)",
            "Création d'applications mobiles (Android / iOS)",
            "Conception de logiciels métiers personnalisés",
            "Création d'installateurs et systèmes de déploiement",
            "Interfaces utilisateur modernes et intuitives",
            "Synchronisation avec bases de données et API",
            "Sécurisation des applications",
            "Maintenance et évolutivité",
          ],
        },
        portfolio: {
          title: "Sites Portfolio",
          description: "Présentez votre travail et réalisations de manière professionnelle.",
          features: [
            "Galerie de projets",
            "Filtrage par catégories",
            "Lightbox pour les images",
            "Intégration de témoignages",
            "Section blog",
          ],
          price: "À partir de 400 TND",
        },
        static: {
          title: "Sites Statiques",
          description: "Solutions rapides et rentables pour les petites entreprises.",
          features: [
            "Ultra-rapide",
            "Hébergement sécurisé",
            "Maintenance facile",
            "Faible coût",
            "Haute fiabilité",
          ],
          price: "À partir de 300 TND",
        },
      },
      cta: {
        title: "Prêt à Commencer ?",
        subtitle: "Discutons de votre projet et créons quelque chose d'incroyable ensemble",
        button: "Contactez-Nous",
      },
    },
    portfolio: {
      hero: {
        badge: "Notre Travail",
        title: "Notre",
        titleHighlight: "Portfolio",
        subtitle: "Découvrez nos projets récents et le travail que nous avons réalisé pour nos clients",
      },
      title: "Travaux",
      titleHighlight: "Récents",
      subtitle: "Bientôt disponible - Nous travaillons actuellement sur des projets passionnants",
      viewProject: "Voir le projet",
      projects: {
        creator: {
          category: "Site Portfolio",
          title: "Portfolio pour un Créateur de Contenu",
          description: "Un portfolio moderne, axé sur la performance, conçu pour présenter la marque, la présence sociale et le travail créatif d'un créateur de contenu. Construit avec des animations fluides, des transitions élégantes et une esthétique sombre haut de gamme pour souligner la narration et les visuels.",
          tags: ["Portfolio", "Branding", "Animation", "Design Web"],
        },
        ecommerce: {
          category: "Application Web E-Commerce",
          title: "Plateforme E-Commerce de Produits Numériques",
          description: "Une plateforme e-commerce entièrement fonctionnelle pour la vente de produits numériques tels que des clés d'activation et des outils numériques. Comprend des flux de paiement sécurisés, la gestion des produits et une expérience utilisateur fluide et optimisée pour la conversion.",
          tags: ["E-Commerce", "Produits Numériques", "App Web", "Paiements"],
        },
        mentalHealth: {
          category: "Plateforme Web Open Source",
          title: "Plateforme Open Source de Santé Mentale (Tunisie)",
          description: "Une plateforme open source dédiée à la santé mentale en Tunisie, conçue pour offrir un accès inclusif à l’accompagnement psychologique, à la sensibilisation et aux ressources de soutien. Le projet vise à briser les tabous autour de la santé mentale grâce à une interface accessible, multilingue et centrée sur l’humain, tout en favorisant la collaboration communautaire et l’impact social.",
          tags: ["Santé Mentale", "Open Source", "Impact Social", "Tunisie", "Plateforme Web"],
        },
        tenux: {
          category: "Plateforme de Trading Crypto",
          title: "Tunex",
          description: "Tunex est une plateforme de trading et d'échange de cryptomonnaies conçue pour offrir clarté, sécurité et performance. Le projet met l'accent sur une interface utilisateur moderne, une navigation fluide et une expérience optimisée pour la gestion, l'achat et la vente d'actifs numériques, avec une architecture responsive et des animations subtiles renforçant la confiance et l'accessibilité.",
          tags: ["Plateforme de Trading", "Crypto Exchange", "Fintech", "UI/UX", "Application Web"],
        },
      },
      cta: {
        title: "Prêt à Créer Quelque Chose d'Incroyable ?",
        subtitle: "Travaillons ensemble pour donner vie à votre vision",
        button: "Démarrer un Projet",
      },
    },
    contact: {
      hero: {
        badge: "Contactez-Nous",
        title: "Prenons",
        titleHighlight: "Contact",
        subtitle: "Vous avez un projet en tête ? Nous aimerions en entendre parler. Contactez-nous et discutons de la façon dont nous pouvons vous aider.",
      },
      form: {
        title: "Envoyez-nous un Message",
        name: {
          label: "Nom",
          placeholder: "Votre nom",
        },
        email: {
          label: "Email",
          placeholder: "votre@email.com",
        },
        subject: {
          label: "Sujet",
          placeholder: "Comment pouvons-nous vous aider ?",
        },
        message: {
          label: "Message",
          placeholder: "Parlez-nous de votre projet...",
        },
        submit: "Envoyer le Message",
      },
      validation: {
        required: "Ce champ est obligatoire",
        invalidEmail: "Veuillez entrer une adresse email valide",
        invalidFormat: "Format invalide",
        nameTooShort: "Le nom doit contenir au moins 2 caractères",
        messageTooShort: "Le message doit contenir au moins 10 caractères",
      },
      toast: {
        successTitle: "Succès !",
        successMessage: "Votre message a été envoyé avec succès.",
        errorTitle: "Erreur",
        errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
        serviceError: "Le service d'email n'est pas chargé. Veuillez réessayer plus tard.",
      },
      info: {
        title: "Informations de Contact",
        emailTitle: "Email",
        emailValue: "webifytn@gmail.com",
        emailSubtitle: "Nous répondons sous 24 heures",
        locationTitle: "Localisation",
        locationValue: "Tunisie",
        locationSubtitle: "Travaillant avec des clients du monde entier",
        responseTitle: "Temps de Réponse",
        responseValue: "Sous 24 heures",
        responseSubtitle: "Communication rapide et fiable",
      },
      faq: {
        title: "Questions Fréquentes",
        questions: {
          q1: "Combien de temps prend un projet ? Généralement 1-2 semaines.",
          a1: "La plupart des projets sont terminés en 1-2 semaines, selon la complexité et vos délais de retour.",
          q2: "Qu'est-ce qui est inclus dans le prix ? Tout ce dont vous avez besoin pour lancer.",
          a2: "Chaque projet comprend la conception, le développement, l'optimisation mobile, le SEO de base et le support pour vous lancer.",
          q3: "Offrez-vous un support continu ? Oui, nous sommes là pour vous aider.",
          a3: "Nous fournissons des forfaits de maintenance et de support continus pour maintenir votre site Web en bon état de marche et à jour.",
        },
      },
    },
    footer: {
      description: "Construire des sites web propres et performants qui aident les entreprises à réussir en ligne.",
      quickLinks: "Liens Rapides",
      services: "Services",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
    notFound: {
      title: "Page Non Trouvée",
      subtitle: "Désolé, la page que vous recherchez n'existe pas.",
      cta: "Retour à l'Accueil",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      getStarted: "Get Started",
    },
    home: {
      badge: "Digital Agency in Tunisia",
      hero: {
        title: "Build Your Digital Foundation",
        titleHighlight: "with Confidence",
        subtitle: "WebifyTN specializes in creating clean, high-quality static websites that help small businesses, creators, and professionals establish a strong online presence.",
        cta: "Get Started",
        viewWork: "View Our Work",
      },
      whatWeOffer: {
        title: "What We",
        titleHighlight: "Offer",
        subtitle: "Professional website solutions designed for your success",
        services: {
          vitrine: {
            title: "Vitrine Websites",
            description: "Professional websites that beautifully showcase your company, services, and brand identity.",
          },
          landing: {
            title: "Landing Pages",
            description: "High-conversion pages designed to generate leads and maximize marketing actions.",
          },
          backend: {
            title: "Backend Development & Security",
            description: "Robust server architecture, full-stack development, and advanced protection against vulnerabilities and attacks.",
          },
          applications: {
            title: "Custom Applications & Software",
            description: "High-performance desktop and mobile application development tailored to your business needs.",
          },
          portfolio: {
            title: "Portfolio Websites",
            description: "Elegant websites to showcase your work and professional achievements.",
          },
          static: {
            title: "Static Websites",
            description: "Fast and secure websites, perfect for small businesses and simple projects.",
          },
        },
        cta: "Explore All Services",
      },
      whyChoose: {
        title: "Why Choose",
        titleHighlight: "WebifyTN",
        subtitle: "We build websites that work as hard as you do",
        values: {
          clarity: {
            title: "Clarity",
            description: "Clean, intuitive designs that communicate your message effectively and engage visitors.",
          },
          performance: {
            title: "Performance",
            description: "Lightning-fast websites optimized for speed, ensuring the best user experience.",
          },
          trust: {
            title: "Trust",
            description: "Professional, reliable solutions that build credibility and trust with your audience.",
          },
        },
      },
      builtBy: {
        title: "Built by",
        titleHighlight: "Professionals",
        description: "WebifyTN was founded by Abdou and Ameen, two developers passionate about creating exceptional web experiences. We believe in simplicity, quality, and building lasting relationships with our clients.",
        cta: "Learn More About Us",
      },
      process: {
        title: "Our",
        titleHighlight: "Process",
        subtitle: "A proven approach to delivering exceptional results",
        steps: {
          discovery: {
            title: "Discovery",
            description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
          },
          design: {
            title: "Design",
            description: "Our team crafts stunning visuals and intuitive layouts that reflect your brand identity.",
          },
          development: {
            title: "Development",
            description: "We build your website using modern technologies ensuring speed, security, and scalability.",
          },
          launch: {
            title: "Launch",
            description: "After thorough testing, we deploy your site and provide ongoing support for continued success.",
          },
        },
      },
      testimonials: {
        title: "Trusted by",
        titleHighlight: "Professionals",
        subtitle: "Here's what our clients say about working with us",
        items: {
          idriss: {
            quote: "Testimonial coming soon",
            name: "Idriss Ruissi",
            role: "Content Creator & Video Editor",
          },
        },
      },
      finalCTA: {
        title: "Ready to Build Your Digital Foundation?",
        subtitle: "Let's create a website that represents your business with clarity, performs exceptionally, and grows with confidence.",
        cta: "Start Your Project",
      },
    },
    about: {
      hero: {
        badge: "About Us",
        title: "About",
        titleHighlight: "WebifyTN",
        subtitle: "Building websites that empower businesses and inspire confidence",
      },
      story: {
        title: "Our",
        titleHighlight: "Story",
        p1: "WebifyTN was born from a simple vision: to help small businesses, creators, and professionals establish a strong online presence without the complexity and high cost of traditional websites.",
        p2: "We noticed that many businesses struggled to stand out online. They needed professional websites that were easy to manage, fast, and tailored to their needs. That's why we specialize in static websites.",
        p3: "Today, we're proud to serve clients across Tunisia and beyond, creating clean, performant, and effective websites that help businesses thrive.",
      },
      mission: {
        title: "Our Mission",
        description: "To empower businesses with digital tools that help them grow, connect with their audience, and achieve their goals. We believe in building lasting relationships with our clients, not just websites.",
      },
      achievements: {
        title: "Our Achievements",
      },
      stats: {
        projects: "Projects Delivered",
        satisfaction: "Client Satisfaction",
        experience: "Years Experience",
        response: "Response Time",
      },
      team: {
        description: "We're a small but dedicated team of professionals who are passionate about creating exceptional digital experiences.",
      },
      values: {
        title: "Our",
        titleHighlight: "Values",
        subtitle: "The principles that guide everything we do",
        items: {
          purposeDriven: {
            title: "Purpose-Driven",
            description: "Every line of code we write serves a purpose. No bloat, no unnecessary features—just what works.",
          },
          clientFocused: {
            title: "Client-Focused",
            description: "Your success is our success. We listen, adapt, and deliver solutions that exceed expectations.",
          },
          qualityFirst: {
            title: "Quality First",
            description: "We never compromise on quality. Every project receives our full attention and expertise.",
          },
        },
      },
      founders: {
        title: "Meet the",
        titleHighlight: "Founders",
        abdou: {
          name: "Abdou",
          title: "Co-Founder & Developer",
          bio: "Passionate developer with a keen eye for design and detail. Abdou specializes in creating clean, intuitive web experiences that delight users.",
        },
        ameen: {
          name: "Ameen",
          title: "Co-Founder & Developer",
          bio: "Creative problem-solver passionate about building fast and reliable websites. Ameen focuses on performance and delivering solutions that work.",
        },
      },
      cta: {
        title: "Let's Work Together",
        subtitle: "Ready to take your online presence to the next level?",
        button: "Start a Project",
      },
    },
    services: {
      hero: {
        title: "Our",
        titleHighlight: "Services",
        subtitle: "Professional website solutions tailored to your business needs",
      },
      title: "What We",
      titleHighlight: "Offer",
      subtitle: "Choose the perfect solution for your online presence",
      learnMore: "Learn More",
      additional: {
        title: "Additional Services",
        subtitle: "We also offer these specialized solutions to meet your unique needs",
      },
      items: {
        vitrine: {
          title: "Vitrine Websites",
          description: "Professional websites that beautifully showcase your business and services.",
          features: [
            "Custom responsive design",
            "Up to 5 pages",
            "Contact form integration",
            "SEO optimization",
            "Mobile-friendly layout",
            "Social media integration",
            "2 rounds of revisions",
          ],
        },
        landing: {
          title: "Landing Pages",
          description: "High-converting pages designed to generate leads and actions.",
          features: [
            "Single-page responsive design",
            "Lead capture form",
            "Call-to-action optimization",
            "Fast loading speed",
            "Mobile-first approach",
            "A/B testing ready",
            "1 round of revisions",
          ],
        },
        backend: {
          title: "Backend Development & Security",
          description: "Robust server architecture and advanced security implementation for high-performance and protected web applications.",
          features: [
            "Secure and scalable API development",
            "Full Stack architecture",
            "Database integration (SQL / NoSQL / Supabase)",
            "Authentication and role management",
            "Admin dashboard development and advanced role management",
            "Protection against DDoS and injection attacks",
            "Data encryption and security hardening",
            "Server performance optimization",
            "Intrusion monitoring and prevention",
          ],
        },
        applications: {
          title: "Custom Applications & Software",
          description: "Design and development of high-performance desktop and mobile applications tailored to your business needs.",
          features: [
            "Desktop application development (Windows / macOS)",
            "Mobile app development (Android / iOS)",
            "Custom business software solutions",
            "Installer creation and deployment systems",
            "Modern and intuitive user interfaces",
            "Database and API integration",
            "Application security implementation",
            "Scalability and maintenance support",
          ],
        },
        portfolio: {
          title: "Portfolio Websites",
          description: "Showcase your work and achievements professionally.",
          features: [
            "Project gallery",
            "Category filtering",
            "Image lightbox",
            "Testimonials integration",
            "Blog section",
          ],
          price: "Starting at 400 TND",
        },
        static: {
          title: "Static Websites",
          description: "Fast and cost-effective solutions for small businesses.",
          features: [
            "Ultra-fast",
            "Secure hosting",
            "Easy maintenance",
            "Low cost",
            "High reliability",
          ],
          price: "Starting at 300 TND",
        },
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Let's discuss your project and create something amazing together",
        button: "Contact Us",
      },
    },
    portfolio: {
      hero: {
        badge: "Our Work",
        title: "Our",
        titleHighlight: "Portfolio",
        subtitle: "Explore our recent projects and the work we've done for our clients",
      },
      title: "Recent",
      titleHighlight: "Work",
      subtitle: "Coming soon - We're currently working on exciting projects",
      viewProject: "View project",
      projects: {
        creator: {
          category: "Portfolio Website",
          title: "Portfolio for a Content Creator",
          description: "A modern, performance-focused portfolio designed to showcase a content creator’s brand, social presence, and creative work. Built with smooth animations, elegant transitions, and a premium dark aesthetic to highlight storytelling and visuals.",
          tags: ["Portfolio", "Branding", "Animation", "Web Design"],
        },
        ecommerce: {
          category: "E-Commerce Web App",
          title: "Digital Products E-Commerce Platform",
          description: "A fully functional e-commerce platform for selling digital products such as activation keys and digital tools. Features secure checkout flows, product management, and a smooth, conversion-optimized user experience.",
          tags: ["E-Commerce", "Digital Products", "Web App", "Payments"],
        },
        mentalHealth: {
          category: "Open Source Web Platform",
          title: "Mental Health Open Source Platform (Tunisia)",
          description: "An open-source platform dedicated to mental health in Tunisia, designed to provide inclusive access to psychological support, awareness, and resources. The project aims to break taboos surrounding mental health through an accessible, multilingual, and human-centered interface, while fostering community collaboration and social impact.",
          tags: ["Mental Health", "Open Source", "Social Impact", "Tunisia", "Web Platform"],
        },
        tenux: {
          category: "Crypto Trading Platform",
          title: "Tunex",
          description: "Tunex is a cryptocurrency trading and exchange platform designed to provide clarity, security, and performance. The project emphasizes a modern user interface, smooth navigation, and an optimized experience for managing, buying, and selling digital assets, with a responsive architecture and subtle animations that build trust and accessibility.",
          tags: ["Trading Platform", "Crypto Exchange", "Fintech", "UI/UX", "Web Application"],
        },
      },
      cta: {
        title: "Ready to Create Something Amazing?",
        subtitle: "Let's work together to bring your vision to life",
        button: "Start a Project",
      },
    },
    contact: {
      hero: {
        badge: "Get in Touch",
        title: "Get in",
        titleHighlight: "Touch",
        subtitle: "Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help.",
      },
      form: {
        title: "Send us a Message",
        name: {
          label: "Name",
          placeholder: "Your name",
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
        },
        subject: {
          label: "Subject",
          placeholder: "How can we help?",
        },
        message: {
          label: "Message",
          placeholder: "Tell us about your project...",
        },
        submit: "Send Message",
      },
      validation: {
        required: "This field is required",
        invalidEmail: "Please enter a valid email address",
        invalidFormat: "Invalid format",
        nameTooShort: "Name must be at least 2 characters",
        messageTooShort: "Message must be at least 10 characters",
      },
      toast: {
        successTitle: "Success!",
        successMessage: "Your message has been sent successfully.",
        errorTitle: "Error",
        errorMessage: "Failed to send message. Please try again.",
        serviceError: "Email service is not loaded. Please try again later.",
      },
      info: {
        title: "Contact Information",
        emailTitle: "Email Us",
        emailValue: "webifytn@gmail.com",
        emailSubtitle: "We'll respond within 24 hours",
        locationTitle: "Location",
        locationValue: "Tunisia",
        locationSubtitle: "Working with clients worldwide",
        responseTitle: "Response Time",
        responseValue: "Within 24 hours",
        responseSubtitle: "Quick and reliable communication",
      },
      faq: {
        title: "Common Questions",
        questions: {
          q1: "How long does a project take? Usually 1-2 weeks.",
          a1: "Most projects are completed within 1-2 weeks, depending on complexity and your feedback timeline.",
          q2: "What's included in the price? Everything you need to launch.",
          a2: "Every project includes design, development, mobile optimization, basic SEO, and support to get you live.",
          q3: "Do you offer ongoing support? Yes, we're here to help.",
          a3: "We provide ongoing maintenance and support packages to keep your website running smoothly and up to date.",
        },
      },
    },
    footer: {
      description: "Building clean, performant websites that help businesses succeed online.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Page Not Found",
      subtitle: "Sorry, the page you're looking for doesn't exist.",
      cta: "Back to Home",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      portfolio: "الأعمال",
      contact: "اتصل بنا",
      getStarted: "ابدأ الآن",
    },
    home: {
      badge: "وكالة رقمية في تونس",
      hero: {
        title: "ابنِ أساسك الرقمي",
        titleHighlight: "بثقة",
        subtitle: "تتخصص WebifyTN في إنشاء مواقع ويب ثابتة نظيفة وعالية الجودة تساعد الشركات الصغيرة والمبدعين والمحترفين على تأسيس حضور قوي على الإنترنت.",
        cta: "ابدأ الآن",
        viewWork: "اطلع على أعمالنا",
      },
      whatWeOffer: {
        title: "ما",
        titleHighlight: "نقدمه",
        subtitle: "حلول مواقع ويب احترافية مصممة لنجاحك",
        services: {
          vitrine: {
            title: "المواقع التعريفية",
            description: "مواقع احترافية تعرض شركتك وخدماتك وهوية علامتك التجارية بأفضل صورة.",
          },
          landing: {
            title: "صفحات الهبوط",
            description: "صفحات عالية التحويل مصممة لجذب العملاء المحتملين وزيادة التفاعل.",
          },
          backend: {
            title: "تطوير الخلفية والأمن السيبراني",
            description: "بنية خادم قوية وتطوير متكامل مع حماية متقدمة ضد الهجمات والثغرات.",
          },
          applications: {
            title: "تطبيقات وبرمجيات مخصصة",
            description: "تطوير تطبيقات سطح المكتب والموبايل عالية الأداء حسب احتياجات عملك.",
          },
          portfolio: {
            title: "مواقع المحفظة",
            description: "مواقع أنيقة لعرض أعمالك وإنجازاتك المهنية.",
          },
          static: {
            title: "مواقع ثابتة",
            description: "مواقع سريعة وآمنة، مثالية للشركات الصغيرة والمشاريع البسيطة.",
          },
        },
        cta: "استكشف جميع الخدمات",
      },
      whyChoose: {
        title: "لماذا تختار",
        titleHighlight: "WebifyTN",
        subtitle: "نبني مواقع ويب تعمل بجد مثلك",
        values: {
          clarity: {
            title: "الوضوح",
            description: "تصاميم نظيفة وبديهية تنقل رسالتك بفعالية وتجذب الزوار.",
          },
          performance: {
            title: "الأداء",
            description: "مواقع ويب سريعة البرق محسّنة للسرعة، مما يضمن أفضل تجربة مستخدم.",
          },
          trust: {
            title: "الثقة",
            description: "حلول احترافية وموثوقة تبني المصداقية والثقة مع جمهورك.",
          },
        },
      },
      builtBy: {
        title: "بناه",
        titleHighlight: "محترفون",
        description: "تأسست WebifyTN على يد عبدو وأمين، مطوران متحمسان لإنشاء تجارب ويب استثنائية. نحن نؤمن بالبساطة والجودة وبناء علاقات دائمة مع عملائنا.",
        cta: "تعرف علينا أكثر",
      },
      process: {
        title: "عمليتنا",
        titleHighlight: "",
        subtitle: "نهج مثبت لتحقيق نتائج استثنائية",
        steps: {
          discovery: {
            title: "الاكتشاف",
            description: "نبدأ بفهم عملك وأهدافك وجمهورك المستهدف لإنشاء استراتيجية مخصصة.",
          },
          design: {
            title: "التصميم",
            description: "يصنع فريقنا صورًا مذهلة وتخطيطات بديهية تعكس هوية علامتك التجارية.",
          },
          development: {
            title: "التطوير",
            description: "نبني موقعك الإلكتروني باستخدام التقنيات الحديثة التي تضمن السرعة والأمان وقابلية التوسع.",
          },
          launch: {
            title: "الإطلاق",
            description: "بعد الاختبار الشامل، نقوم بنشر موقعك ونقدم دعمًا مستمرًا لتحقيق النجاح المستمر.",
          },
        },
      },
      testimonials: {
        title: "موثوق بها من قبل",
        titleHighlight: "المحترفين",
        subtitle: "إليك ما يقوله عملاؤنا عن العمل معنا",
        items: {
          idriss: {
            quote: "الشهادة قادمة قريباً",
            name: "إدريس رويسي",
            role: "صانع محتوى & محرر فيديو",
          },
        },
      },
      finalCTA: {
        title: "هل أنت مستعد لبناء أساسك الرقمي؟",
        subtitle: "لنقم بإنشاء موقع ويب يمثل عملك بوضوح، يعمل بشكل استثنائي، وينمو بثقة.",
        cta: "ابدأ مشروعك",
      },
    },
    about: {
      hero: {
        badge: "من نحن",
        title: "عن",
        titleHighlight: "WebifyTN",
        subtitle: "بناء مواقع ويب تمكّن الشركات وتلهم الثقة",
      },
      story: {
        title: "قصتنا",
        titleHighlight: "",
        p1: "وُلدت WebifyTN من رؤية بسيطة: مساعدة الشركات الصغيرة والمبدعين والمحترفين على تأسيس حضور قوي على الإنترنت دون تعقيد وتكلفة عالية للمواقع التقليدية.",
        p2: "لاحظنا أن العديد من الشركات تكافح للتميز عبر الإنترنت. كانوا بحاجة إلى مواقع ويب احترافية سهلة الإدارة وسريعة ومصممة خصيصًا لاحتياجاتهم. لهذا السبب نحن متخصصون في المواقع الثابتة.",
        p3: "اليوم، نحن فخورون بخدمة العملاء في جميع أنحاء تونس وخارجها، وإنشاء مواقع ويب نظيفة وفعالة وفعّالة تساعد الشركات على الازدهار.",
      },
      mission: {
        title: "مهمتنا",
        description: "تمكين الشركات بأدوات رقمية تساعدها على النمو والتواصل مع جمهورها وتحقيق أهدافها. نحن نؤمن ببناء علاقات دائمة مع عملائنا، وليس فقط مواقع ويب.",
      },
      achievements: {
        title: "إنجازاتنا",
      },
      stats: {
        projects: "المشاريع المنجزة",
        satisfaction: "رضا العملاء",
        experience: "سنوات الخبرة",
        response: "وقت الاستجابة",
      },
      team: {
        description: "نحن فريق صغير ولكن متفانٍ من المحترفين المتحمسين لإنشاء تجارب رقمية استثنائية.",
      },
      values: {
        title: "قيمنا",
        titleHighlight: "",
        subtitle: "المبادئ التي توجه عملنا",
        items: {
          purposeDriven: {
            title: "موجه نحو الهدف",
            description: "كل سطر من التعليمات البرمجية نكتبه يخدم غرضًا. لا انتفاخ، لا ميزات غير ضرورية - فقط ما يعمل.",
          },
          clientFocused: {
            title: "التركيز على العميل",
            description: "نجاحك هو نجاحنا. نستمع ونتكيف ونقدم حلولاً تتجاوز التوقعات.",
          },
          qualityFirst: {
            title: "الجودة أولاً",
            description: "نحن لا نتنازل أبدًا عن الجودة. يحصل كل مشروع على اهتمامنا وخبرتنا الكاملة.",
          },
        },
      },
      founders: {
        title: "تعرف على",
        titleHighlight: "المؤسسين",
        abdou: {
          name: "عبدو",
          title: "مؤسس مشارك ومطور",
          bio: "مطور متحمس مع عين ثاقبة للتصميم والتفاصيل. يتخصص عبدو في إنشاء تجارب ويب نظيفة وبديهية تسعد المستخدمين.",
        },
        ameen: {
          name: "أمين",
          title: "مؤسس مشارك ومطور",
          bio: "حلّال مشاكل إبداعي متحمس لبناء مواقع ويب سريعة وموثوقة. يركز أمين على الأداء وتقديم حلول تعمل.",
        },
      },
      cta: {
        title: "لنعمل معًا",
        subtitle: "هل أنت مستعد للارتقاء بوجودك على الإنترنت إلى المستوى التالي؟",
        button: "ابدأ مشروعًا",
      },
    },
    services: {
      hero: {
        title: "خدماتنا",
        titleHighlight: "",
        subtitle: "حلول مواقع ويب احترافية مصممة خصيصًا لاحتياجات عملك",
      },
      title: "ما",
      titleHighlight: "نقدمه",
      subtitle: "اختر الحل المثالي لوجودك على الإنترنت",
      learnMore: "اعرف المزيد",
      additional: {
        title: "خدمات إضافية",
        subtitle: "نقدم أيضًا هذه الحلول المتخصصة لتلبية احتياجاتك الفريدة",
      },
      items: {
        vitrine: {
          title: "مواقع العرض",
          description: "مواقع ويب احترافية تعرض عملك وخدماتك بشكل جميل.",
          features: [
            "تصميم مخصص ومتجاوب",
            "حتى 5 صفحات",
            "تكامل نموذج الاتصال",
            "تحسين محركات البحث",
            "تخطيط متوافق مع الجوال",
            "تكامل وسائل التواصل الاجتماعي",
            "2 جولات من المراجعات",
          ],
        },
        landing: {
          title: "صفحات الهبوط",
          description: "صفحات عالية التحويل مصممة لتوليد العملاء المحتملين والإجراءات.",
          features: [
            "تصميم صفحة واحدة متجاوب",
            "نموذج التقاط العملاء المحتملين",
            "تحسين الدعوة للإجراء",
            "سرعة تحميل عالية",
            "نهج يركز على الجوال أولاً",
            "جاهز لاختبار A/B",
            "1 جولة من المراجعات",
          ],
        },
        backend: {
          title: "تطوير الخلفية والأمن السيبراني",
          description: "بنية خادم قوية وتأمين متقدم لتطبيقات ويب عالية الأداء ومحمية بالكامل.",
          features: [
            "تطوير واجهات API آمنة وقابلة للتوسع",
            "تطوير Full Stack متكامل",
            "دمج قواعد البيانات (SQL / NoSQL / Supabase)",
            "أنظمة المصادقة وإدارة الصلاحيات",
            "إنشاء لوحات تحكم إدارية وإدارة متقدمة للصلاحيات",
            "الحماية من هجمات DDoS وحقن الأكواد",
            "تشفير البيانات وتعزيز الأمان",
            "تحسين أداء الخادم",
            "مراقبة ومنع الاختراقات",
          ],
        },
        applications: {
          title: "تطبيقات وبرمجيات مخصصة",
          description: "تصميم وتطوير تطبيقات عالية الأداء لأجهزة الكمبيوتر والهواتف المحمولة حسب احتياجات عملك.",
          features: [
            "تطوير تطبيقات سطح المكتب (Windows / macOS)",
            "إنشاء تطبيقات موبايل (Android / iOS)",
            "برمجيات مخصصة لإدارة الأعمال",
            "إنشاء برامج تثبيت وأنظمة نشر",
            "واجهات استخدام حديثة وسهلة",
            "التكامل مع قواعد البيانات وواجهات API",
            "تأمين التطبيقات",
            "دعم التطوير والتحديث المستمر",
          ],
        },
        portfolio: {
          title: "مواقع الأعمال",
          description: "اعرض عملك وإنجازاتك بشكل احترافي.",
          features: [
            "معرض المشاريع",
            "التصفية حسب الفئات",
            "صندوق إضاءة للصور",
            "تكامل الشهادات",
            "قسم المدونة",
          ],
          price: "ابتداءً من 400 دينار تونسي",
        },
        static: {
          title: "المواقع الثابتة",
          description: "حلول سريعة وفعالة من حيث التكلفة للشركات الصغيرة.",
          features: [
            "سريع جدًا",
            "استضافة آمنة",
            "صيانة سهلة",
            "تكلفة منخفضة",
            "موثوقية عالية",
          ],
          price: "ابتداءً من 300 دينار تونسي",
        },
      },
      cta: {
        title: "هل أنت مستعد للبدء؟",
        subtitle: "لنناقش مشروعك ولننشئ شيئًا مذهلاً معًا",
        button: "اتصل بنا",
      },
    },
    portfolio: {
      hero: {
        badge: "أعمالنا",
        title: "أعمالنا",
        titleHighlight: "",
        subtitle: "استكشف مشاريعنا الأخيرة والعمل الذي قمنا به لعملائنا",
      },
      title: "أعمال",
      titleHighlight: "حديثة",
      subtitle: "قريبًا - نحن نعمل حاليًا على مشاريع مثيرة",
      viewProject: "عرض المشروع",
      projects: {
        creator: {
          category: "موقع معرض أعمال",
          title: "معرض أعمال لمنشئ محتوى",
          description: "معرض أعمال حديث يركز على الأداء مصمم لعرض العلامة التجارية لمنشئ المحتوى وحضوره الاجتماعي وعمله الإبداعي. بني برسوم متحركة سلسة وانتقالات أنيقة وجمالية داكنة مميزة لإبراز القصص والمرئيات.",
          tags: ["معرض أعمال", "هوية بصرية", "رسوم متحركة", "تصميم ويب"],
        },
        ecommerce: {
          category: "تطبيق ويب للتجارة الإلكترونية",
          title: "منصة تجارة إلكترونية للمنتجات الرقمية",
          description: "منصة تجارة إلكترونية كاملة الوظائف لبيع المنتجات الرقمية مثل مفاتيح التنشيط والأدوات الرقمية. تتميز بمسارات دفع آمنة وإدارة المنتجات وتجربة مستخدم سلسة ومحسنة للتحويل.",
          tags: ["تجارة إلكترونية", "منتجات رقمية", "تطبيق ويب", "مدفوعات"],
        },
        ai: {
          category: "منصة ويب مدعومة بالذكاء الاصطناعي",
          title: "Beyrem’s AI",
          description: "موقع ويب ذكي يعمل بالذكاء الاصطناعي يتميز بأتمتة متقدمة ومعالجة اللغات الطبيعية وتكاملات ذكية. مصمم لتقديم تجارب مستخدم مخصصة وتبسيط سير العمل من خلال واجهة نظيفة ومستقبلية.",
          tags: ["ذكاء اصطناعي", "أتمتة", "NLP", "تطبيق ويب"],
        },
        mentalHealth: {
          category: "منصة ويب مفتوحة المصدر",
          title: "منصة مفتوحة المصدر للصحة النفسية (تونس)",
          description: "منصة مفتوحة المصدر مخصصة للصحة النفسية في تونس، مصممة لتوفير وصول شامل للمرافقة النفسية والتوعية وموارد الدعم. يهدف المشروع إلى كسر المحرمات حول الصحة النفسية من خلال واجهة سهلة الاستخدام ومتعددة اللغات ومركزة على الإنسان، مع تعزيز التعاون المجتمعي والأثر الاجتماعي.",
          tags: ["الصحة النفسية", "مفتوح المصدر", "الأثر الاجتماعي", "تونس", "منصة ويب"],
        },
        tenux: {
          category: "منصة تداول عملات رقمية",
          title: "Tunex",
          description: "Tunex هي منصة تداول وتبادل عملات رقمية مصممة لتوفير الوضوح والأمان والأداء. يركز المشروع على واجهة مستخدم حديثة، وتصفح سلس، وتجربة محسنة لإدارة وشراء وبيع الأصول الرقمية، مع بنية متجاوب ورسوم متحركة خفيفة تعزز الثقة وسهولة الوصول.",
          tags: ["منصة تداول", "تبادل العملات الرقمية", "Fintech", "UI/UX", "تطبيق ويب"],
        },
        medivault: {
          category: "منصة صحية",
          title: "Medivault",
          description: "منصة صحية احترافية تجمع بين موقع ويب وتطبيق موبايل لتمكين الأطباء من إدارة المرضى والمواعيد والبيانات الطبية بكفاءة.",
          tags: ["WEB", "MOBILE", "HEALTHCARE", "DASHBOARD"],
        },
        doc: {
          category: "منصة صحية",
          title: "Doc",
          description: "منصة ويب تربط المستخدمين بالأطباء لحجز المواعيد والخدمات الطبية بتجربة سهلة وسلسة.",
          tags: ["WEB", "HEALTHCARE", "BOOKING", "PLATFORM"],
        },
      },
      cta: {
        title: "هل أنت مستعد لإنشاء شيء مذهل؟",
        subtitle: "لنعمل معًا لتحقيق رؤيتك",
        button: "ابدأ مشروعًا",
      },
    },
    contact: {
      hero: {
        badge: "تواصل معنا",
        title: "تواصل",
        titleHighlight: "معنا",
        subtitle: "هل لديك مشروع في ذهنك؟ نود أن نسمع عنه. تواصل معنا ولنناقش كيف يمكننا المساعدة.",
      },
      form: {
        title: "أرسل لنا رسالة",
        name: {
          label: "الاسم",
          placeholder: "اسمك",
        },
        email: {
          label: "البريد الإلكتروني",
          placeholder: "your@email.com",
        },
        subject: {
          label: "الموضوع",
          placeholder: "كيف يمكننا مساعدتك؟",
        },
        message: {
          label: "الرسالة",
          placeholder: "أخبرنا عن مشروعك...",
        },
        submit: "إرسال الرسالة",
      },
      validation: {
        required: "هذا الحقل مطلوب",
        invalidEmail: "يرجى إدخال بريد إلكتروني صالح",
        invalidFormat: "تنسيق غير صالح",
        nameTooShort: "يجب أن يتكون الاسم من حرفين على الأقل",
        messageTooShort: "يجب أن تتكون الرسالة من 10 أحرف على الأقل",
      },
      toast: {
        successTitle: "نجاح!",
        successMessage: "تم إرسال رسالتك بنجاح.",
        errorTitle: "خطأ",
        errorMessage: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        serviceError: "خدمة البريد الإلكتروني غير محملة. يرجى المحاولة لاحقًا.",
      },
      info: {
        title: "معلومات الاتصال",
        emailTitle: "راسلنا",
        emailValue: "webifytn@gmail.com",
        emailSubtitle: "سنرد خلال 24 ساعة",
        locationTitle: "الموقع",
        locationValue: "تونس",
        locationSubtitle: "نعمل مع عملاء حول العالم",
        responseTitle: "وقت الاستجابة",
        responseValue: "خلال 24 ساعة",
        responseSubtitle: "تواصل سريع وموثوق",
      },
      faq: {
        title: "أسئلة شائعة",
        questions: {
          q1: "كم يستغرق المشروع؟ عادة 1-2 أسبوع.",
          a1: "يتم إنجاز معظم المشاريع في غضون 1-2 أسبوع، حسب التعقيد والجدول الزمني لملاحظاتك.",
          q2: "ما الذي يتضمنه السعر؟ كل ما تحتاجه للإطلاق.",
          a2: "يتضمن كل مشروع التصميم والتطوير والتحسين للجوال وأساسيات تحسين محركات البحث والدعم للبدء.",
          q3: "هل تقدمون دعمًا مستمرًا؟ نعم، نحن هنا للمساعدة.",
          a3: "نقدم حزم صيانة ودعم مستمرة للحفاظ على تشغيل موقعك بسلاسة وتحديثه.",
        },
      },
    },
    footer: {
      description: "بناء مواقع ويب نظيفة وفعّالة تساعد الشركات على النجاح على الإنترنت.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة.",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      subtitle: "عذرًا، الصفحة التي تبحث عنها غير موجودة.",
      cta: "العودة إلى الرئيسية",
    },
  },
};

export const useTranslations = (language: Language): Translations => {
  return translations[language];
};


