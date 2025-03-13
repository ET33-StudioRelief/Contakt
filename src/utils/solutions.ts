import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initSolutionsHeroAnimation = () => {
  const timeline = gsap.timeline();

  // Animation de la colonne gauche
  timeline.from('.solution_hero_left-col', {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  });

  // Animations séquentielles du contenu texte
  timeline.from('.solutions_hero_text-content h1', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
  });

  timeline.from('.text-rich-text', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
  });

  timeline.from('.button-group', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
  });

  // Animation simultanée des wrappers avec rotation
  timeline.from(
    [
      '.solutions_hero_top-embed-wrapper',
      '.solutions_hero_middle-embed-wrapper',
      '.solution_bottom-embed-wrapper',
    ],
    {
      rotation: 360,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
    },
    '-=0.3'
  ); // Commence légèrement avant la fin de l'animation précédente
};

export const initSolutionsHowItWorksAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_solution_hiw',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animation de la colonne gauche
  tl.from('.solutions_hiw_left-col', {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  })
    // Animation de la colonne droite
    .from(
      '.solutions_hiw_right-col',
      {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    )
    // Animation séquentielle des rows de la grille
    .from('.solution_hiw_grid > *', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2, // Délai entre chaque row
      ease: 'power2.out',
    })
    // Animation de la flèche
    .from('.solution_hiw_arrow-wrapper', {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
};

export const initSolutionsLevelAnimation = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_solutions_level',
      start: 'top bottom',
      end: 'center center',
      scrub: 2.5,
      toggleActions: 'restart pause resume reverse',
    },
  });

  timeline.from('.solutions_level_left-col', {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: 'power1.inOut',
  });

  timeline.from('.solutions_level_right-col', {
    opacity: 0,
    scale: 0,
    duration: 2.5,
    ease: 'sine.inOut',
  });
};
