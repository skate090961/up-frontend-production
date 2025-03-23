import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createConfigureStore } from './store';

interface StoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const store = createConfigureStore();

    return <Provider store={store}>{children}</Provider>;
};
