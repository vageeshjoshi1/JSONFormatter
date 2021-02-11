import React from 'react';

const Header = ({ theme, onThemeClick }) => ( 
  <header className="header">
    <span className="w-50">JSON Formatter</span>
    <div className="theme-toggle">
      Theme Selection &nbsp;
      <button
        className={theme === 'light' ? 'selected' : ''}
        onClick={() => onThemeClick('light')}
      >
        Light
      </button>
      <button
        className={theme === 'dark' ? 'selected' : ''}
        onClick={() => onThemeClick('dark')}
      >
        Dark
      </button>
    </div>
  </header>
);

export default Header;
