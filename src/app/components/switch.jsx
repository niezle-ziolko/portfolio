'use client';
import { useTheme } from 'context/theme-context';

import 'public/css/buttons/switch.css';

export default function Switch() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div class='custom-container'>
      <div class='custom-content'>
        <div class='custom-circle' />
        <label htmlFor='switch' class='custom-label'>
          <input type='checkbox' id='switch' class='custom-input' checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
          <div class='custom-switch'>
            <div class='custom-arrow'>
              <div class='custom-arrow-inner' />
            </div>
            <div class='custom-skew-left' />
            <div class='custom-skew-right' />
          </div>
        </label>
        <div class='custom-line' />
      </div>
    </div>
  );
};