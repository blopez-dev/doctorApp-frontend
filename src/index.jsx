import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from './application/application';

const isMockEnabled = import.meta.env.VITE_MOCK_ENABLED === 'true';

async function prepare() {
  if (isMockEnabled) {
    const { worker } = await import('./mocks/browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}

prepare().then(() => {
  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      {isMockEnabled ? (
        <ConfigProvider>
          <BrowserRouter>
            <App data-testid="Application" />
          </BrowserRouter>
        </ConfigProvider>
      ) : (
        <BrowserRouter>
          <App data-testid="Application" />
        </BrowserRouter>
      )}
    </React.StrictMode>
  );
});