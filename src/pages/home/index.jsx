import React from 'react';
import { ThemeContext } from '../../context/themeContext';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ThemeContext.Consumer>
        {(value) => (
          <>
            <p>
              Current Theme is
              {value.theme}
            </p>
            <button
              type="button"
              onClick={() =>
                value.setTheme(value.theme === 'light' ? 'dark' : 'light')
              }
            >
              Change THEME
            </button>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Home;
