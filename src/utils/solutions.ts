import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateSolutionsHero = () => {
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

export const animateSolutionsHowItWorks = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_solution_hiw',
      start: 'top 80%',
      toggleActions: 'restart pause resume reverse',
    },
  });

  timeline.from('.solution_hiw_mobile-wrapper', {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  });

  timeline.from(
    '.solution_hiw_grid',
    {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    },
    '-=0.4'
  );
};

export const animateSolutionsLevel = () => {
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
