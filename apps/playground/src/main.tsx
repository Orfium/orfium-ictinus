import { ThemeProvider as EmotionThemeProvider } from '@orfium/ictinus';
import { ThemeProvider } from '@orfium/ictinus/vanilla';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <EmotionThemeProvider>
        <App />
      </EmotionThemeProvider>
    </ThemeProvider>
  </StrictMode>
);
