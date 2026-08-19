export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  features: string[];
  duration: string;
  idealFor: string;
  image: string;
  category: 'bridal' | 'occasion' | 'styling';
}

export interface AcademyCourse {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  overview: string;
  curriculum: string[];
  keyHighlights: string[];
  level: string;
  certification: string;
  image: string;
  practicalTraining: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'engagement' | 'reception' | 'party' | 'hair' | 'student';
  categoryLabel: string;
  image: string;
  secondaryImage?: string;
  clientType: string;
  lookDetails: string;
  techniques: string[];
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  category: 'bride' | 'student' | 'client';
  location?: string;
  content: string;
  occasionOrCourse: string;
  dateTag: string;
  avatar?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes?: string;
  type: 'reel' | 'post';
  tag: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  email: string;
  serviceOrCourse: string;
  category: 'Bridal Makeup' | 'Engagement Makeup' | 'Reception Makeup' | 'Party Makeup' | 'Hair Styling' | 'Professional Makeup Course' | 'Advanced Artistry' | 'Bridal Mastery' | 'Personal Makeup Training' | 'General Inquiry';
  preferredDate: string;
  eventLocation?: string;
  message: string;
}
