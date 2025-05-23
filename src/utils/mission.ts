import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initMissionHomemadeAnimation(): void {
  if (window.innerWidth < 768) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.mission_homemade',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animation du burger avec un léger move up
  tl.from('.mission_homemade_burger-wrapper', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power2.out',
  })
    // Animation du heading en slide left
    .from('.mission_homemade_heading-content', {
      opacity: 0,
      x: -100,
      duration: 0.6,
      ease: 'power2.out',
    })
    // Animation séquentielle des rows du schéma
    .from('.mission_homemade_schema .mission_homemade_row', {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: 'power1.out',
      stagger: 0.15, // Délai court entre chaque row pour un effet rapide mais smooth
    })
    // Animation du kiwi avec rotation
    .from('.section_mission_starter_kiwi-wrap', {
      opacity: 0,
      x: 100,
      scale: 0.5,
      duration: 0.8,
      ease: 'power2.inOut',
    });
}

export function initMissionSelectionAnimation(): void {
  if (window.innerWidth < 768) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_mission_selection',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animation rapide du kiwi jaune
  tl.from('.mission_selection_yellow-kiwi-wrap', {
    x: '-100vw', // Commence depuis la gauche de l'écran
    duration: 0.8,
    ease: 'power3.out',
    rotate: 720,
  })
    // Animation du titre h2
    .from('.mission_selection_heading-content h2', {
      x: -100,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    // Animation de la colonne gauche
    .from('.mission_selection_left-col', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    // Animation séquentielle des cartes
    .from('.mission_selection_grid .selection_card_component', {
      opacity: 0,
      y: 30,
      duration: 0.4,
      stagger: 0.15, // Délai entre chaque carte
      ease: 'power1.out',
    });
}

export function initMissionCardSelectionMobile(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.mission_selection_grid',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  tl.from('.selection_card_component', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
  });
}

export function initMissionImpactAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_mission_impact',
      start: 'top bottom',
      toggleActions: 'restart pause resume reverse',
    },
  });

  tl.from('.mission_impact_left-col', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
  });

  // scale on right col - scrolltrigger
  /*gsap.from('.mission_impact_right-col', {
    scrollTrigger: {
      trigger: '.section_mission_impact',
      start: 'top bottom',
      end: 'center center',
      scrub: 1.5,
      toggleActions: 'restart pause resume reverse',
    },
    scale: 0,
    ease: 'none',
  });*/
}

export function initMissionStarterAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.mission_starter_white-shape',
      start: 'top center',
      toggleActions: 'play none none none', // play one time
    },
  });

  // slide right on white shape
  tl.from('.mission_starter_white-shape', {
    x: -100,
    duration: 0.8,
    ease: 'power2.out',
  })
    // texte apparition
    .from('.solutions_hero_text-content', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
    })
    // slide down on red kiwi
    .from('.hero-mission_red-kiwi-wrapper', {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
    // bounce on green kiwi
    .from('.hero-mission_green-kiwi-wrapper', {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
}
