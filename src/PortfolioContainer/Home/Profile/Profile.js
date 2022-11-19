import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true" />
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
