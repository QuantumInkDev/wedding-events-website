export interface PageContent {
  title: string;
  subtitle?: string;
  content: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  category: 'wedding' | 'corporate' | 'social' | 'other';
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  featured?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}