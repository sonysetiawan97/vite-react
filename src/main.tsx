import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import axios from 'axios';
import { axiosSetup } from './utils/axiosSetup.ts';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './utils/i18n.ts';

import { AppRoutes } from './routes/AppRoutes.tsx';

axiosSetup(axios);

const { VITE_APP_ENV, VITE_APP_MODE_MOCK } = import.meta.env;

if (VITE_APP_ENV === 'development' && VITE_APP_MODE_MOCK === 'true') {
  const { server } = await import('./mocks/browser.ts');
  server.start();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppRoutes />
    </I18nextProvider>
  </StrictMode>
);
