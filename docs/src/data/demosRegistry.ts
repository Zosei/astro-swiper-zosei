// Copyright (c) Pascal Brand & Zosei
// MIT License

export interface DemoItem {
  slug: string;
  title: string;
  desc: string;
  category: 'Efectos 3D' | 'Autoplay & Observer' | 'Navegación & Control' | 'Paginación & Scroll' | 'Layouts & Responsivo' | 'Galerías & Miniaturas' | 'Avanzado & API';
  tag: string;
  color: string;
  componentName: string;
  testId?: string;
  codeSkeleton: string;
}

export const demosRegistry: DemoItem[] = [
  // --- Efectos 3D & Creativos ---
  {
    slug: 'cards',
    title: 'Efecto 3D Cards',
    desc: 'Pila de tarjetas 3D interactivas con soporte de arrastre gestual y sombras dinámicas.',
    category: 'Efectos 3D',
    tag: '3D Cards',
    color: 'purple',
    componentName: 'Cards',
    testId: 'test-DemoEffectCards',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper effect="cards" grabCursor={true} class="w-72 h-96 mx-auto">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-3xl overflow-hidden shadow-2xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
</Swiper>`,
  },
  {
    slug: 'cube',
    title: 'Efecto 3D Cube',
    desc: 'Rotación volumétrica de cubo 3D con cálculo automático de sombras y perspectivas.',
    category: 'Efectos 3D',
    tag: '3D Cube',
    color: 'cyan',
    componentName: 'Cube',
    testId: 'test-DemoEffectCube',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(4);
---

<Swiper
  effect="cube"
  grabCursor={true}
  pagination={{ clickable: true }}
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  class="w-80 h-80 mx-auto"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="glow" color="cyan" />
</Swiper>`,
  },
  {
    slug: 'coverflow',
    title: 'Efecto CoverFlow',
    desc: 'Efecto de carrusel estilo vitrina con inclinación angular, profundidad y escalado dinámico.',
    category: 'Efectos 3D',
    tag: 'CoverFlow',
    color: 'purple',
    componentName: 'CoverFlow',
    testId: 'test-DemoEffectCoverFlow',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(7);
---

<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  class="w-full py-6"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="!w-80 aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="purple" />
</Swiper>`,
  },
  {
    slug: 'creative',
    title: 'Transiciones Creativas',
    desc: 'Efectos de transición tridimensional personalizados con matrices de transformación y sombras.',
    category: 'Efectos 3D',
    tag: 'Creative',
    color: 'cyan',
    componentName: 'Creative',
    testId: 'test-DemoEffectCreative',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper
  grabCursor={true}
  effect="creative"
  creativeEffect={{
    prev: { shadow: true, translate: ['-120%', 0, -500] },
    next: { shadow: true, translate: ['120%', 0, -500] },
  }}
  pagination={{ clickable: true }}
  class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden shadow-2xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="cyan" />
</Swiper>`,
  },
  {
    slug: 'fade',
    title: 'Transición Fade Suave',
    desc: 'Desvanecimiento cruzado suave entre slides superpuestos sin desplazamiento horizontal.',
    category: 'Efectos 3D',
    tag: 'Fade',
    color: 'indigo',
    componentName: 'Fade',
    testId: 'test-DemoEffectFade',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper
  effect="fade"
  navigation={true}
  pagination={{ clickable: true }}
  class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'flip',
    title: 'Efecto 3D Flip',
    desc: 'Giro de tarjeta tridimensional en 180 grados con sombras de bisel realistas.',
    category: 'Efectos 3D',
    tag: 'Flip',
    color: 'purple',
    componentName: 'Flip',
    testId: 'test-DemoEffectFlip',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(4);
---

<Swiper
  effect="flip"
  grabCursor={true}
  pagination={{ clickable: true }}
  navigation={true}
  class="w-80 aspect-square mx-auto rounded-2xl overflow-hidden shadow-2xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="purple" />
</Swiper>`,
  },

  // --- Autoplay & Intersection Observer ---
  {
    slug: 'autoplay',
    title: 'Autoplay con Intersection Observer',
    desc: 'Reproducción automática con detección de visibilidad en viewport y pausa en hover.',
    category: 'Autoplay & Observer',
    tag: 'Observer',
    color: 'indigo',
    componentName: 'Autoplay',
    testId: 'test-Autoplay',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper
  spaceBetween={20}
  centeredSlides={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pauseWhenHidden={true}
  pagination={{ clickable: true }}
  navigation={true}
  class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'autoplay-progress',
    title: 'Autoplay con Anillo de Progreso',
    desc: 'Indicador circular interactivo SVG que muestra el tiempo restante antes del siguiente slide.',
    category: 'Autoplay & Observer',
    tag: 'Progress Ring',
    color: 'cyan',
    componentName: 'AutoplayProgress',
    testId: 'test-DemoAutoplayProgress',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper
  uniqueClass="swiper-autoplay-progress"
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation={true}
  class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl relative"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },

  // --- Galerías & Miniaturas ---
  {
    slug: 'gallery',
    title: 'Galería con Astro <Image />',
    desc: 'Renderizado de imágenes locales ultra optimizadas usando astro:assets dentro de los slides.',
    category: 'Galerías & Miniaturas',
    tag: 'Astro Assets',
    color: 'emerald',
    componentName: 'Default',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(4);
---

<Swiper
  slidesPerView={1}
  spaceBetween={20}
  loop={true}
  navigation={true}
  pagination={{ clickable: true }}
  breakpoints={{
    768: { slidesPerView: 2, spaceBetween: 24 }
  }}
  class="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl"
>
  <Wrapper>
    {slides.map((item) => (
      <Slide class="rounded-2xl overflow-hidden group">
        <Image src={item.img} alt={item.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'thumbs',
    title: 'Galería Sincronizada (Thumbs)',
    desc: 'Control sincronizado bidireccional entre carrusel principal y pista de miniaturas inferior.',
    category: 'Galerías & Miniaturas',
    tag: 'Thumbnails',
    color: 'emerald',
    componentName: 'Thumbnail',
    testId: 'test-Thumbnail',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(8);
---

<Swiper
  loop={true}
  navigation={true}
  thumbs="#my-thumbs"
  class="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
</Swiper>

<Swiper
  id="my-thumbs"
  class="w-full mt-3"
  spaceBetween={10}
  slidesPerView={4}
  freeMode={true}
  watchSlidesProgress={true}
  loop={true}
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-xl overflow-hidden aspect-video cursor-pointer opacity-50 transition-opacity [&.swiper-slide-thumb-active]:opacity-100">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
</Swiper>`,
  },
  {
    slug: 'thumbs-gallery',
    title: 'Thumbs Gallery Avanzada',
    desc: 'Galería con navegación por flechas y miniaturas fluidas con seguimiento visual activo.',
    category: 'Galerías & Miniaturas',
    tag: 'Gallery Track',
    color: 'emerald',
    componentName: 'ThumbsGallery',
    testId: 'test-DemoThumbsGallery',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper spaceBetween={10} navigation={true} thumbs="#thumbs-track" class="w-full aspect-video rounded-2xl overflow-hidden">
  <Wrapper>
    {slides.map((slide) => (
      <Slide><Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" /></Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
</Swiper>

<Swiper id="thumbs-track" spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} class="w-full mt-3">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-xl overflow-hidden opacity-50 cursor-pointer [&.swiper-slide-thumb-active]:opacity-100">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
</Swiper>`,
  },
  {
    slug: 'thumbs-gallery-loop',
    title: 'Thumbs Gallery con Loop Infinito',
    desc: 'Carrusel con miniaturas que giran infinitamente sin cortes en ambos niveles.',
    category: 'Galerías & Miniaturas',
    tag: 'Infinite Thumbs',
    color: 'emerald',
    componentName: 'ThumbsGalleryLoop',
    testId: 'test-DemoThumbsGalleryLoop',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper spaceBetween={10} loop={true} navigation={true} thumbs="#thumbs-loop-track" class="w-full aspect-video rounded-2xl overflow-hidden">
  <Wrapper>
    {slides.map((slide) => (
      <Slide><Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" /></Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
</Swiper>

<Swiper id="thumbs-loop-track" spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} loop={true} class="w-full mt-3">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-xl overflow-hidden opacity-50 cursor-pointer [&.swiper-slide-thumb-active]:opacity-100">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" /></Slide>
    ))}
  </Wrapper>
</Swiper>`,
  },

  // --- Navegación & Control ---
  {
    slug: 'navigation',
    title: 'Navegación por Flechas',
    desc: 'Controles de navegación personalizables con variantes en vidrio esmerilado y Tailwind v4.',
    category: 'Navegación & Control',
    tag: 'Arrows',
    color: 'indigo',
    componentName: 'Navigation',
    testId: 'test-Navigation',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper navigation={true} spaceBetween={20} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
</Swiper>`,
  },
  {
    slug: 'keyboard-control',
    title: 'Control por Teclado',
    desc: 'Navegación accesible mediante las teclas de flecha izquierda/derecha del teclado.',
    category: 'Navegación & Control',
    tag: 'Keyboard',
    color: 'indigo',
    componentName: 'KeyboardControl',
    testId: 'test-DemoKeyboardControl',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper
  keyboard={{ enabled: true }}
  pagination={{ clickable: true }}
  navigation={true}
  class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'mousewheel-control',
    title: 'Control por Rueda del Ratón',
    desc: 'Desplazamiento suave de slides vertical u horizontal mediante el scroll del mouse.',
    category: 'Navegación & Control',
    tag: 'Mousewheel',
    color: 'indigo',
    componentName: 'MousewheelControl',
    testId: 'test-DemoMousewheelControl',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper
  direction="vertical"
  mousewheel={true}
  pagination={{ clickable: true }}
  class="w-full h-80 rounded-2xl overflow-hidden shadow-xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'slideable-menu',
    title: 'Slideable Menu Drawer',
    desc: 'Menú lateral desplegable mediante arrastre gestual táctil ideal para interfaces móviles.',
    category: 'Navegación & Control',
    tag: 'Drawer Menu',
    color: 'indigo',
    componentName: 'SlideableMenu',
    testId: 'test-DemoSlideableMenu',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(3);
---

<Swiper slidesPerView="auto" spaceBetween={16} class="w-full py-4">
  <Wrapper>
    <Slide class="!w-64 p-5 rounded-2xl bg-indigo-900/40 border border-indigo-500/30 text-white flex flex-col justify-between">
      <div>
        <span class="text-[10px] font-mono text-indigo-300 font-bold uppercase">Menú Lateral</span>
        <h4 class="text-base font-bold mt-1">Panel Deslizable</h4>
        <p class="text-xs text-slate-300 mt-1">Navegación gestual suave tipo drawer.</p>
      </div>
      <span class="text-xs text-indigo-400 font-semibold">Desliza →</span>
    </Slide>
    {slides.map((slide) => (
      <Slide class="!w-72 aspect-video rounded-2xl overflow-hidden shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
</Swiper>`,
  },
  {
    slug: 'change-direction',
    title: 'Cambio Dinámico de Dirección',
    desc: 'Ajuste adaptativo de orientación horizontal a vertical en respuesta al tamaño de pantalla.',
    category: 'Navegación & Control',
    tag: 'Responsive Direction',
    color: 'indigo',
    componentName: 'ChangeDirection',
    testId: 'test-DemoChangeDirection',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper id="change-direction-swiper" navigation={true} autoHeight={true} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
</Swiper>`,
  },
  {
    slug: 'hash-navigation',
    title: 'Navegación por URL Hash',
    desc: 'Sincronización de la posición del carrusel con el hash (#slide-1) de la barra de direcciones del navegador.',
    category: 'Navegación & Control',
    tag: 'URL Hash',
    color: 'indigo',
    componentName: 'HashNavigation',
    testId: 'test-DemoHashNavigation',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper hashNavigation={{ watchState: true }} navigation={true} pagination={{ clickable: true }} class="w-full aspect-video rounded-2xl overflow-hidden">
  <Wrapper>
    {slides.map((slide, i) => (
      <Slide data-hash={'slide-' + (i + 1)} class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'history',
    title: 'Historial del Navegador (HTML5 History)',
    desc: 'Permite avanzar y retroceder en los slides utilizando los botones nativos Atrás/Adelante del navegador.',
    category: 'Navegación & Control',
    tag: 'HTML5 History',
    color: 'indigo',
    componentName: 'History',
    testId: 'test-DemoHistory',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper history={{ key: 'slide' }} navigation={true} pagination={{ clickable: true }} class="w-full aspect-video rounded-2xl overflow-hidden">
  <Wrapper>
    {slides.map((slide, i) => (
      <Slide data-history={'slide-' + (i + 1)} class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },

  // --- Paginación & Scroll ---
  {
    slug: 'pagination',
    title: 'Paginación por Bullets',
    desc: 'Paginación clásica e interactiva con bullets redondeados y estados activos estilizados.',
    category: 'Paginación & Scroll',
    tag: 'Bullets',
    color: 'indigo',
    componentName: 'Pagination',
    testId: 'test-Pagination',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper pagination={{ clickable: true }} spaceBetween={20} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'pagination-dynamic',
    title: 'Paginación con Bullets Dinámicos',
    desc: 'Paginación compacta donde los bullets cambian de tamaño según la distancia al slide activo.',
    category: 'Paginación & Scroll',
    tag: 'Dynamic Bullets',
    color: 'indigo',
    componentName: 'PaginationDynamic',
    testId: 'test-DemoPaginationDynamic',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(8);
---

<Swiper pagination={{ dynamicBullets: true, clickable: true }} spaceBetween={20} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'pagination-fraction',
    title: 'Paginación por Fracción Numérica',
    desc: 'Indicador tipo contador fraccionario (ej: 1 / 5) con píldora translúcida de cristal.',
    category: 'Paginación & Scroll',
    tag: 'Fraction',
    color: 'indigo',
    componentName: 'PaginationFraction',
    testId: 'test-DemoPaginationFraction',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper pagination={{ type: 'fraction' }} navigation={true} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination />
</Swiper>`,
  },
  {
    slug: 'pagination-progress',
    title: 'Paginación por Barra de Progreso',
    desc: 'Barra horizontal de progreso en la parte superior que se llena conforme avanza el carrusel.',
    category: 'Paginación & Scroll',
    tag: 'Progressbar',
    color: 'indigo',
    componentName: 'PaginationProgress',
    testId: 'test-DemoPaginationProgress',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper pagination={{ type: 'progressbar' }} navigation={true} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination />
</Swiper>`,
  },
  {
    slug: 'pagination-custom',
    title: 'Paginación con Bullets Personalizados',
    desc: 'Numeración y renderizado de nodos de paginación personalizados con etiquetas HTML a medida.',
    category: 'Paginación & Scroll',
    tag: 'Custom Bullets',
    color: 'indigo',
    componentName: 'PaginationCustom',
    testId: 'test-DemoPaginationCustom',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper
  uniqueClass="swiper-custom-bullets"
  pagination={{ clickable: true }}
  class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination />
</Swiper>`,
  },
  {
    slug: 'scrollbar',
    title: 'Barra de Desplazamiento (Scrollbar)',
    desc: 'Barra de arrastre táctil con gradiente de color para navegación libre precisa.',
    category: 'Paginación & Scroll',
    tag: 'Scrollbar',
    color: 'indigo',
    componentName: 'Scrollbar',
    testId: 'test-DemoScrollbar',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Scrollbar } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper scrollbar={{ draggable: true }} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl pb-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Scrollbar />
</Swiper>`,
  },
  {
    slug: 'variants',
    title: 'Variantes de Diseño Tailwind CSS v4',
    desc: 'Colección completa de estilos visuales preconfigurados: Glass, Glow, Solid, Minimal y Ghost.',
    category: 'Paginación & Scroll',
    tag: 'Tailwind 4 Variants',
    color: 'rose',
    componentName: 'Default',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
---

<Swiper navigation pagination loop class="w-full aspect-video rounded-2xl">
  <Wrapper>
    <Slide class="bg-indigo-600 text-white p-6">Slide 1</Slide>
    <Slide class="bg-purple-600 text-white p-6">Slide 2</Slide>
  </Wrapper>
  
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },

  // --- Layouts & Responsivo ---
  {
    slug: 'responsive-breakpoints',
    title: 'Breakpoints Responsivos',
    desc: 'Configuración de múltiples vistas adaptables automáticamente a resoluciones móviles, tablet y desktop.',
    category: 'Layouts & Responsivo',
    tag: 'Breakpoints',
    color: 'amber',
    componentName: 'ResponsiveBreakpoints',
    testId: 'test-DemoResponsiveBreakpoints',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(8);
---

<Swiper
  slidesPerView={1}
  spaceBetween={10}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 24 },
    1024: { slidesPerView: 4, spaceBetween: 28 },
  }}
  class="w-full py-4"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'ratio-breakpoints',
    title: 'Breakpoints por Proporción de Pantalla',
    desc: 'Adaptación según la relación de aspecto (@0.75, @1.00, @1.50) para vistas multi-dispositivo.',
    category: 'Layouts & Responsivo',
    tag: 'Ratio Query',
    color: 'amber',
    componentName: 'RatioBreakpoints',
    testId: 'test-DemoRatioBreakpoints',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(7);
---

<Swiper
  slidesPerView={1}
  pagination={{ clickable: true }}
  breakpoints={{
    '@0.75': { slidesPerView: 2, spaceBetween: 20 },
    '@1.00': { slidesPerView: 3, spaceBetween: 30 },
    '@1.50': { slidesPerView: 4, spaceBetween: 40 },
  }}
  class="w-full py-4"
>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'grid',
    title: 'Cuadrícula 2D Multi-Fila',
    desc: 'Disposición matricial con 2 o más filas de slides por vista con navegación sincronizada.',
    category: 'Layouts & Responsivo',
    tag: 'Grid 2D',
    color: 'amber',
    componentName: 'Grid',
    testId: 'test-DemoGrid',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(9);
---

<Swiper slidesPerView={3} grid={{ rows: 2 }} spaceBetween={20} pagination={{ clickable: true }} class="w-full h-[400px]">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'slides-per-view',
    title: 'Múltiples Slides Visibles',
    desc: 'Visualización simultánea de varios elementos por pantalla con espaciado constante.',
    category: 'Layouts & Responsivo',
    tag: 'Multi-Slide',
    color: 'amber',
    componentName: 'SlidesPerView',
    testId: 'test-DemoSlidesPerView',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper slidesPerView={3} spaceBetween={20} pagination={{ clickable: true }} class="w-full py-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'slides-per-view-auto',
    title: 'Ancho Automático por Slide',
    desc: 'Slides con anchos variables determinados por su propio contenido o clases CSS de Tailwind.',
    category: 'Layouts & Responsivo',
    tag: 'Auto Width',
    color: 'amber',
    componentName: 'SlidesPerViewAuto',
    testId: 'test-DemoSlidesPerViewAuto',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(7);
---

<Swiper slidesPerView="auto" spaceBetween={20} pagination={{ clickable: true }} class="w-full py-4">
  <Wrapper>
    {slides.map((slide, i) => (
      <Slide class={(i % 2 === 0 ? '!w-60' : '!w-80') + ' aspect-video rounded-2xl overflow-hidden shadow-xl'}>
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'centered',
    title: 'Slides Centrados',
    desc: 'El slide activo permanece enfocado en el centro del viewport del contenedor.',
    category: 'Layouts & Responsivo',
    tag: 'Centered',
    color: 'amber',
    componentName: 'Centered',
    testId: 'test-DemoCentered',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper slidesPerView={2} centeredSlides={true} spaceBetween={20} pagination={{ clickable: true }} class="w-full py-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'centered-auto',
    title: 'Centrado con Ancho Automático',
    desc: 'Slides con dimensiones heterogéneas centrados suavemente durante la navegación.',
    category: 'Layouts & Responsivo',
    tag: 'Centered Auto',
    color: 'amber',
    componentName: 'CenteredAuto',
    testId: 'test-DemoCenteredAuto',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper slidesPerView="auto" centeredSlides={true} spaceBetween={20} pagination={{ clickable: true }} class="w-full py-4">
  <Wrapper>
    {slides.map((slide, i) => (
      <Slide class={(i % 2 === 0 ? '!w-72' : '!w-96') + ' aspect-video rounded-2xl overflow-hidden shadow-xl'}>
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'vertical',
    title: 'Carrusel Vertical',
    desc: 'Orientación de desplazamiento vertical fluida para feeds y galerías de formato vertical.',
    category: 'Layouts & Responsivo',
    tag: 'Vertical Flow',
    color: 'amber',
    componentName: 'Vertical',
    testId: 'test-DemoVertical',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper direction="vertical" pagination={{ clickable: true }} spaceBetween={20} class="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'autoheight',
    title: 'Altura Automática Dinámica',
    desc: 'La altura del contenedor se anima y ajusta en tiempo real según la dimensión del slide activo.',
    category: 'Layouts & Responsivo',
    tag: 'Auto Height',
    color: 'amber',
    componentName: 'Autoheight',
    testId: 'test-DemoAutoheight',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper autoHeight={true} spaceBetween={20} navigation={true} pagination={{ clickable: true }} class="w-full rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide, i) => (
      <Slide class="rounded-2xl overflow-hidden">
        <div class={'w-full ' + (i === 1 ? 'h-64' : i === 2 ? 'h-80' : 'h-48')}>
          <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
        </div>
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'space-between',
    title: 'Espaciado Personalizado',
    desc: 'Control exacto de separación en píxeles (gap) entre slides adyacentes.',
    category: 'Layouts & Responsivo',
    tag: 'Gap Control',
    color: 'amber',
    componentName: 'SpaceBetween',
    testId: 'test-DemoSpaceBetween',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper slidesPerView={3} spaceBetween={30} pagination={{ clickable: true }} class="w-full py-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'slides-per-group-skip',
    title: 'Salto de Grupos de Slides',
    desc: 'Desplazamiento por bloques con excepción de saltos en los primeros elementos individuales.',
    category: 'Layouts & Responsivo',
    tag: 'Group Skip',
    color: 'amber',
    componentName: 'SlidesPerGroupSkip',
    testId: 'test-DemoSlidesPerGroupSkip',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(9);
---

<Swiper slidesPerView={3} slidesPerGroup={2} slidesPerGroupSkip={1} spaceBetween={20} navigation={true} class="w-full py-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
</Swiper>`,
  },
  {
    slug: 'nested',
    title: 'Carruseles Anidados',
    desc: 'Integración de un carrusel secundario vertical embebido dentro de un slide horizontal.',
    category: 'Layouts & Responsivo',
    tag: 'Nested Swipers',
    color: 'amber',
    componentName: 'Nested',
    testId: 'test-DemoNested',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import Vertical from './Vertical.astro';
---

<Swiper spaceBetween={30} pagination={{ clickable: true }} class="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    <Slide class="p-4 bg-indigo-900/60 text-white font-bold">Slide Horizontal 1</Slide>
    <Slide class="p-2"><Vertical /></Slide>
    <Slide class="p-4 bg-purple-900/60 text-white font-bold">Slide Horizontal 3</Slide>
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'multiple-swipers',
    title: 'Múltiples Swipers Coordinados',
    desc: 'Ejecución simultánea de múltiples instancias independientes en la misma vista.',
    category: 'Layouts & Responsivo',
    tag: 'Multi Instance',
    color: 'amber',
    componentName: 'MultipleSwipers',
    testId: 'test-DemoMultipleSwipers',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides1 = getSlides(4);
const slides2 = getSlides(4).reverse();
---

<div class="space-y-4 w-full">
  <Swiper slidesPerView={2} spaceBetween={16} pagination={{ clickable: true }} class="w-full rounded-2xl overflow-hidden">
    <Wrapper>
      {slides1.map((slide) => (
        <Slide class="rounded-2xl overflow-hidden aspect-video"><Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" /></Slide>
      ))}
    </Wrapper>
    <Pagination variant="pills" color="indigo" />
  </Swiper>
</div>`,
  },

  // --- Gestos & Interacción ---
  {
    slug: 'free-mode',
    title: 'Arrastre Libre (Free Mode)',
    desc: 'Desplazamiento inercial libre y fluido sin anclaje forzado a los bordes de cada slide.',
    category: 'Avanzado & API',
    tag: 'Free Drag',
    color: 'cyan',
    componentName: 'FreeMode',
    testId: 'test-DemoFreeMode',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(7);
---

<Swiper slidesPerView={3} spaceBetween={20} freeMode={true} pagination={{ clickable: true }} class="w-full py-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'grab-cursor',
    title: 'Cursor de Agarre Táctil',
    desc: 'Indicador de cursor estilo mano abierta/cerrada para comunicar interactividad táctil.',
    category: 'Avanzado & API',
    tag: 'Cursor Feedback',
    color: 'cyan',
    componentName: 'GrabCursor',
    testId: 'test-DemoGrabCursor',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper slidesPerView={3} spaceBetween={20} grabCursor={true} class="w-full py-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl cursor-grab active:cursor-grabbing">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
</Swiper>`,
  },
  {
    slug: 'zoom',
    title: 'Zoom por Pellizco o Doble Toque',
    desc: 'Ampliación y exploración detallada de imágenes en alta resolución con zoom gestual.',
    category: 'Avanzado & API',
    tag: 'Pinch Zoom',
    color: 'cyan',
    componentName: 'Zoom',
    testId: 'test-DemoZoom',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper zoom={true} navigation={true} pagination={{ clickable: true }} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <div class="swiper-zoom-container w-full h-full">
          <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
        </div>
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'parallax',
    title: 'Efecto Parallax Multi-Capa',
    desc: 'Capas de fondo, títulos y párrafos moviéndose a velocidades diferenciales aceleradas por hardware.',
    category: 'Avanzado & API',
    tag: 'Parallax Layer',
    color: 'purple',
    componentName: 'Parallax',
    testId: 'test-DemoParallax',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { getSlides, slideImages } from '../data/slides';

const slides = getSlides(4);
---

<Swiper speed={600} parallax={true} pagination={{ clickable: true }} navigation={true} class="w-full h-80 rounded-2xl overflow-hidden relative">
  <div class="absolute inset-y-0 -left-[15%] w-[130%] h-full bg-cover bg-center" style={'background-image: url(' + slideImages[0].src + ');'} data-swiper-parallax="-23%"></div>
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="p-8 text-white flex flex-col justify-center h-full bg-black/40">
        <h3 class="text-3xl font-extrabold" data-swiper-parallax="-300">{slide.title}</h3>
        <p class="text-xs text-slate-300 mt-2" data-swiper-parallax="-100">{slide.subtitle}</p>
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'infinite-loop',
    title: 'Modo Loop Infinito Continuo',
    desc: 'Rotación circular sin fin donde el último slide se conecta naturalmente con el primero.',
    category: 'Avanzado & API',
    tag: 'Continuous Loop',
    color: 'indigo',
    componentName: 'InfiniteLoop',
    testId: 'test-DemoInfiniteLoop',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper slidesPerView={1} loop={true} pagination={{ clickable: true }} navigation={true} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'rewind',
    title: 'Modo Rewind',
    desc: 'Al pulsar siguiente en el último slide, regresa instantáneamente al primer slide con animación.',
    category: 'Avanzado & API',
    tag: 'Rewind',
    color: 'indigo',
    componentName: 'Rewind',
    testId: 'test-DemoRewind',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper rewind={true} navigation={true} pagination={{ clickable: true }} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'rtl',
    title: 'Soporte RTL (Derecha a Izquierda)',
    desc: 'Compatibilidad con lectura de derecha a izquierda para idiomas árabe, hebreo y persa.',
    category: 'Avanzado & API',
    tag: 'RTL Mode',
    color: 'amber',
    componentName: 'Rtl',
    testId: 'test-DemoRtl',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<div dir="rtl" class="w-full">
  <Swiper pagination={{ clickable: true }} navigation={true} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
    <Wrapper>
      {slides.map((slide) => (
        <Slide class="rounded-2xl overflow-hidden">
          <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
        </Slide>
      ))}
    </Wrapper>
    <ButtonPrev variant="glass" />
    <ButtonNext variant="glass" />
    <Pagination variant="pills" color="indigo" />
  </Swiper>
</div>`,
  },
  {
    slug: 'css-mode',
    title: 'Modo CSS Scroll Snap',
    desc: 'Aceleración nativa de desplazamiento delegada al motor del navegador con CSS Scroll Snap.',
    category: 'Avanzado & API',
    tag: 'CSS Snap',
    color: 'indigo',
    componentName: 'CssMode',
    testId: 'test-DemoCssMode',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper cssMode={true} navigation={true} pagination={{ clickable: true }} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'scroll-container',
    title: 'Contenedor con Scroll Continuo',
    desc: 'Panel con scroll fluido continuo e inercia táctil ideal para artículos y textos largos.',
    category: 'Avanzado & API',
    tag: 'Scroll Flow',
    color: 'indigo',
    componentName: 'ScrollContainer',
    testId: 'test-DemoScrollContainer',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Scrollbar } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper direction="vertical" slidesPerView="auto" freeMode={true} scrollbar={{ draggable: true }} mousewheel={true} autoHeight={true} class="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="p-4 rounded-xl">
        <div class="h-32 rounded-2xl overflow-hidden">
          <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
        </div>
      </Slide>
    ))}
  </Wrapper>
  <Scrollbar />
</Swiper>`,
  },
  {
    slug: 'lazy-load-images',
    title: 'Carga Diferida (Lazy Load) con Preloader',
    desc: 'Optimización de rendimiento cargando imágenes e inicializando Swiper solo al entrar al viewport.',
    category: 'Avanzado & API',
    tag: 'Lazy Preloader',
    color: 'indigo',
    componentName: 'LazyLoadImages',
    testId: 'test-DemoLazyLoadImages',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination, LazyPreloader } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(6);
---

<Swiper lazyInit={true} pagination={{ clickable: true }} navigation={true} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden relative">
        <Image src={slide.img} alt={slide.title} loading="lazy" class="w-full h-full object-cover" />
        <LazyPreloader class="swiper-lazy-preloader" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'virtual-slides',
    title: 'Motor de Slides Virtuales (500+ Slides)',
    desc: 'Renderizado de alto rendimiento de cientos de elementos creando en el DOM solo los visibles.',
    category: 'Avanzado & API',
    tag: 'Virtual Engine',
    color: 'indigo',
    componentName: 'VirtualSlides',
    testId: 'test-DemoVirtualSlides',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';

const virtualSlides = Array.from({ length: 500 }, (_, i) => 'Slide ' + (i + 1));
---

<Swiper
  id="swiper-virtual"
  slidesPerView={3}
  centeredSlides={true}
  virtual={{ slides: virtualSlides }}
  pagination={{ type: 'fraction' }}
  navigation={true}
  class="w-full h-64 rounded-2xl overflow-hidden shadow-xl"
>
  <Wrapper>
    <Slide class="rounded-2xl bg-indigo-900/40 text-white font-bold flex items-center justify-center">Slide 1</Slide>
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination />
</Swiper>`,
  },
  {
    slug: 'manipulation',
    title: 'Manipulación Dinámica por API',
    desc: 'Inserción y eliminación dinámica de slides al inicio o final mediante la API programática de Swiper.',
    category: 'Avanzado & API',
    tag: 'API Methods',
    color: 'indigo',
    componentName: 'Manipulation',
    testId: 'test-DemoManipulation',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, ButtonPrev, ButtonNext, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(3);
---

<Swiper id="swiper-manipulation" spaceBetween={20} pagination={{ type: 'fraction' }} navigation={true} class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <ButtonPrev variant="glass" />
  <ButtonNext variant="glass" />
  <Pagination />
</Swiper>`,
  },
  {
    slug: 'watch-slides-visibility',
    title: 'Monitoreo de Visibilidad de Slides',
    desc: 'Seguimiento de elementos visibles en pantalla para optimizar animaciones y transiciones.',
    category: 'Avanzado & API',
    tag: 'Visibility Observer',
    color: 'indigo',
    componentName: 'WatchSlidesVisibility',
    testId: 'test-DemoWatchSlidesVisibility',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide, Pagination } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(8);
---

<Swiper slidesPerView={3} spaceBetween={20} watchSlidesProgress={true} pagination={{ clickable: true }} class="w-full py-4">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden aspect-video shadow-xl">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
  <Pagination variant="pills" color="indigo" />
</Swiper>`,
  },
  {
    slug: 'default',
    title: 'Configuración Base Mínima',
    desc: 'Plantilla inicial ligera y sin dependencias para implementar Swiper en segundos.',
    category: 'Avanzado & API',
    tag: 'Base Swiper',
    color: 'indigo',
    componentName: 'Default',
    testId: 'test-DemoDefault',
    codeSkeleton: `---
import { Swiper, Wrapper, Slide } from 'astro-swiper-zosei';
import { Image } from 'astro:assets';
import { getSlides } from '../data/slides';

const slides = getSlides(5);
---

<Swiper class="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
  <Wrapper>
    {slides.map((slide) => (
      <Slide class="rounded-2xl overflow-hidden">
        <Image src={slide.img} alt={slide.title} class="w-full h-full object-cover" />
      </Slide>
    ))}
  </Wrapper>
</Swiper>`,
  },
];

export function getDemoBySlug(slug: string): DemoItem | undefined {
  return demosRegistry.find((d) => d.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(demosRegistry.map((d) => d.category)));
}
