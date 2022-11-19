/* eslint-disable class-methods-use-this */
/* eslint-disable no-continue */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import { Subject } from 'rxjs';
// eslint-disable-next-line import/no-cycle
import { TOTAL_SCREEN } from './commonUtil';

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();

  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById('Contact Me');
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: 'smooth' });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById('Home');
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: 'smooth' });
  };

  isEementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.Botton;

    let partiallyVisible = element < window.innerHeight && elementBottom >= 0;
    let completelyVisible = element >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case 'Partial':
        return partiallyVisible;
      case 'complete':
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREEN) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, 'complete');
      let partiallyVisible = this.isElementInView(screenFromDOM, 'partial');

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          // eslint-disable-next-line dot-notation
          screen['alreadyRendered'] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
