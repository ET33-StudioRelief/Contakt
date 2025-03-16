import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHpHeroAnimation(): void {
  // Skip animation if screen width is less than 768px
  if (window.innerWidth < 768) return;

  // Elements to animate
  const elements = [
    '.hp_hero_yellow-decorative-wrapper',
    '.hp_hero_right-kiwi-wrapper',
    '.hp_hero_left-kiwi-bg',
    '.hp_hero_left-col',
    '.hp_hero_right-col',
  ];

  // Set initial state for elements
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

  // Sequential animations for each element
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
    // Animate arrow last
    .to('.hp_hero_arrow-wrapper.is-right-col', {
      opacity: 1,
      y: 100,
      duration: 1,
      ease: 'power3.out',
    });
}

export function initHpHIWAnimation(): void {
  // Animate content with scroll trigger
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

export function initHpPointsAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp_points',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animate decorative wrapper
  tl.from('.hp_points_green-decorative-wrapper', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
  })
    // Animate left column
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
    // Animate phone image and kiwi wrapper
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
    // Animate arrow
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

export function initHpSolutionsAnimation(): void {
  // Animate decorative wrapper with scroll
  gsap.from('.hp_solutions_decorative-wrapper', {
    scrollTrigger: {
      trigger: '.section_hp_solutions',
      start: 'top bottom',
      end: 'top',
      scrub: 1.5,
      toggleActions: 'restart pause resume reverse',
    },
    y: -200,
    ease: 'none',
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp_solutions',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animate grid elements sequentially
  tl.from('.w-layout-grid.hp_solutions_grid > *', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
  })
    // Animate arrow
    .from('.hp_solutions_arrow-wrapper', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
}

export function initHpReasonsAnimation(): void {
  // Skip animation if screen width is less than 768px
  if (window.innerWidth < 768) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp_reasons',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animate decorative wrapper
  tl.from('.hp_reasons_decorativ-wrapper', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
  })
    // Animate green kiwi wrapper
    .from(
      '.hp_reasons_green-kiwi-wrapper',
      {
        opacity: 0,
        rotation: 360,
        scale: 0.5,
        duration: 1,
        ease: 'power2.out',
      },
      '<'
    )

    .from('.hp_reasons_grid .hp_reasons_card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
    })
    // Animate embed wrappers inside each card
    .from('.hp_reasons_grid .hp_reasons_embed-wrapper', {
      opacity: 0,
      scale: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.1,
    })
    // Animate yellow kiwi wrapper
    .from('.hp_reasons-yellow-kiwi-wrapper', {
      opacity: 0,
      rotation: 360,
      scale: 0.5,
      duration: 1.2,
      ease: 'power2.out',
    })
    // Animate arrow
    .from('.hp_reasons_arrow-wrapper', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
}

export function initHpReasonsMobileAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp_reasons',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animate cards for mobile
  tl.from('.hp_reasons_grid .hp_reasons_card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
  });
}

export function initHpTakeCareAnimation(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_hp-take-care',
      start: 'top center',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animate decorative wrapper
  tl.from('.hp_take-care_decorativ-wrapper', {
    opacity: 0,
    x: -100,
    duration: 0.2,
    ease: 'power3.out',
  })
    // Animate title h2
    .from('.hp_take-care_content h2', {
      opacity: 0,
      y: 30,
      duration: 0.4,
      ease: 'power2.out',
    })
    // Animate left column
    .from('.hp_take-care_left-col', {
      opacity: 0,
      x: -100,
      duration: 0.6,
      ease: 'power3.out',
    })
    // Animate right column elements sequentially
    .from('.hp_take-care_right-col > *', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.2,
    });
}
