import React from 'react';
// eslint-disable-next-line import/no-cycle
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
