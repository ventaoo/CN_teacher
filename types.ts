
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export interface ImageAsset {
  src: string;
  fallback: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
  image: ImageAsset;
}

export interface ExhibitionItem {
  year: string;
  title: string;
  gallery: string;
  location: string;
  type: "Solo" | "Group" | "Installation";
}
