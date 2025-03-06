import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Theme} from "@radix-ui/themes";
import App from './App.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Theme accentColor="violet" appearance="dark">
            <App/>
        </Theme>
    </StrictMode>,
);
