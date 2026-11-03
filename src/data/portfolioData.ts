export interface ServiceItem {
  id: string;
  title: string;
  category: 'graphic-design' | 'video-editing';
  description: string;
  deliverables: string[];
  icon: string;
}

export interface SoftwareItem {
  id: string;
  name: string;
  badge: string;
  category: 'Raster & Retouching' | 'Vector & Identity' | 'Vector & Print' | 'Timeline & Video' | 'VFX & Motion' | 'Rapid Production';
  description: string;
  features: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Muhammad Bilal',
    role: 'Graphic Designer & Video Editor',
    experience: '6 Years of Experience',
    experienceYears: 6,
    location: 'Karachi, Pakistan',
    email: 'chabalpower123@gmail.com',
    headline: 'Creativity Beyond Boundaries.',
    description: 'I transform ideas into powerful visual experiences through professional graphic design and video editing.',
    extendedBio: 'Based in Karachi, Pakistan, Muhammad Bilal is a multidisciplinary visual creator with six years of dedicated experience across graphic design and cinematic video editing. Bridging the gap between static brand identity and motion-driven video narratives, Bilal crafts high-impact visuals engineered for clarity, elegance, and audience engagement.',
    philosophy: 'Great design is not merely decoration—it is structural visual communication. Whether framing a print brochure with geometric precision or cutting a promotional video with rhythmic perfection, every pixel, frame, and cut serves an intentional purpose.',
  },

  graphicDesignServices: [
    {
      id: 'wedding-cards',
      title: 'Wedding Cards',
      category: 'graphic-design',
      description: 'Bespoke luxury wedding stationery, royal invitations, and intricate cultural typographies tailored for memorable milestones.',
      deliverables: ['Custom Typography', 'Print-Ready PDF/X', 'Foil & Emboss Guidelines', 'Digital Invite Versions'],
      icon: 'HeartHandshake',
    },
    {
      id: 'logo-design',
      title: 'Logo Design',
      category: 'graphic-design',
      description: 'Enduring brand marks, timeless iconography, and cohesive visual identities built with mathematical balance.',
      deliverables: ['Vector Formats (SVG, AI, EPS)', 'Monogram & Wordmark', 'Brand Guidelines Sheet', 'Dark & Light Variants'],
      icon: 'Compass',
    },
    {
      id: 'menu-design',
      title: 'Menu Design',
      category: 'graphic-design',
      description: 'Sophisticated hospitality and restaurant menus structured for appetite appeal, logical readability, and brand harmony.',
      deliverables: ['Multi-Page Layouts', 'Single Board Layouts', 'CMYK Print Specs', 'Digital QR Menus'],
      icon: 'Utensils',
    },
    {
      id: 'flyers-posters',
      title: 'Flyers & Posters',
      category: 'graphic-design',
      description: 'Eye-catching promotional posters and marketing flyers commanding attention across physical spaces and digital feeds.',
      deliverables: ['A-Series & Custom Sizes', 'High-DPI Artwork', 'Social Media Resizes', 'Bleed & Margin Ready'],
      icon: 'Layers',
    },
    {
      id: 'flex-banners',
      title: 'Flex & Banners',
      category: 'graphic-design',
      description: 'Large-format billboard flexes, rollup banners, storefront fascias, and backdrop banners engineered for long-distance legibility.',
      deliverables: ['Ultra-High Res Output', 'TIFF & Large Vector PDF', 'Grommet & Bleed Marks', 'Outdoor Print Prep'],
      icon: 'Maximize',
    },
    {
      id: 'business-cards',
      title: 'Business Cards',
      category: 'graphic-design',
      description: 'Tactile corporate cards and executive stationery that project confidence, prestige, and executive polish in every handshake.',
      deliverables: ['Standard & Custom Die-Cuts', 'Spot UV & Matte Specs', 'Double-Sided Precision', 'Vector Print Masters'],
      icon: 'CreditCard',
    },
    {
      id: 'social-media-designs',
      title: 'Social Media Designs',
      category: 'graphic-design',
      description: 'Unified social media posts, carousel sequences, banners, and advertising creative built to drive viral engagement.',
      deliverables: ['Instagram/FB Feed Grids', 'Story & Reel Covers', 'Campaign Ad Sets', 'Source Templates'],
      icon: 'LayoutGrid',
    },
    {
      id: 'stage-event-designs',
      title: 'Stage & Event Designs',
      category: 'graphic-design',
      description: 'Scale-accurate event backdrops, stage fascias, conference branding, and ambient spatial signage.',
      deliverables: ['Stage Facade Blueprints', 'Podium & Wall Graphics', '3D Spatial Visuals', 'Modular Panel Layouts'],
      icon: 'Presentation',
    },
    {
      id: 'brochures-catalogues',
      title: 'Brochures & Catalogues',
      category: 'graphic-design',
      description: 'Multi-page editorial publications, corporate brochures, and product catalogues with immaculate typographic hierarchy.',
      deliverables: ['Bi-Fold & Tri-Fold Layouts', 'Multi-Page Booklets', 'Grid-Aligned Catalogs', 'Interactive Digital PDFs'],
      icon: 'BookOpen',
    },
    {
      id: 'photo-editing',
      title: 'Photo Editing',
      category: 'graphic-design',
      description: 'High-end frequency separation, commercial product retouching, color correction, and seamless visual compositing.',
      deliverables: ['Skin & Fabric Retouching', 'Background Isolation', 'Lighting Harmonization', 'Lossless Masters'],
      icon: 'Wand2',
    },
  ] as ServiceItem[],

  videoEditingServices: [
    {
      id: 'youtube-videos',
      title: 'YouTube Videos',
      category: 'video-editing',
      description: 'High-retention episodic YouTube editing, dynamic jump cuts, pacing optimization, and viewer engagement cues.',
      deliverables: ['Narrative Flow & Pacing', 'Custom Sound Design', 'B-Roll & Graphic Sync', 'High-Res Master Render'],
      icon: 'PlaySquare',
    },
    {
      id: 'instagram-reels',
      title: 'Instagram Reels',
      category: 'video-editing',
      description: 'Snappy vertical shorts, viral hook structuring, trending audio alignment, and punchy on-screen captioning.',
      deliverables: ['9:16 Vertical Ratio', 'Micro-Animations', 'Dynamic Subtitles', 'Sound EFX Hooks'],
      icon: 'Smartphone',
    },
    {
      id: 'promotional-videos',
      title: 'Promotional Videos',
      category: 'video-editing',
      description: 'Commercial promos, product showcases, and brand teaser videos designed to inspire action and elevate brand stature.',
      deliverables: ['Cinematic Storyboarding', 'Audio Mastering & SFX', 'Branded Call-to-Actions', 'Multi-Ratio Deliverables'],
      icon: 'Sparkles',
    },
    {
      id: 'wedding-videos',
      title: 'Wedding Videos',
      category: 'video-editing',
      description: 'Emotional, cinematic wedding highlights, cinematic teasers, and full-length ceremony documentaries with rich storytelling.',
      deliverables: ['Emotional Music Scoring', 'Multi-Camera Sync', 'Film Emulation Grading', 'Teaser & Feature Cuts'],
      icon: 'Film',
    },
    {
      id: 'documentary-videos',
      title: 'Documentary Videos',
      category: 'video-editing',
      description: 'Deep narrative documentaries, interview assemblies, archival footage integration, and thematic storytelling.',
      deliverables: ['A-Roll Dialogue Polish', 'Archival Restoration', 'Atmospheric Foley & SFX', 'Chaptered Output'],
      icon: 'Video',
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      category: 'video-editing',
      description: 'Fluid 2D/3D kinetic animations, logo reveals, explainer diagrams, and graphical overlays that bring brands alive.',
      deliverables: ['Custom Shape Layers', 'Alpha Channel Overlays', 'Vector Kinetic Rigs', 'Seamless Loops'],
      icon: 'Activity',
    },
    {
      id: 'transitions-effects',
      title: 'Transitions & Effects',
      category: 'video-editing',
      description: 'Seamless whip pans, invisible match cuts, camera zooms, light leaks, and custom visual effects.',
      deliverables: ['Speed Ramp Calibration', 'Match-Cut Alignment', 'Bespoke Transition Stems', 'Stylized Shakes & Blurs'],
      icon: 'Repeat',
    },
    {
      id: 'colour-grading',
      title: 'Colour Grading',
      category: 'video-editing',
      description: 'Cinematic color correction, shot matching, LUT authoring, skin-tone isolation, and evocative atmospheric toning.',
      deliverables: ['Rec.709 & Log Conversion', 'Shot-to-Shot Balancing', 'Skin Tone Perfection', 'Stylized Color Moods'],
      icon: 'Sliders',
    },
    {
      id: 'titles-typography',
      title: 'Titles & Typography',
      category: 'video-editing',
      description: 'Kinetic title cards, lower thirds, credit sequences, and modern typography synced seamlessly to musical beats.',
      deliverables: ['Custom Lower Thirds', 'Kinetic Title Cards', 'End Credit Rolls', 'Custom Text Presets'],
      icon: 'Type',
    },
  ] as ServiceItem[],

  software: [
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      badge: 'Ps',
      category: 'Raster & Retouching',
      description: 'High-end raster manipulation, commercial photo retouching, multi-layer compositing, and digital graphic crafting.',
      features: ['Frequency Separation', 'Advanced Layer Masking', 'CMYK & RGB Color Spaces', 'RAW Processing'],
    },
    {
      id: 'illustrator',
      name: 'Adobe Illustrator',
      badge: 'Ai',
      category: 'Vector & Identity',
      description: 'Mathematical precision vector graphics, brand logos, corporate stationery, iconography, and complex typographic lockups.',
      features: ['Bézier Precision Drafting', 'Geometric Construction', 'Pantone Color Management', 'Scalable Vector Output'],
    },
    {
      id: 'coreldraw',
      name: 'CorelDRAW',
      badge: 'Cd',
      category: 'Vector & Print',
      description: 'Industrial-grade vector layout and large-scale prepress drafting for commercial printing, flexes, billboards, and signage.',
      features: ['Large-Format Prepress', 'Flex & Signage Layouts', 'Curve & Node Optimization', 'Direct-to-Print Separation'],
    },
    {
      id: 'premiere-pro',
      name: 'Adobe Premiere Pro',
      badge: 'Pr',
      category: 'Timeline & Video',
      description: 'Industry-standard non-linear editing, multi-track audio synchronization, multi-camera sequences, and high-retention narrative cuts.',
      features: ['Multi-Cam Calibration', 'Lumetri Color Engine', 'Essential Sound Mastering', 'Dynamic Speed Ramping'],
    },
    {
      id: 'after-effects',
      name: 'Adobe After Effects',
      badge: 'Ae',
      category: 'VFX & Motion',
      description: 'Kinetic typography, motion graphics, visual effects compositing, 2D/3D spatial animations, and custom title designs.',
      features: ['Keyframe Graph Optimization', 'Expression Rigging', 'Track Mattes & Compositing', '3D Camera Tracking'],
    },
    {
      id: 'canva',
      name: 'Canva',
      badge: 'Cv',
      category: 'Rapid Production',
      description: 'Agile social media asset generation, quick client concept mockups, rapid format adaptation, and collaborative cloud layouts.',
      features: ['Rapid Layout Prototyping', 'Multi-Platform Resizing', 'Social Media Asset Kits', 'Clean Vector Export'],
    },
  ] as SoftwareItem[],

  process: [
    {
      step: '01',
      title: 'Understand',
      subtitle: 'Discovery & Vision',
      description: 'Every project begins by thoroughly dissecting your vision, target audience, brand ethos, and technical parameters. We establish creative direction, narrative tone, and production goals before drafting a single shape.',
      deliverables: ['Brief Analysis', 'Audience Profile', 'Aesthetic Moodboard', 'Technical Scope'],
    },
    {
      step: '02',
      title: 'Plan',
      subtitle: 'Architecture & Storyboard',
      description: 'Precision planning ensures flawless execution. For graphic design, this means compositional grid systems and typography hierarchies. For video editing, it involves storyboarding, pacing blueprints, and sound design outlines.',
      deliverables: ['Visual Wireframes', 'Pacing & Timeline Blueprint', 'Asset Assembly', 'Palette & Tone System'],
    },
    {
      step: '03',
      title: 'Create',
      subtitle: 'Execution & Craft',
      description: 'Translating concepts into tangible excellence. Every vector path is aligned with mathematical symmetry; every video cut is snapped to cadence and emotion. Pure focused execution using industry-standard production pipelines.',
      deliverables: ['Draft Compositions', 'First Cut Assemble', 'Kinetic Animation Rigs', 'Color Calibration'],
    },
    {
      step: '04',
      title: 'Refine',
      subtitle: 'Perfection & Delivery',
      description: 'Rigorous fine-tuning of every frame, curve, and export setting. We polish typography kerning, color grade fidelity, audio mastering levels, and produce all required industrial and digital output packages.',
      deliverables: ['Prepress Print Files', 'Lossless 4K/UHD Video Masters', 'Cross-Platform Resizes', 'Archival Project Assets'],
    },
  ] as ProcessStage[],
};
