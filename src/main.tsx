import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Theme} from "@radix-ui/themes";
import App from './app/App.tsx';
import './app/styles/index.scss';
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Theme accentColor="violet" appearance="dark">
                <App/>
            </Theme>
        </BrowserRouter>
    </StrictMode>,
);
