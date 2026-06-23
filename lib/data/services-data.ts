import { ElementType } from "react";

export interface SignfixService {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  description: string[];
}

export const SERVICES: SignfixService[] = [
  {
    id: "wall-cladding",
    slug: "wall-cladding",
    name: "Wall Cladding",
    category: "Durable, weather-resistant finishes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "Clients want exteriors that hold up against sun, rain, and years of daily wear without losing their finish. Wall cladding gives a building that durability while still looking deliberate, not just protected.",
      "SignFix sources and installs cladding systems suited to your structure and climate, with finish options that work for retail fronts, kiosks, and full façades alike.",
    ],
  },
  {
    id: "3d-model-architectural-designs",
    slug: "3d-model-architectural-designs",
    name: "3D Model & Architectural Designs",
    category: "Concept to visual design",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "Clients want to see more than concept drawings, blueprints, and physical models. They want to see virtual representations that show more detail, and with 3D modeling, engineers can design interiors and populate your structures before a single panel is built.",
      "SignFix has at its disposal 3D model and architectural design tools built for project creation, with the features to customize every detail of your construction ahead of fabrication.",
    ],
  },
  {
    id: "signage-construction-fabrication",
    slug: "signage-construction-fabrication",
    name: "Signage Construction & Fabrication",
    category: "Full-service safety signage",
    image:
      "https://images.unsplash.com/photo-1757954697151-ac9c4fb20fe1?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1757954697151-ac9c4fb20fe1?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1565098772267-60af42b81ef2?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "A sign is only as good as the fabrication behind it. SignFix handles the full cycle from structural design through cutting, welding, and finishing, so every piece holds its shape and color long after installation.",
      "Our fabrication shop covers everything from small wayfinding signs to large structural installations, built to the same standard regardless of scale.",
    ],
  },
  {
    id: "digital-display-screen-light-box",
    slug: "digital-display-screen-light-box",
    name: "Digital Display Screen & Light Box",
    category: "Advanced digital branding",
    image:
      "https://images.unsplash.com/photo-1635552322112-0194846b0d75?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1635552322112-0194846b0d75?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1551817958-20204d6ab212?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "Static signage tells people where to look once. Digital displays and light boxes keep telling them, with content you can update without touching the hardware again.",
      "SignFix designs, builds, and installs digital display and light box systems suited to retail, hospitality, and corporate environments, balanced for visibility in direct sunlight and at night.",
    ],
  },
  {
    id: "office-wall-decor-branding",
    slug: "office-wall-decor-branding",
    name: "Office Wall Decor Branding",
    category: "Interiors that transform",
    image:
      "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "An office wall is free real estate for brand identity. Done well, it reinforces who a company is to everyone who walks through the door, employees and clients alike.",
      "SignFix designs and installs office wall decor branding that fits the space it lives in, from single feature walls to full interior branding programs.",
    ],
  },
  {
    id: "print-media-design",
    slug: "print-media-design",
    name: "Print Media & Design",
    category: "Impressive printing & design",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "Print still does things digital can't: it sits in a hand, hangs on a wall, ships in a box. SignFix produces print media and design work built to hold up under that kind of close, physical attention.",
      "From brand collateral to large-format prints, every job is color-matched and finished to a standard that reads as considered rather than rushed.",
    ],
  },
  {
    id: "safety-signs",
    slug: "safety-signs",
    name: "Safety Signs",
    category: "Industrial-grade safety signage",
    image:
      "https://images.unsplash.com/photo-1759390304053-38477bf0ff68?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1759390304053-38477bf0ff68?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d09c0d3ea96?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "Safety signage only works if it's seen, understood, and durable enough to still be legible a year into the elements. There's no room to compromise on any of those three.",
      "SignFix produces industrial-grade safety signs to compliance standards, fabricated to stay readable in the conditions they're actually installed in, not just on a showroom floor.",
    ],
  },
  {
    id: "kiosk-fabrication-construction",
    slug: "kiosk-fabrication-construction",
    name: "Kiosk Fabrication & Construction",
    category: "Custom kiosk builds",
    image:
      "https://images.unsplash.com/photo-1673224980446-ed5dfa1065cd?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1673224980446-ed5dfa1065cd?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "A kiosk has to work as a structure and as a storefront at the same time. It needs to hold up physically while still doing the job of pulling people in.",
      "SignFix builds custom kiosks from initial structural design through fabrication and on-site assembly, sized and finished for the location they're going into.",
    ],
  },
  {
    id: "wall-mounted-signs-door-label",
    slug: "wall-mounted-signs-door-label",
    name: "Wall Mounted Signs & Door Label",
    category: "Wayfinding & door branding",
    image:
      "https://images.unsplash.com/photo-1776333887700-f18525f69901?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1776333887700-f18525f69901?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "Wayfinding works best when nobody notices it's working. Wall mounted signs and door labels should answer 'where am I, where do I go' without slowing anyone down to figure it out.",
      "SignFix designs and installs wall mounted signage and door labeling systems that stay consistent across a building, so every door and corridor reads as part of one identity.",
    ],
  },
  {
    id: "wall-mural-art-printing",
    slug: "wall-mural-art-printing",
    name: "Wall Mural Art Printing",
    category: "Large-format mural printing",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1547333590-47cb6e7b3935?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "A mural changes how a whole space feels, not just how one wall looks. Done at the right scale and resolution, it reads as art rather than as a printed sticker.",
      "SignFix produces large-format wall mural printing with materials and finishes chosen for the surface and exposure of the install, indoors or out.",
    ],
  },
  {
    id: "fuel-station-canopy-construction",
    slug: "fuel-station-canopy-construction",
    name: "Fuel Station Canopy Construction",
    category: "High-quality canopy structures",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1545262810-77515befe149?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1545262810-fac3a0eebadd?auto=format&fit=crop&w=1400&q=80",
    ],
    description: [
      "A fuel station canopy has to survive sun, wind, and traffic every single day for years, while still carrying the brand it's built for clearly from the road.",
      "SignFix engineers and constructs canopy structures built for that kind of constant exposure, from steel framework through branded fascia and lighting.",
    ],
  },
];

export function getServiceBySlug(slug: string): SignfixService | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getServiceById(id: string): SignfixService | undefined {
  return SERVICES.find((service) => service.id === id);
}
