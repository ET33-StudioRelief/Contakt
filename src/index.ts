import './index.css';

import { animateFooter } from './utils/components';
import {
  initHeroHistoryAnimation,
  initHistoryExperienceAnimation,
  initHistoryKiwiAnimation,
} from './utils/history';
import {
  initHpHeroAnimation,
  initHpHIWAnimation,
  initHpPointsAnimation,
  initHpReasonsAnimation,
  initHpReasonsMobileAnimation,
  initHpSolutionsAnimation,
  initHpTakeCareAnimation,
} from './utils/home';
import {
  initMissionCardSelectionMobile,
  initMissionHomemadeAnimation,
  initMissionImpactAnimation,
  initMissionSelectionAnimation,
  initMissionStarterAnimation,
} from './utils/mission';
import {
  initSolutionsHeroAnimation,
  initSolutionsHowItWorksAnimation,
  initSolutionsLevelAnimation,
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
      initHpHeroAnimation();
      initHpHIWAnimation();
      initHpPointsAnimation();
      initHpSolutionsAnimation();
      initHpReasonsAnimation();
      initHpTakeCareAnimation();
      if (window.innerWidth < 768) {
        initHpReasonsMobileAnimation();
      }
    }

    // Animations spécifiques à la page solutions
    const isSolutionsPage = window.location.pathname.includes('/solutions');

    if (isSolutionsPage) {
      initSolutionsHeroAnimation();
      initSolutionsHowItWorksAnimation();
      initSolutionsLevelAnimation();
    }

    // Animations spécifiques à la page mission
    const isHistoryPage = window.location.pathname.includes('/notre-histoire');

    if (isHistoryPage) {
      initHeroHistoryAnimation();
      initHistoryKiwiAnimation();
      initHistoryExperienceAnimation();
    }

    // Animations spécifiques à la page mission
    const isMissionPage = window.location.pathname.includes('/notre-mission');

    if (isMissionPage) {
      initMissionStarterAnimation();
      initMissionHomemadeAnimation();
      initMissionSelectionAnimation();
      initMissionImpactAnimation();
      if (window.innerWidth < 768) {
        initMissionCardSelectionMobile();
      }
    }
  }, 100);
});
