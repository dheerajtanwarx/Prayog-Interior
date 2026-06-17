export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional caption shown in the lightbox / gallery */
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  /** e.g. "Luxury Retail", "Residential" */
  category: string;
  /** "Academic Project" | "Freelance Project" etc. */
  projectType: string;
  location: string;
  /** Short one-liner used on cards */
  excerpt: string;
  /** Full descriptive paragraphs for the detail page */
  description: string[];
  coverImage: GalleryImage;
  gallery: GalleryImage[];
  /** Key facts shown in the project overview block */
  services: string[];
  materials?: string[];
  completionDate?: string;
  client?: string;
  area?: string;
  /** Tools / software used (from the source portfolio) */
  tools?: string[];
}

export interface Service {
  title: string;
  description: string;
  /** lucide-react icon name resolved in the component */
  icon: string;
}
