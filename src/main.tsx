// Safe-guard fetch getter/setter check
try {
  const originalFetch = window.fetch;
  let customFetch = originalFetch;
  Object.defineProperty(window, "fetch", {
    get() {
      return customFetch;
    },
    set(val) {
      customFetch = val;
    },
    configurable: true,
    enumerable: true,
  });
} catch (e) {
  // Silent fallback
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
