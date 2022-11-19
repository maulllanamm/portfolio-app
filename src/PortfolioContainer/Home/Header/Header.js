/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-const */

import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TOTAL_SCREEN, GET_SCREEN_INDEX } from '../../../util/commonUtil';
import ScrollService from '../../../util/ScrollService';
import './Header.css';

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0);
    // eslint-disable-next-line no-useless-return
    return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () =>
    TOTAL_SCREEN.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}>
        <span>{screen.screen_name}</span>
      </div>
    ));

  const getHeaderOptionsClass = (index) => {
    let classes = 'header-option';
    if (index < TOTAL_SCREEN.length - 1) classes += 'header-option-seperator';
    if (selectedScreen === index) classes += 'selected-header-option';
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: 'smooth' });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>MCode</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? 'header-options show-humberger-options'
              : 'header-options'
          }>
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
