import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation(): void {
  const elements = [
    '.hp_hero_yellow-decorative-wrapper',
    '.hp_hero_right-kiwi-wrapper',
    '.hp_hero_left-kiwi-bg',
    '.hp_hero_left-col',
    '.hp_hero_right-col',
  ];

  gsap.set([...elements, '.hp_hero_arrow-wrapper.is-right-col'], {
    opacity: 0,
    y: 20,
  });

  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'power2.out',
    },
  });

  tl.to('.hp_hero_yellow-decorative-wrapper', {
    opacity: 1,
    y: 0,
  })
    .to(
      '.hp_hero_right-kiwi-wrapper',
      {
        opacity: 1,
        y: 0,
      },
      '-=0.2'
    )
    .to(
      '.hp_hero_left-kiwi-bg',
      {
        opacity: 1,
        y: 0,
      },
      '-=0.2'
    )
    .to(
      '.hp_hero_left-col',
      {
        opacity: 1,
        y: 0,
      },
      '-=0.2'
    )
    .to(
      '.hp_hero_right-col',
      {
        opacity: 1,
        y: 0,
      },
      '-=0.2'
    )
    // Animation de la flèche en dernier
    .to('.hp_hero_arrow-wrapper.is-right-col', {
      opacity: 1,
      y: 100,
      duration: 1,
      ease: 'power3.out',
    });
}

export function initHIWAnimation(): void {
  gsap.from('.hp_hiw_content', {
    scrollTrigger: {
      trigger: '.section_hp_hiw',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: 'power3.out',
  });
}

export function initPointsAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp_points',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  tl.from('.hp_points_green-decorative-wrapper', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
  })
    .from(
      '.hp_points_left-col',
      {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    )
    .from(
      '.hp_points_phone-img , .hp_points_kiwi-wrapper ',
      {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    )
    .from(
      '.hp_points_arrow-wrapper',
      {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    );
}

export function initSolutionsAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp_solutions',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animation du wrapper décoratif
  tl.from('.hp_solutions_decorative-wrapper', {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: 'power3.out',
  })
    // Animation de chaque élément de la grille en séquence
    .from('.w-layout-grid.hp_solutions_grid > *', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2, // Délai entre chaque élément
    })
    // Animation de la flèche
    .from('.hp_solutions_arrow-wrapper', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
}

export function initReasonsAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp_reasons',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animation du wrapper décoratif et du kiwi vert simultanément
  tl.from('.hp_reasons_decorativ-wrapper', {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power3.out',
  })
    .from(
      '.hp_reasons_green-kiwi-wrapper',
      {
        opacity: 0,
        rotation: 360,
        scale: 0.5,
        duration: 1,
        ease: 'power2.out',
      },
      '<' // Le '<' fait démarrer cette animation en même temps que la précédente
    )
    // Animation des cartes, mais en excluant les embed-wrapper
    .from('.hp_reasons_grid .hp_reasons_card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
    })
    // Animation des embed-wrapper à l'intérieur de chaque carte
    .from('.hp_reasons_grid .hp_reasons_embed-wrapper', {
      opacity: 0,
      scale: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.1,
    })
    // Animation du kiwi jaune avec rotation
    .from('.hp_reasons-yellow-kiwi-wrapper', {
      opacity: 0,
      rotation: 360,
      scale: 0.5,
      duration: 1.2,
      ease: 'power2.out',
    })
    // Animation de la flèche
    .from('.hp_reasons_arrow-wrapper', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
}

export function initTakeCareAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp-take-care',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  tl.from('.hp_take-care_decorativ-wrapper', {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power3.out',
  })
    // Animation du titre h2
    .from('.hp_take-care_content h2', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
    })
    // Animation de la colonne gauche
    .from('.hp_take-care_left-col', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
    })
    // Animation des éléments de la colonne droite en séquence
    .from('.hp_take-care_right-col > *', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.2, // Délai entre chaque élément
    });
}
