'use client';
import { useTheme } from 'context/theme-context';

import 'public/css/buttons/switch.css';

export default function Switch() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div class="container">
        <div class="circle"></div>
        <label for="switch" class="switch">
            <input type="checkbox" id="switch" class="hidden" />
            <div class="switch-body">
                <div class="arrow">
                    <div class="arrow-inner"></div>
                </div>
                <div class="skew-box left"></div>
                <div class="skew-box right"></div>
            </div>
        </label>
        <div class="small-bar"></div>
    </div>
  );
};