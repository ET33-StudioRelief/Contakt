import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function svgComponent() {
  document.querySelectorAll('[svg="component"]').forEach((element) => {
    const svgCode = element.textContent;
    if (svgCode !== null) {
      element.innerHTML = svgCode;
    }
  });
}

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
