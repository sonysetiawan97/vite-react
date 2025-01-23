import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import axios from 'axios';
import { axiosSetup } from './utils/axiosSetup.ts';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './utils/i18n.ts';

import { AppRoutes } from './routes/AppRoutes.tsx';

axiosSetup(axios);

const { VITE_MODE, VITE_MODE_MOCK } = import.meta.env;

if (VITE_MODE === 'development' && VITE_MODE_MOCK === 'true') {
  const { enableMocks } = await import('./mocks');
  enableMocks();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppRoutes />
    </I18nextProvider>
  </StrictMode>
);
