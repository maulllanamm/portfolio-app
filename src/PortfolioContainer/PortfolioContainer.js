import React from 'react';
import { TOTAL_SCREEN } from '../util/commonUtil';

export default function PortfolioContainer() {
  const mapAllScreens = () =>
    TOTAL_SCREEN.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name} />
      )
    );

  return <div className="portfolio-container">{mapAllScreens()}</div>;
}
