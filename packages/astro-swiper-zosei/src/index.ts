// Copyright (c) Zosei
// MIT License

import type { Swiper as SwiperInstance, SwiperOptions } from 'swiper/types';
import type { HTMLAttributes } from 'astro/types';

import ContainerComponent from './components/Container.astro';
import SlideComponent from './components/Slide.astro';
import WrapperComponent from './components/Wrapper.astro';
import ButtonNextComponent from './components/ButtonNext.astro';
import ButtonPrevComponent from './components/ButtonPrev.astro';
import PaginationComponent from './components/Pagination.astro';
import ScrollbarComponent from './components/Scrollbar.astro';
import LazyPreloaderComponent from './components/LazyPreloader.astro';
import AutoplayToggleComponent from './components/AutoplayToggle.astro';
import CounterComponent from './components/Counter.astro';
import FullscreenComponent from './components/Fullscreen.astro';

export { default as astroSwiper } from './integration';
export type { AstroSwiperIntegrationOptions } from './integration';

// Selector types for IDs (#id) or classes (.class)
export type selectorStringType = `.${string}` | `#${string}`;

/** Presets listos para producción */
export type AstroSwiperPreset = 'hero' | 'cards' | 'marquee' | 'testimonials' | 'gallery';

/** Opciones extendidas de Swiper con soporte para Astro */
export interface AstroSwiperOptions extends Omit<SwiperOptions, 'modules'> {
  astro?: {
    intersectionObserver?: {
      initSwiper?: boolean;
      disconnectOnInit?: boolean;
      controlAutoplay?: boolean;
      options?: IntersectionObserverInit;
    };
    useCustomElement?: boolean;
    thumbSwiperUniqueSelector?: selectorStringType;
  };
}

/** Props tipadas del componente <Swiper> / <Container> / <Sw> */
export interface AstroSwiperType extends HTMLAttributes<'div'> {
  /** Preset listo para producción con configuraciones de 1 línea */
  preset?: AstroSwiperPreset;

  /** Dirección del carrusel: 'horizontal' | 'vertical' */
  direction?: 'horizontal' | 'vertical';

  /** Número de slides visibles a la vez ('auto' o número) */
  slidesPerView?: number | 'auto';

  /** Espacio en px entre cada slide */
  spaceBetween?: number;

  /** Modo infinito continuo */
  loop?: boolean;

  /** Regresa al primer slide al llegar al final */
  rewind?: boolean;

  /** Velocidad de transición en milisegundos */
  speed?: number;

  /** Efecto visual de transición */
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'cards' | 'creative';

  /** Reproducción automática con opciones avanzadas */
  autoplay?:
    | boolean
    | {
        delay?: number;
        stopOnLastSlide?: boolean;
        disableOnInteraction?: boolean;
        pauseOnMouseEnter?: boolean;
        reverseDirection?: boolean;
        waitForTransition?: boolean;
        pauseWhenHidden?: boolean;
      };

  /** Flechas de navegación prev/next */
  navigation?:
    | boolean
    | {
        nextEl?: string | HTMLElement;
        prevEl?: string | HTMLElement;
        hideOnClick?: boolean;
        disabledClass?: string;
      };

  /** Paginación por bullets, números de fracción o barra de progreso */
  pagination?:
    | boolean
    | {
        el?: string | HTMLElement;
        type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
        clickable?: boolean;
        dynamicBullets?: boolean;
        dynamicMainBullets?: number;
      };

  /** Barra de scroll interactiva */
  scrollbar?:
    | boolean
    | {
        el?: string | HTMLElement;
        draggable?: boolean;
        hide?: boolean;
        snapOnRelease?: boolean;
      };

  /** Breakpoints responsivos por resolución de pantalla */
  breakpoints?: Record<number, SwiperOptions>;

  /** Cursor en forma de mano interactiva */
  grabCursor?: boolean;

  /** Centrar el slide activo en el viewport */
  centeredSlides?: boolean;

  /** Ajustar altura dinámica según el slide activo */
  autoHeight?: boolean;

  /** Arrastre libre sin ajuste forzado a límites de slides */
  freeMode?:
    | boolean
    | {
        enabled?: boolean;
        sticky?: boolean;
        momentum?: boolean;
        momentumRatio?: number;
        momentumVelocityRatio?: number;
      };

  /** Control mediante teclado */
  keyboard?:
    | boolean
    | {
        enabled?: boolean;
        onlyInViewport?: boolean;
        pageUpDown?: boolean;
      };

  /** Control mediante rueda del ratón / touchpad */
  mousewheel?:
    | boolean
    | {
        invert?: boolean;
        sensitivity?: number;
        forceToAxis?: boolean;
      };

  /** Zoom con pellizco / doble toque */
  zoom?:
    | boolean
    | {
        maxRatio?: number;
        minRatio?: number;
        toggle?: boolean;
      };

  /** Disposición en cuadrícula 2D (Grid) */
  grid?: {
    rows?: number;
    fill?: 'row' | 'column';
  };

  /** Inicializar el carrusel solo cuando entra en el viewport (Lazy) */
  lazyInit?: boolean;

  /** Pausar autoplay cuando el carrusel no está visible en pantalla */
  pauseWhenHidden?: boolean;

  /** Selector de miniaturas vinculadas (ej: '.my-thumbs') */
  thumbs?: string | { swiper?: string | SwiperInstance };

  /** Objeto de configuración Swiper completo para casos personalizados */
  options?: AstroSwiperOptions;

  /** Añade la clase CSS por defecto '.swiper' */
  addDefaultClass?: boolean;

