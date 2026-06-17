import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "velora-jewels",
    title: "Velora Jewels",
    category: "Luxury Retail",
    projectType: "Academic Project",
    location: "Jaipur, Rajasthan",
    excerpt:
      "A refined luxury jewellery showroom built around elegance, symmetry, and curated display.",
    description: [
      "Velora Jewels is a refined luxury retail interior designed to elevate the jewellery shopping experience through elegance, symmetry, and sophisticated material selections.",
      "The scheme pairs premium finishes with warm lighting and carefully curated display systems to create an inviting atmosphere that highlights craftsmanship and exclusivity.",
      "Spatial planning follows a clear zoning strategy — public spaces near the entrance, semi-private billing and making areas toward the side and rear, and private support zones placed deeper inside for privacy and smooth operations.",
    ],
    coverImage: {
      src: "/projects/velora/cover.webp",
      alt: "Velora Jewels luxury retail showroom with marble floors and warm display lighting",
    },
    gallery: [
      {
        src: "/projects/velora/hall.webp",
        alt: "Main retail hall of Velora Jewels with central display island",
        caption: "Central display island anchoring the retail hall",
      },
      {
        src: "/projects/velora/reception.webp",
        alt: "Reception and billing counter with walnut and brass detailing",
        caption: "Reception & billing counter",
      },
      {
        src: "/projects/velora/staff-lounge.webp",
        alt: "Staff lounge with full-height wardrobes and a green accent sofa",
        caption: "Staff lounge with full-height storage",
      },
      {
        src: "/projects/velora/isometric.webp",
        alt: "Isometric cutaway view of the Velora Jewels store layout",
        caption: "Isometric view of the store layout",
      },
      {
        src: "/projects/velora/moodboard.webp",
        alt: "Velora Jewels mood board with material, colour and furniture palette",
        caption: "Material & mood board",
      },
    ],
    services: [
      "Retail Space Planning",
      "Display System Design",
      "Lighting Design",
      "Material Selection",
      "3D Visualization",
    ],
    materials: [
      "Walnut Wood",
      "Antique Brass / Gold",
      "Beige Leather Upholstery",
      "Ribbed Paneling",
      "Marble Flooring",
    ],
    completionDate: "2026",
    area: "Retail Showroom",
    tools: ["AutoCAD", "SketchUp", "Enscape", "Photoshop"],
  },
  {
    id: 2,
    slug: "urban-rustic-dining",
    title: "Urban Rustic Dining",
    category: "Hospitality",
    projectType: "Academic Project",
    location: "Jaipur, Rajasthan",
    excerpt:
      "A warm, handcrafted restaurant interior rooted in natural materials and rustic character.",
    description: [
      "Urban Rustic Dining is a warm and inviting restaurant interior designed to enhance the dining experience through natural materials, handcrafted details, and rustic aesthetics.",
      "Inspired by exposed brick, natural wood, woven rattan, and earthy tones, the palette creates a cozy, welcoming atmosphere that reflects comfort, character, and timeless design.",
      "A functional zoning strategy places dining and seating near the entrance for a welcoming arrival, while the reception, kitchen, and circulation are organised for smooth movement and efficient staff operations.",
    ],
    coverImage: {
      src: "/projects/urban-rustic/cover.webp",
      alt: "Urban Rustic Dining restaurant interior with exposed brick and wooden beams",
    },
    gallery: [
      {
        src: "/projects/urban-rustic/dining.webp",
        alt: "Rustic dining area with arched niches, cane pendant lights and timber furniture",
        caption: "Main dining area with arched niches",
      },
      {
        src: "/projects/urban-rustic/cover.webp",
        alt: "Banquette seating and textured plaster walls in the dining room",
        caption: "Banquette seating & textured walls",
      },
      {
        src: "/projects/urban-rustic/kitchen.webp",
        alt: "Modular kitchen with quartz countertops and integrated appliances",
        caption: "Service kitchen with modular cabinetry",
      },
      {
        src: "/projects/urban-rustic/isometric.webp",
        alt: "Isometric view showing dining, reception and kitchen zoning",
        caption: "Isometric spatial layout",
      },
      {
        src: "/projects/urban-rustic/moodboard.webp",
        alt: "Mood board with exposed brick, rattan and earthy material palette",
        caption: "Warm, natural mood board",
      },
    ],
    services: [
      "Restaurant Space Planning",
      "Concept Development",
      "Furniture & Lighting Design",
      "Material Selection",
      "3D Visualization",
    ],
    materials: [
      "Exposed Brick",
      "Natural Wood",
      "Woven Rattan",
      "Textured Plaster",
      "Terrazzo & Quartz",
    ],
    completionDate: "2026",
    area: "Restaurant & Café",
    tools: ["AutoCAD", "SketchUp", "Enscape", "D5 Render"],
  },
  {
    id: 3,
    slug: "dhaka-house",
    title: "Dhaka House",
    category: "Residential",
    projectType: "Freelance Project",
    location: "Jaipur, Rajasthan",
    excerpt:
      "A contemporary residence with clean lines, textured façade, and balanced proportions.",
    description: [
      "Dinesh Dhaka Residence is a contemporary home that combines modern aesthetics with functional living. Clean architectural lines, textured façade elements, and balanced proportions create a distinctive and elegant visual identity.",
      "The design incorporates textured finishes, spacious balconies, large openings, and a neutral colour palette to enhance natural light, visual appeal, and overall functionality.",
      "The layout evolved from an initial bubble diagram into a refined plan through improved spatial relationships, circulation, and functional zoning — resulting in a harmonious living environment suited to modern family life.",
    ],
    coverImage: {
      src: "/projects/dhaka/cover.webp",
      alt: "Modern Dhaka House façade with white brick and warm timber accents",
    },
    gallery: [
      {
        src: "/projects/dhaka/facade.webp",
        alt: "Front elevation of Dhaka House with double-height entrance",
        caption: "Contemporary street façade",
      },
      {
        src: "/projects/dhaka/elevation.webp",
        alt: "Technical front elevation drawing with material annotations",
        caption: "Annotated front elevation",
      },
      {
        src: "/projects/dhaka/elevation-2.webp",
        alt: "Secondary elevation drawing of the residence",
        caption: "Side elevation study",
      },
    ],
    services: [
      "Façade Design",
      "Space Planning",
      "Functional Zoning",
      "Technical Drawings",
      "3D Visualization",
    ],
    materials: [
      "Textured Paint",
      "Granite Finish",
      "Wooden Doors",
      "Grit Finish",
      "Glass Railing",
    ],
    completionDate: "2026",
    client: "Dinesh Dhaka",
    area: "Independent Residence",
    tools: ["AutoCAD", "SketchUp", "Enscape", "V-Ray"],
  },
  {
    id: 4,
    slug: "khichar-villa",
    title: "Khichar Villa",
    category: "Residential",
    projectType: "Freelance Project",
    location: "Jaipur, Rajasthan",
    excerpt:
      "A contemporary villa defined by clean lines, elegant materials, and balanced proportions.",
    description: [
      "Khichar Villa reflects a contemporary architectural style defined by clean lines, elegant materials, and balanced proportions. The façade combines modern design elements with subtle decorative details to create a distinctive visual character.",
      "The residence is designed to provide comfortable and functional living spaces, enhanced by natural light, open balconies, and a strong connection between indoor and outdoor environments.",
      "Detailed services drawings — including a fully resolved ground-floor electrical plan — ensure the design translates precisely into a buildable, well-serviced home.",
    ],
    coverImage: {
      src: "/projects/khichar/cover.webp",
      alt: "Khichar Villa façade with stone cladding, jali screens and rooftop greenery",
    },
    gallery: [
      {
        src: "/projects/khichar/facade.webp",
        alt: "Front view of Khichar Villa with twin entrances and palm landscaping",
        caption: "Symmetrical villa façade",
      },
      {
        src: "/projects/khichar/plan.webp",
        alt: "Ground floor electrical and services plan for Khichar Villa",
        caption: "Ground-floor services plan",
      },
    ],
    services: [
      "Architectural Façade Design",
      "Space Planning",
      "Electrical & Services Layout",
      "Technical Drawings",
      "3D Visualization",
    ],
    materials: [
      "Stone Cladding",
      "Exposed Concrete",
      "Timber Accents",
      "Decorative Jali Screens",
      "Glass Railing",
    ],
    completionDate: "2026",
    client: "Khichar Family",
    area: "Two-Storey Villa",
    tools: ["AutoCAD", "SketchUp", "V-Ray", "D5 Render"],
  },
  {
    id: 5,
    slug: "giriraj-house",
    title: "Giriraj House",
    category: "Residential",
    projectType: "Freelance Project",
    location: "Jaipur, Rajasthan",
    excerpt:
      "A 1390 sq.ft. residence blending warm wood, soft neutrals, and elegant gold accents.",
    description: [
      "Giriraj House is a contemporary luxury residence that combines warm wood textures, soft neutral tones, and elegant gold accents to create a luxurious yet comfortable living environment with timeless appeal.",
      "The concept focuses on modern elegance through clean lines, ambient lighting, and carefully curated materials — every element contributing to a welcoming and aesthetically pleasing atmosphere.",
      "Across the living, dining, and bedroom spaces, fluted wood panels, cove lighting, and marble accents are layered to deliver a cohesive, sophisticated interior tailored to family life.",
    ],
    coverImage: {
      src: "/projects/giriraj/cover.webp",
      alt: "Giriraj House living room with fluted wood panels and gold-accent lighting",
    },
    gallery: [
      {
        src: "/projects/giriraj/living.webp",
        alt: "Elegant living room with sectional sofa, fluted panels and crystal ceiling light",
        caption: "Living room with feature wall",
      },
      {
        src: "/projects/giriraj/living-tv.webp",
        alt: "Living and dining zone with floating TV unit and integrated bar",
        caption: "Living & dining with floating TV unit",
      },
      {
        src: "/projects/giriraj/living-wide.webp",
        alt: "Wide view of the open-plan living and dining space",
        caption: "Open-plan living & dining",
      },
      {
        src: "/projects/giriraj/kids-room.webp",
        alt: "Soft-toned kids bedroom with tropical mural headboard and curved storage",
        caption: "Kids bedroom with mural headboard",
      },
      {
        src: "/projects/giriraj/study-room.webp",
        alt: "Bedroom with built-in study desk, backlit shelving and warm lighting",
        caption: "Bedroom with built-in study",
      },
      {
        src: "/projects/giriraj/moodboard.webp",
        alt: "Contemporary luxury mood board with wood, marble and gold material palette",
        caption: "Contemporary luxury mood board",
      },
    ],
    services: [
      "Residential Interior Design",
      "Living & Dining Design",
      "Bedroom Design",
      "Lighting & False Ceiling",
      "Custom Furniture",
    ],
    materials: [
      "Fluted Wood Panels",
      "Marble Accents",
      "Champagne Gold Detailing",
      "Fabric Upholstery",
      "Glossy Vitrified Flooring",
    ],
    completionDate: "2025",
    client: "Giriraj Family",
    area: "1390 sq.ft.",
    tools: ["AutoCAD", "SketchUp", "Enscape", "V-Ray", "Photoshop"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
