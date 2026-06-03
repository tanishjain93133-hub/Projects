export interface ProjectSpecs {
  location: string;
  area: string;
  year: string;
  type: string;
  architect: string;
}

export interface ProjectMedia {
  day: string;
  evening: string;
}

export interface Project {
  id: string;
  num: string;
  name: string;
  location: string;
  tagline: string;
  description: string;
  conceptStatement: string;
  materials: string[];
  specs: ProjectSpecs;
  bannerImage: ProjectMedia;
  interiorImages: ProjectMedia[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}