  /** Usar custom element wrapper <astro-swiper-zosei> */
  useCustomElement?: boolean;

  /** @deprecated Usa id o class directamente */
  uniqueClass?: string;

  /** @deprecated Usa prop thumbs directamente */
  linkToThumbUniqueClass?: string;
}

/**
 * Compound Component Root con Abreviaciones Técnicas Elegantes:
 * - `<Sw>` o `<Swiper>`
 * - Subcomponentes estándar: `.Container`, `.Wrapper`, `.Slide`, `.ButtonPrev`, `.ButtonNext`, `.Pagination`, `.Scrollbar`, `.LazyPreloader`, `.AutoplayToggle`, `.Counter`, `.Fullscreen`
 * - Abreviaciones técnicas ágiles: `.Wrap`, `.Slide`, `.Prev`, `.Next`, `.Pag`, `.Scroll`, `.Lazy`, `.Toggle`, `.Count`, `.Full`
 */
export const Sw = Object.assign(ContainerComponent, {
  // Canónicos
  Container: ContainerComponent,
  Wrapper: WrapperComponent,
  Slide: SlideComponent,
  ButtonPrev: ButtonPrevComponent,
  ButtonNext: ButtonNextComponent,
  Pagination: PaginationComponent,
  Scrollbar: ScrollbarComponent,
  LazyPreloader: LazyPreloaderComponent,
  AutoplayToggle: AutoplayToggleComponent,
  Counter: CounterComponent,
  Fullscreen: FullscreenComponent,

  // Abreviaciones técnicas estándar (Sleek & Friendly)
  Wrap: WrapperComponent,
  Prev: ButtonPrevComponent,
  Next: ButtonNextComponent,
  Pag: PaginationComponent,
  Scroll: ScrollbarComponent,
  Lazy: LazyPreloaderComponent,
  Toggle: AutoplayToggleComponent,
  Count: CounterComponent,
  Full: FullscreenComponent,

  // Abreviaciones ultra-compactas
  W: WrapperComponent,
  S: SlideComponent,
  P: ButtonPrevComponent,
  N: ButtonNextComponent,
  T: AutoplayToggleComponent,
  C: CounterComponent,
  F: FullscreenComponent,
});

export const Swiper = Sw;
export default Sw;

// Exportaciones individuales canónicas
export { ContainerComponent as Container };
export { WrapperComponent as Wrapper };
export { SlideComponent as Slide };
export { ButtonPrevComponent as ButtonPrev };
export { ButtonNextComponent as ButtonNext };
export { PaginationComponent as Pagination };
export { ScrollbarComponent as Scrollbar };
export { LazyPreloaderComponent as LazyPreloader };
export { AutoplayToggleComponent as AutoplayToggle };
export { CounterComponent as Counter };
export { FullscreenComponent as Fullscreen };

// Exportaciones individuales abreviadas
export { WrapperComponent as SwWrap };
export { SlideComponent as SwSlide };
export { ButtonPrevComponent as SwPrev };
export { ButtonNextComponent as SwNext };
export { PaginationComponent as SwPag };
export { ScrollbarComponent as SwScroll };
export { LazyPreloaderComponent as SwLazy };
export { AutoplayToggleComponent as SwToggle };
export { CounterComponent as SwCount };
export { FullscreenComponent as SwFull };

// Exportaciones con prefijo Swiper*
export { WrapperComponent as SwiperWrapper };
export { SlideComponent as SwiperSlide };
export { ButtonPrevComponent as SwiperButtonPrev };
export { ButtonNextComponent as SwiperButtonNext };
export { PaginationComponent as SwiperPagination };
export { ScrollbarComponent as SwiperScrollbar };
export { LazyPreloaderComponent as SwiperLazyPreloader };
export { AutoplayToggleComponent as SwiperAutoplayToggle };
export { CounterComponent as SwiperCounter };
export { FullscreenComponent as SwiperFullscreen };

// Tipos de Props para componentes secundarios
export type { Props as ButtonProps } from './components/ButtonNext.astro';
export type { Props as PaginationProps } from './components/Pagination.astro';
export type { Props as ScrollbarProps } from './components/Scrollbar.astro';
export type { Props as SlideProps } from './components/Slide.astro';
export type { Props as AutoplayToggleProps } from './components/AutoplayToggle.astro';
export type { Props as CounterProps } from './components/Counter.astro';
export type { Props as FullscreenProps } from './components/Fullscreen.astro';

declare class AstroSwiperElement extends HTMLElement {
  astroSwiper: SwiperInstance | undefined;
}

export function getSwiperFromUniqueSelector(
  uniqueSelector: selectorStringType,
  options?: { mayBeUndefined?: boolean },
): SwiperInstance | undefined {
  if (!/^[.#]/.test(uniqueSelector)) {
    console.warn("Used selector doesn't contain class or ID selector sign");
  }

  const element = document.querySelector(uniqueSelector);
  if (!element) {
    if (!options?.mayBeUndefined) {
      console.warn(`astro-swiper-zosei: no element found with selector "${uniqueSelector}"`);
    }
    return undefined;
  }

  const customElement = element as AstroSwiperElement;
  if (customElement.astroSwiper) return customElement.astroSwiper;

  const childElement = element.firstElementChild as AstroSwiperElement;
  if (childElement?.astroSwiper) return childElement.astroSwiper;

  if (!options?.mayBeUndefined) {
    console.warn(
      `astro-swiper-zosei: element found with selector "${uniqueSelector}" but no swiper instance found.`,
    );
  }

  return undefined;
}
