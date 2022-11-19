import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import WhatsappIcon from '../../../assets/Icons/whatsapp.svg';
import LinkedinIcon from '../../../assets/Icons/linkedin.svg';
import GithubIcon from '../../../assets/Icons/github.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://wa.me/+6281395007665" target="_blank">
                <img src={WhatsappIcon} />
              </a>
              <a
                href="https://linkedin.com/in/maulanamuhammad1/"
                target="_blank">
                <img src={LinkedinIcon} />
              </a>
              <a href="https://github.com/maulllanamm" target="_blank">
                <img src={GithubIcon} />
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              {}
              Hi, I am <span className="highlight-text">Maulana Muhammad</span>
            </span>
          </div>
          <div className="profile-detail-role">
            <span className="primary-text">
              {}
              <h1>
                {}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Web Developer 🔥',
                    2000,
                    'Frontend Developer 💻',
                    2000,
                    'Backend Developer 🌐',
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Build and Develop frontend & backend web application .
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" type="button">
              Hire Me
            </button>
            <a href="CV-MaulanaMuhammad.pdf" download="CV Maulana Muhammad.pdf">
              <button className="btn highlighted-btn" type="button">
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">{}</div>
        </div>
      </div>
    </div>
  );
}
