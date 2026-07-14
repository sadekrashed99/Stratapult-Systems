// Stratapult Web Data

export interface ProblemCard {
  id: string;
  icon: string;
  title: string;
  body: string;
}

export interface OSSystemBar {
  zIndex: number;
  bg: string;
  icon: string;
  text: string;
  textColor: string;
}

export interface OSProduct {
  id: string;
  title: string;
  trade: string;
  icon: string;
  isLive: boolean;
  accentColor?: string;
  iconColor?: string;
  statusBadge: string;
  result?: string;
  sub?: string;
  url?: string;
}

export interface TimelineStep {
  number: string;
  icon: string;
  title: string;
  tag: string;
  body: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  billingNote: string;
  features: string[];
  isFeatured: boolean;
  ctaText: string;
}

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    id: "prob-1",
    icon: "WifiOff",
    title: "Built once, abandoned forever",
    body: "Generic templates from 2019 with no SEO, no strategy, no conversion thinking. A digital brochure collecting dust."
  },
  {
    id: "prob-2",
    icon: "TrendingDown",
    title: "Ad spend disappearing",
    body: "Paying for Google Ads driving traffic to a page that converts at 1–2%. Every click is a dollar wasted."
  },
  {
    id: "prob-3",
    icon: "UserX",
    title: "Losing jobs to competitors",
    body: "While your page loads slowly and confuses visitors, competitors with better systems are booking those exact jobs."
  }
];

export const OS_STACK_BARS: OSSystemBar[] = [
  {
    zIndex: 5,
    bg: "#E8622A", // ember
    icon: "Layers",
    text: "Conversion Copy",
    textColor: "#FFFFFF"
  },
  {
    zIndex: 4,
    bg: "#C0621E",
    icon: "Brain",
    text: "Psychological Design",
    textColor: "#FFFFFF"
  },
  {
    zIndex: 3,
    bg: "#1C1C1A",
    icon: "Inbox",
    text: "Lead Capture System",
    textColor: "#FFFFFF"
  },
  {
    zIndex: 2,
    bg: "#2E2E2C",
    icon: "Settings",
    text: "CRM Automation",
    textColor: "#FFFFFF"
  },
  {
    zIndex: 1,
    bg: "#3D3D3A",
    icon: "BarChart2",
    text: "Performance Analytics",
    textColor: "#FFFFFF"
  }
];

export const OS_LIBRARY_PRODUCTS: OSProduct[] = [
  {
    id: "flux-os",
    title: "FluxOS",
    trade: "Emergency & General Electricians",
    icon: "Zap",
    isLive: true,
    accentColor: "#0D1B2A",
    iconColor: "#FFD600",
    statusBadge: "LIVE",
    result: "14% conversion rate",
    sub: "Melbourne's most advanced electrical lead system.",
    url: "https://flux-os-cyan.vercel.app"
  },
  {
    id: "aqua-os",
    title: "AquaOS",
    trade: "Plumbers",
    icon: "Droplets",
    isLive: false,
    statusBadge: "Q3 2026"
  },
  {
    id: "roof-os",
    title: "RoofOS",
    trade: "Roofers & Restoration",
    icon: "Home",
    isLive: false,
    statusBadge: "Q3 2026"
  },
  {
    id: "thermo-os",
    title: "ThermoOS",
    trade: "HVAC & Air Conditioning",
    icon: "Thermometer",
    isLive: false,
    statusBadge: "Q4 2026"
  },
  {
    id: "build-os",
    title: "BuildOS",
    trade: "Builders & Renovators",
    icon: "Hammer",
    isLive: false,
    statusBadge: "Q4 2026"
  },
  {
    id: "coat-os",
    title: "CoatOS",
    trade: "Painters & Decorators",
    icon: "Brush",
    isLive: false,
    statusBadge: "2027"
  },
  {
    id: "ground-os",
    title: "GroundOS",
    trade: "Landscapers & Gardeners",
    icon: "Leaf",
    isLive: false,
    statusBadge: "2027"
  },
  {
    id: "tile-os",
    title: "TileOS",
    trade: "Tilers & Flooring Specialists",
    icon: "Grid2X2",
    isLive: false,
    statusBadge: "2027"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: "01",
    icon: "Phone",
    title: "Strategy Call",
    tag: "Day 1",
    body: "We audit your market, competitors, and buyer psychology. We identify exactly why your current digital presence isn't converting. Free. No obligation."
  },
  {
    number: "02",
    icon: "Layout",
    title: "System Design",
    tag: "Days 2–3",
    body: "Before we write a single line of code, we map the complete conversion pathway — what your buyer sees, feels, and does at every step from search to booking."
  },
  {
    number: "03",
    icon: "Rocket",
    title: "Build & Launch",
    tag: "Days 4–7",
    body: "Your OS goes live — speed-optimised, mobile-perfect, Google Ads-ready, and connected to your CRM for automatic lead capture and follow-up."
  },
  {
    number: "04",
    icon: "BarChart2",
    title: "Perform & Optimise",
    tag: "Ongoing",
    body: "We track conversion data, identify drop-off points, and continuously improve. Your OS gets more effective — and more profitable — every month."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "OS Setup",
    price: "$2,000 – $3,500",
    billingNote: "One-time investment",
    features: [
      "Complete OS build (copy + design + development)",
      "CRM integration & lead automation",
      "Google Ads-ready landing architecture",
      "Mobile-optimised & speed-tuned",
      "30-day post-launch support"
    ],
    isFeatured: false,
    ctaText: "Get Started"
  },
  {
    title: "OS + Performance",
    price: "$60–$120",
    billingNote: "Per qualified booked job",
    features: [
      "Everything in OS Setup",
      "Performance fee per real booked job (not clicks)",
      "You control your own ad spend",
      "Monthly optimisation & reporting",
      "Scales with your business growth"
    ],
    isFeatured: true,
    ctaText: "Book Strategy Call"
  }
];
