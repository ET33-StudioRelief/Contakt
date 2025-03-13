import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroHistoryAnimation(): void {
  gsap.from('.mission_starter_white-shape.is-history', {
    x: -100, // Slide from the left
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  });

  gsap.from('.solutions_hero_text-content h1', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.5, // Start after the previous animation
  });

  gsap.from('.solutions_hero_text-content .text-rich-text', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.8, // Start after the previous animation
  });

  gsap.from('.solutions_hero_arrow-wrapper', {
    y: -20, // Move down
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1.2, // Start after the previous animation
  });
}

export function initHistoryExperienceAnimation(): void {
  // Animation du h2 dans '.history_heading-content' qui apparaît
  gsap.from('.history_heading-content h2', {
    scrollTrigger: {
      trigger: '.history_experience',
      start: 'top center',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
  });

  // Animation du <p> dans '.history_experience_right-col' qui apparaît
  gsap.from('.history_experience_right-col p', {
    scrollTrigger: {
      trigger: '.history_experience',
      start: 'top center',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    delay: 0.5, // Start after the h2 animation
  });

  // Animation des '.history_experience-row' dans '.history_experience_list-content'
  gsap.from(
    '.history_experience_right-col > .history_experience_list-content > .history_experience-row',
    {
      scrollTrigger: {
        trigger: '.history_experience',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 20, // Move down
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.2, // Stagger each row
      delay: 1, // Start after the <p> animation
    }
  );

  // Animation de '.history_experience_catch-phrase' qui apparaît
  gsap.from('.history_experience_catch-phrase', {
    scrollTrigger: {
      trigger: '.history_experience',
      start: 'top center',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    delay: 2, // Start after the rows animation
  });

  // Animation de '.history_experience_left-col' qui entre en slide right
  gsap.from('.history_experience_left-col', {
    scrollTrigger: {
      trigger: '.history_experience',
      start: 'top center',
      toggleActions: 'play none none reverse',
    },
    x: -100, // Slide from the left
    opacity: 0,
    duration: 0.5,
    ease: 'power.out',
    delay: 0.5, // Start after the h2 animation
  });

  // Animation de '.history_experience_arrow-wrapper' qui apparaît avec un mouvement vers le bas
  gsap.from('.history_experience_arrow-wrapper', {
    scrollTrigger: {
      trigger: '.history_experience',
      start: 'top center',
      toggleActions: 'play none none reverse',
    },
    y: -20, // Move down
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    delay: 2.5, // Start after the catch-phrase animation
  });
}

export function initHistoryKiwiAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_kiwi',
      start: 'top center',
      toggleActions: 'play none none reverse',
    },
  });

  // Animation de '.kiwi_decorative-wrapper' qui entre en slide left
  tl.from('.kiwi_decorative-wrapper', {
    x: 100, // Slide from the left
    opacity: 0,
    duration: 0.9,
    ease: 'power.out',
  })
    // Animation de '.kiwi_left-col' qui entre en slide right
    .from(
      '.kiwi_left-col',
      {
        x: -100, // Slide from the right
        opacity: 0,
        duration: 0.5,
        ease: 'power.out',
      },
      '-=0.5' // Start after the decorative-wrapper animation
    )
    // Animation de '.kiwi_right-col' qui apparaît avec un très léger move up
    .from(
      '.kiwi_right-col',
      {
        y: 10,
        opacity: 0,
        duration: 0.8,
        ease: 'power.out',
      },
      '-=0.3'
    ); // Start after the left-col animation
}
