// Copyright (c) Pascal Brand & Zosei
// MIT License

import type { ImageMetadata } from 'astro';

import slide1 from '../assets/slides/slide-1.svg';
import slide2 from '../assets/slides/slide-2.svg';
import slide3 from '../assets/slides/slide-3.svg';
import slide4 from '../assets/slides/slide-4.svg';
import slide5 from '../assets/slides/slide-5.svg';
import slide6 from '../assets/slides/slide-6.svg';
import slide7 from '../assets/slides/slide-7.svg';
import slide8 from '../assets/slides/slide-8.svg';
import slide9 from '../assets/slides/slide-9.svg';
import slide10 from '../assets/slides/slide-10.svg';

export interface DemoSlide {
  id: number;
  title: string;
  subtitle: string;
  img: ImageMetadata;
  gradient: string;
  color: string;
}

export const demoSlides: DemoSlide[] = [
  {
    id: 1,
    title: 'Aurora Cosmos',
    subtitle: 'Gradiente Dinámico Espacial',
    img: slide1,
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'Ocean Wave',
    subtitle: 'Olas Geométricas Cían',
    img: slide2,
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    color: '#06b6d4',
  },
  {
    id: 3,
    title: 'Sunset Peaks',
    subtitle: 'Atardecer Cálido en Montañas',
    img: slide3,
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Emerald Forest',
    subtitle: 'Naturaleza y Vegetación',
    img: slide4,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    color: '#10b981',
  },
  {
    id: 5,
    title: 'Cyber Neon',
    subtitle: 'Tailwind CSS v4 & Swiper v14',
    img: slide5,
    gradient: 'from-pink-600 via-purple-600 to-blue-600',
    color: '#ec4899',
  },
  {
    id: 6,
    title: 'Solar Energy',
    subtitle: 'Energía Solar Geométrica',
    img: slide6,
    gradient: 'from-orange-600 via-amber-600 to-yellow-600',
    color: '#f97316',
  },
  {
    id: 7,
    title: 'Quantum Realm',
    subtitle: 'Deep Blue & Teal Gradient',
    img: slide7,
    gradient: 'from-teal-600 via-cyan-700 to-blue-800',
    color: '#0e7490',
  },
  {
    id: 8,
    title: 'Solar Flare',
    subtitle: 'Amber & Crimson Radiance',
    img: slide8,
    gradient: 'from-amber-600 via-orange-600 to-rose-700',
    color: '#ea580c',
  },
  {
    id: 9,
    title: 'Midnight Pulse',
    subtitle: 'Deep Indigo Geometric Harmony',
    img: slide9,
    gradient: 'from-indigo-700 via-indigo-900 to-slate-950',
    color: '#4338ca',
  },
  {
    id: 10,
    title: 'Velvet Eclipse',
    subtitle: 'Rose Magenta Cosmic Vibe',
    img: slide10,
    gradient: 'from-pink-700 via-rose-900 to-zinc-950',
    color: '#be185d',
  },
];

/**
 * Devuelve un subconjunto de slides reutilizables.
 * Si count es mayor a 10, cicla automáticamente los slides.
 */
export function getSlides(count: number = 5): DemoSlide[] {
  if (count <= demoSlides.length) {
    return demoSlides.slice(0, count);
  }
  const result: DemoSlide[] = [];
  for (let i = 0; i < count; i++) {
    const base = demoSlides[i % demoSlides.length];
    result.push({
      ...base,
      id: i + 1,
      title: `${base.title} #${i + 1}`,
    });
  }
  return result;
}

export const slideImages = demoSlides.map((s) => s.img);
