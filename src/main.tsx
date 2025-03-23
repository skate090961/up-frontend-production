import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import './app/styles/index.scss';
import { ErrorBoundary } from '@/app/providers/error-boundary';
import { StoreProvider } from '@/app/providers/store-provider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <Theme accentColor="violet" appearance="dark">
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </Theme>
            </BrowserRouter>
        </StoreProvider>
    </StrictMode>,
);
