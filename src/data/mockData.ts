import { ServiceItem, AcademyCourse, PortfolioItem, TestimonialItem, InstagramPost } from '../types';

export const BRAND_INFO = {
  name: 'Sanya & Shifa Makeup Academy',
  shortName: 'Sanya & Shifa ♡',
  tagline: 'Pretty Looks. Pretty Confidence. Pretty You.',
  subtitle: 'Professional Makeup Artistry • Bridal Glam • Makeup Education',
  phone: '9990677769',
  phoneFormatted: '+91 99906 77769',
  phoneTel: 'tel:9990677769',
  whatsappUrl: 'https://wa.me/919990677769?text=Hey%20Sanya%20%26%20Shifa%20Makeup%20Academy!%20%E2%99%A1%20I%20want%20to%20book%20my%20glam%20look%20%2F%20enquire%20about%20academy%20courses.',
  whatsappCustom: (msg: string) => `https://wa.me/919990677769?text=${encodeURIComponent(msg)}`,
  instagramUrl: 'https://www.instagram.com/sanyashifa?igsh=eHV6MzFqZWIydGxr',
  instagramHandle: '@sanyashifa',
  googleMapsUrl: 'https://maps.app.goo.gl/FUAkvJifzMcjKevu7',
  locationHint: 'Delhi NCR Studio & Academy',
  hours: 'Mon - Sun: 10:00 AM - 7:30 PM (By Prior Appointment)',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal-glam',
    title: 'BRIDAL GLAM',
    tagline: 'For the bride who wants to feel unforgettable ♡',
    description: 'Timeless, radiant, and tear-proof bridal artistry tailored to your outfit, jewelry, and personal aesthetic.',
    fullDetails: 'Your biggest beauty moment deserves pure perfection. We blend high-definition skin prep, customized 3D lash styling, luminous contouring, and transfer-proof sealing to create a bridal look that leaves everyone spellbound.',
    features: [
      'Personalized Luxury Skin Prep & HD / Airbrush Base',
      'Sculpted Brow Architecture & 3D Flutter Lashes',
      '14+ Hours Cry-Proof & Sweat-Proof Formulation',
      'Complete Royal Dupatta Draping & Jewelry Assembly'
    ],
    duration: '3.5 - 4 Hours',
    idealFor: 'Main Wedding Ceremony / Pheras / Nikah / Anand Karaj',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop',
    category: 'bridal'
  },
  {
    id: 'engagement-glam',
    title: 'ENGAGEMENT GLAM',
    tagline: 'Soft, dreamy and camera-ready ✦',
    description: 'Dreamy soft-glam perfection crafted for ring ceremonies, cocktails, and sangeet celebrations.',
    fullDetails: 'A glowing, romantic beauty look featuring soft rosy or champagne lids, radiant glass skin, and pillowy nude-pink lips designed to catch every light and flash effortlessly.',
    features: [
      'De-glam to Soft Glam Customizable Spectrum',
      'Luminous Glass-Skin Complexion Sealing',
      'Custom Winged Lash Placement & Tinted Lips',
      'Modern Hollywood Waves or Textured Updo'
    ],
    duration: '2.5 - 3 Hours',
    idealFor: 'Ring Ceremony, Sagan, Cocktail, Sangeet Night',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    category: 'bridal'
  },
  {
    id: 'reception-glam',
    title: 'RECEPTION GLAM',
    tagline: 'Full glam for your main-character moment ♡',
    description: 'High-octane glamour with dramatic eyes, sculpted cheekbones, and showstopping evening allure.',
    fullDetails: 'Designed for the grand stage and flashing cameras. Rich metallic pigments, smokey gradient lids, sculpted high-beam strobe highlights, and velvety long-wear lips.',
    features: [
      'Sculpted Contour & High-Beam Strobing',
      'Dramatic Halo Smokey Eye Artistry',
      'Flash-Proof & 4K Camera High-Definition Base',
      'Designer Hair Styling with Crown Volume'
    ],
    duration: '3 Hours',
    idealFor: 'Grand Wedding Reception & Gala Evenings',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
    category: 'bridal'
  },
  {
    id: 'party-glam',
    title: 'PARTY GLAM',
    tagline: 'Because every celebration deserves sparkle ✧',
    description: 'Customized beauty looks for bridesmaids, birthday girls, festive events, and editorial shoots.',
    fullDetails: 'Effortless, fresh, and trendy. From clean-girl glow to bold berry lips and shimmering lids, customized to harmonize with your dress and event vibe.',
    features: [
      'Tailored Color Matching to Outfit Tones',
      'Weightless HD Foundation & Dewy Finish',
      'Individual Lash Accents for Flirty Eyes',
      'Quick-Set Beach Waves or Sleek High Pony'
    ],
    duration: '2 Hours',
    idealFor: 'Bridesmaids, Birthdays, Shoots, Family Functions',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    category: 'occasion'
  },
  {
    id: 'hair-draping',
    title: 'HAIR & DRAPING',
    tagline: 'Complete the look from head to toe ♡',
    description: 'Architectural bridal hair artistry, fresh floral styling, and artisanal saree & dupatta pleating.',
    fullDetails: 'Never worry about loose pins or heavy veils. We create secure, Pinterest-worthy hairstyles with fresh baby breath or roses and sculpt pleats with ergonomic precision.',
    features: [
      'Textured Floral Buns, Hollywood Waves & Braids',
      'Double Dupatta Weight Distribution & Head Setting',
      'Precision Saree & Lehenga Pleating',
      'All-Weather Humidity-Proof Holding Spray'
    ],
    duration: '1.5 - 2 Hours',
    idealFor: 'All Occasions, Pre-Wedding Shoots, Bridal Styling',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
    category: 'styling'
  }
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'pro-makeup',
    title: 'PROFESSIONAL MAKEUP',
    badge: '♡ MOST POPULAR BATCH',
    tagline: 'Build your foundation and learn professional techniques.',
    description: 'Master pro makeup from absolute zero to certified commercial makeup artist with intensive live model practice.',
    overview: 'From skin prep science and color theory to cut-crease eye looks and luxury base blending, this hands-on course gives you the real-world skills to launch your beauty career.',
    curriculum: [
      'Skin Prep Science & Undertone Color Correction',
      'Flawless HD Base Application & Micro-Blending',
      'Sculpted Contour, Baking & Soft-Focus Strobing',
      'Classic, Cut-Crease & Smokey Eye Mastery',
      '3D Lash Placement & Symmetrical Lip Shaping',
      'Vanity Kit Architecture & Hygiene Standards'
    ],
    keyHighlights: [
      'Intensive Hands-On Studio Practice',
      'Live Model Real-Time Training',
      'Portfolio & Social Media Reel Mentorship',
      'Certificate of Professional Completion'
    ],
    level: 'Beginner to Intermediate',
    certification: 'Certified Professional Makeup Artist',
    practicalTraining: 'Daily live model drills with personalized critique and feedback from Sanya & Shifa.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'advanced-artistry',
    title: 'ADVANCED ARTISTRY',
    badge: '✦ MASTERCLASS',
    tagline: 'Level up your skills and refine your artistry.',
    description: 'Step into editorial, high-fashion, and airbrush glam designed for working makeup artists ready to attract high-ticket clients.',
    overview: 'Learn speed-glam, editorial glass skin formulas, creative graphic liner, studio lighting adaptation, and high-converting client consultation techniques.',
    curriculum: [
      'HD Airbrush Makeup Operation & Maintenance',
      'Editorial Glass Skin & Wet-Look Finishes',
      'Creative Graphic Liners & Color Injections',
      'Challenging Skin & Mature Complexion Artistry',
      'Content Creation, Lighting & Viral Video Reels',
      'Client Psychology & High-Ticket Booking Strategy'
    ],
    keyHighlights: [
      'Advanced Airbrush Mastery',
      'Professional Styled Fashion Shoot',
      'Personal Branding & Pricing Blueprint',
      'Masterclass Certification of Artistry'
    ],
    level: 'Intermediate to Advanced',
    certification: 'Masterclass Certificate in Advanced Artistry',
    practicalTraining: 'Fast-paced scenario drills, editorial photoshoots with professional lighting setup.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'bridal-mastery',
    title: 'BRIDAL MASTERY',
    badge: '♡ BRIDAL SPECIALIST',
    tagline: 'Learn the techniques behind beautiful bridal transformations.',
    description: 'The definitive masterclass for traditional North Indian, pastel destination, and reception bridal aesthetics.',
    overview: 'Learn the exact secrets of creating long-lasting, cry-proof bridal makeup with high-end luxury products, plus dupatta veiling and jewelry styling.',
    curriculum: [
      'Royal Heritage Traditional & Modern Pastel Bridal Looks',
      'Waterproof, Sweat-Proof & Cry-Resistant Base Sealing',
      'Glitter Suspension & Heavy Bridal Eye Precision',
      'Double Dupatta Draping & Matha Patti Fixing Secrets',
      'Bridal Emergency Fixes & On-Site Protocol',
      'Bridal Client Consultation & Trial Booking Systems'
    ],
    keyHighlights: [
      'Full Bridal Looks on Live Models',
      'Dupatta & Saree Draping Masterclass',
      'High-End Bridal Portfolio Shoot with Jewelry',
      'Bridal Specialist Certification'
    ],
    level: 'All Levels (Bridal Focus)',
    certification: 'Certified Bridal Beauty Specialist',
    practicalTraining: 'Complete timed bridal mock sessions including full makeup, hair, and jewelry draping.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'personal-makeup',
    title: 'PERSONAL MAKEUP',
    badge: '✧ YOUR GLOW ERA',
    tagline: 'Learn professional techniques for yourself.',
    description: 'A fun, 1-on-1 or small group self-grooming module for everyday glam, office chic, and party looks.',
    overview: 'Audit your vanity bag, learn which shades flatter your undertone, and master a 15-minute everyday glow plus a sultry weekend party look.',
    curriculum: [
      'Understanding Your Skin Type & Daily Skincare Prep',
      'Personal Vanity Bag Audit — What Works for You',
      '15-Minute Flawless Everyday Glow Base',
      'Day-to-Night Glam Conversion with Smokey Accents',
      'Falsies Application on Yourself & Perfect Wings',
      'Easy DIY Beach Waves & Quick Hair Styling'
    ],
    keyHighlights: [
      'Personalized 1-on-1 Attention',
      'Customized Product Shopping List',
      'Step-by-Step Hands-On Self Practice',
      'Certificate of Personal Beauty Mastery'
    ],
    level: 'Beginners & Beauty Lovers',
    certification: 'Certificate of Personal Beauty Mastery',
    practicalTraining: 'Step-by-step mirror practice under the direct live guidance of Sanya & Shifa.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p-1',
    title: 'Royal Rose Bridal Glam',
    category: 'bridal',
    categoryLabel: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Bridal Ceremony',
    lookDetails: 'Warm rose-gold shimmer lids, velvet berry lip, and seamless porcelain HD base matching crimson lehenga.',
    techniques: ['HD Micro-Blending', 'Velvet Lip Sealing', 'Double Dupatta Setting'],
    isFeatured: true
  },
  {
    id: 'p-2',
    title: 'Luminous Pastel Dream Bride',
    category: 'bridal',
    categoryLabel: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Sundowner Wedding',
    lookDetails: 'Dewy peach glow with champagne shimmer eyes, feathered brows, and soft nude-pink gloss for daylight vows.',
    techniques: ['Glass Skin Finish', 'Feather Brow Architecture', 'Sheer Gloss Precision'],
    isFeatured: true
  },
  {
    id: 'p-3',
    title: 'Soft Glam Engagement Mood',
    category: 'engagement',
    categoryLabel: 'GLAM',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Ring Ceremony',
    lookDetails: 'Bronze soft-smokey eyes paired with sculpted cheekbones and effortless open Hollywood waves.',
    techniques: ['Bronze Smoky Eye', 'Cheek Sculpting', 'Wave Texturizing'],
    isFeatured: true
  },
  {
    id: 'p-4',
    title: 'Gala Night High-Impact Reception',
    category: 'reception',
    categoryLabel: 'GLAM',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Grand Reception',
    lookDetails: 'Smoldering charcoal halo eyes, high-beam liquid strobing, and sculpted contour for 4K video resilience.',
    techniques: ['Flash-Proof Base', 'Halo Eye Smokiness', 'High-Beam Strobing']
  },
  {
    id: 'p-5',
    title: 'Textured Floral Bridal Updo',
    category: 'hair',
    categoryLabel: 'HAIR',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Bridal Hair Architecture',
    lookDetails: 'Layered textured bun infused with fresh baby breath florals, pearl pins, and crown volume lift.',
    techniques: ['Crown Teasing', 'Floral Anchor Technique', 'All-Weather Spray Hold']
  },
  {
    id: 'p-6',
    title: 'Student Graduation Transformation',
    category: 'student',
    categoryLabel: 'STUDENTS',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Academy Live Model Project',
    lookDetails: 'Created independently by a Professional Makeup Course student during the final live model graduation assessment.',
    techniques: ['Live Model Execution', 'Independent Color Matching', 'Mentor Evaluated']
  },
  {
    id: 'p-7',
    title: 'Sister-of-the-Bride Chic',
    category: 'party',
    categoryLabel: 'GLAM',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Sangeet Party',
    lookDetails: 'Clean winged liner, hydrated radiant base with soft berry blush and natural wispy flutter lashes.',
    techniques: ['Hydra-Glow Prep', 'Custom Winged Liner', 'Wispy Lash Styling']
  },
  {
    id: 'p-8',
    title: 'Student Bridal Portfolio Showcase',
    category: 'student',
    categoryLabel: 'STUDENTS',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    clientType: 'Graduation Shoot',
    lookDetails: 'Stunning traditional bridal look crafted by an Academy student under direct mentor supervision.',
    techniques: ['Traditional Palette', 'Dupatta Placement', 'Professional Portfolio Shoot']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Aanya Malhotra ♡',
    role: 'Bride Era',
    category: 'bride',
    location: 'Delhi NCR',
    occasionOrCourse: 'Bridal & Reception Glam',
    dateTag: 'Wedding Season',
    content: '“OMG Sanya and Shifa made me feel like the most gorgeous bride ever!! My makeup looked so soft yet snatched in real life and the 4K photos came out insane. The makeup did not move even after 12 hours of dancing and crying. Best beauty decision ever!”'
  },
  {
    id: 't-2',
    name: 'Pooja Verma ✦',
    role: 'Academy Graduate',
    category: 'student',
    location: 'Pro Makeup Artist',
    occasionOrCourse: 'Professional Makeup Course',
    dateTag: 'Batch Graduate',
    content: '“Joining Sanya & Shifa Academy literally changed my life! The hands-on practice and 1-on-1 feedback gave me so much confidence. I booked 4 bridal bookings in my first month itself. Forever grateful to my beauty mentors!”'
  },
  {
    id: 't-3',
    name: 'Rhea Sengupta ♡',
    role: 'Engagement Bride',
    category: 'bride',
    location: 'Gurugram',
    occasionOrCourse: 'Engagement Soft Glam',
    dateTag: 'Ring Ceremony',
    content: '“I was super scared of looking cakey, but Sanya & Shifa gave me the dreamiest glass-skin glow! Everyone at the party kept asking who did my makeup. The hair waves and draping were 10/10 perfection!”'
  },
  {
    id: 't-4',
    name: 'Mehak Sharma ✦',
    role: 'Bridal Mastery Student',
    category: 'student',
    location: 'Freelance Beauty Artist',
    occasionOrCourse: 'Bridal Mastery Program',
    dateTag: 'Masterclass Student',
    content: '“The attention to detail in their bridal masterclass is next level. They teach skin science, speed techniques, dupatta draping, and how to create viral Instagram reels. Worth every single rupee!”'
  },
  {
    id: 't-5',
    name: 'Simran Kaur ♡',
    role: 'Sister of the Bride',
    category: 'client',
    location: 'Delhi',
    occasionOrCourse: 'Family Occasion Glam',
    dateTag: 'Cocktail & Wedding',
    content: '“Total main character energy! My makeup felt weightless, the glow was so natural, and the team was so sweet and punctual. Booking them for all future family events for sure!”'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop',
    caption: 'Pure royal bridal magic for our gorgeous bride ♡ Signature HD glow.',
    tag: '#BrideEra #SanyaAndShifa',
    type: 'post'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    caption: 'Soft glam engagement glow that hits different under ambient lights ✨',
    tag: '#SoftGlam #GlassSkin',
    type: 'reel'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    caption: 'Academy girlies in action! Hands-on masterclass drills today 💄✦',
    tag: '#MakeupAcademy #FuturePros',
    type: 'post'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    caption: 'Architectural bridal hair with fresh baby breath & pearls 🌸♡',
    tag: '#BridalHairGoals #Draping',
    type: 'post'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    caption: 'Pastel dream bride. Skin that breathes, eyes that hypnotize ✦',
    tag: '#CoutureBride #WeddingGlam',
    type: 'reel'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    caption: 'Student glow-up spotlight! Celebrating our newly graduated batch 🎓♡',
    tag: '#AcademyGraduates #BossBabe',
    type: 'post'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: '✦',
    title: "YOU'RE THE VIBE",
    tagline: 'Personalized to your unique aesthetic',
    description: 'No one-size-fits-all routines. Every look is customized around your bone structure, outfit colors, and personal aesthetic.'
  },
  {
    icon: '♡',
    title: 'NO COOKIE-CUTTER GLAM',
    tagline: 'Your features. Your personality. Your look.',
    description: 'We enhance what makes you uniquely beautiful with feather-light HD blending and skin-matching science.'
  },
  {
    icon: '✦',
    title: 'LEARN BY DOING',
    tagline: 'Hands-on practical learning for future pros',
    description: 'Real live model drills, personal kit auditing, vanity masterclasses, and step-by-step mentor guidance.'
  },
  {
    icon: '♡',
    title: 'CONFIDENCE INCLUDED',
    tagline: 'Because you deserve to feel unstoppable',
    description: 'From your first consultation to your final dupatta pin, we make sure you feel pampered, radiant, and empowered.'
  }
];

export const BRIDAL_PILLARS = [
  {
    title: 'FLAWLESS FINISH',
    icon: '✦',
    description: 'Micro-blended high-definition luxury formulations that feel weightless and look smooth from every angle.'
  },
  {
    title: 'CAMERA READY',
    icon: '♡',
    description: 'Engineered to look ethereal in natural daylight, dim venue lighting, and 4K flash video shoots.'
  },
  {
    title: 'PERSONALIZED GLAM',
    icon: '✦',
    description: 'Custom-designed lash maps, lip shades, and base tones that complement your jewelry and attire.'
  },
  {
    title: 'LONG-LASTING',
    icon: '♡',
    description: '14+ hours of cry-proof, sweat-proof, and humidity-resistant locking so you can dance without worry.'
  }
];
