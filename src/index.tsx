import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import LoadingPage from '@/components/LoadingPage';
import { ColorContextProvider } from './config';

import './tailwind.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <ColorContextProvider>
    <React.Suspense fallback={<LoadingPage />}>
      <App />
    </React.Suspense>
  </ColorContextProvider>
);
