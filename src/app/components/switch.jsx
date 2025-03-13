'use client';
import { useTheme } from 'context/theme-context';

import 'public/css/buttons/switch.css';

export default function Switch() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className='custom-container'>
      <div className='custom-content'>
        <div className='custom-circle' />
        <label htmlFor='switch' className='custom-label'>
          <input type='checkbox' id='switch' className='custom-input' checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
          <div className='custom-switch'>
            <div className='custom-arrow'>
              <div className='custom-arrow-inner' />
            </div>
            <div className='custom-skew-left' />
            <div className='custom-skew-right' />
          </div>
        </label>
        <div className='custom-line' />
      </div>
    </div>
  );
};