import './index.css';

import { animateFooter } from './utils/components';
import {
  initHeroAnimation,
  initHIWAnimation,
  initPointsAnimation,
  initReasonsAnimation,
  initSolutionsAnimation,
  initTakeCareAnimation,
} from './utils/home';
import {
  animateSolutionsHero,
  animateSolutionsHowItWorks,
  animateSolutionsLevel,
} from './utils/solutions';

window.addEventListener('load', () => {
  setTimeout(() => {
    // Animations communes à toutes les pages
    animateFooter();

    // Animations spécifiques à la page d'accueil
    const isHomePage =
      window.location.pathname === '/' ||
      window.location.pathname === '/home' ||
      window.location.pathname === '/index.html';

    if (isHomePage) {
      initHeroAnimation();
      initHIWAnimation();
      initPointsAnimation();
      initSolutionsAnimation();
      initReasonsAnimation();
      initTakeCareAnimation();
    }

    // Animations spécifiques à la page solutions
    const isSolutionsPage = window.location.pathname.includes('/solutions');

    if (isSolutionsPage) {
      animateSolutionsHero();
      animateSolutionsHowItWorks();
      animateSolutionsLevel();
    }
  }, 100);
});
