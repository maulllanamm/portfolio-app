/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import React, { Component } from 'react';

export default class Animations extends Component {
  static animations = new Animations();

  fadeInScreen = (screen_name) => {
    let screen = document.getElementById(screen_name);
    if (!screen_name || !screen) return;

    screen.style.opacity = '5';
    screen.style.transform = 'translateY(1px)';
  };
}
