import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*export const animateNavbar = () => {
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar_component');

  if (!navbar) return;

  // Initialiser la navbar
  gsap.set(navbar, {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  });

  // Créer la timeline pour l'animation
  const tl = gsap.timeline({ paused: true });

  tl.to(navbar, {
    yPercent: -100,
    duration: 0.4,
    ease: 'power2.inOut',
  });

  // Écouter le scroll
  window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    // Ne rien faire si on est tout en haut de la page
    if (st <= 0) {
      tl.reverse();
      return;
    }

    // Scroll vers le bas = cacher la navbar
    if (st > lastScrollTop) {
      tl.play();
    }
    // Scroll vers le haut = montrer la navbar
    else {
      tl.reverse();
    }

    lastScrollTop = st;
  });
};*/

export const animateFooter = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer_component',
      start: 'top 90%',
      toggleActions: 'restart pause resume reverse',
    },
  });

  // Animation du texte du haut
  timeline.from('.footer_top-text-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  });

  // Animations simultanées des wrappers download et cards
  timeline.from(['.footer_download-wrapper', '.footer_cards-wrapper'], {
    opacity: 0,
    x: (index) => (index === 0 ? -100 : 100), // 100 pour download (slide right), -100 pour cards (slide left)
    duration: 0.8,
    ease: 'power2.out',
  });
};
