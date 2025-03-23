import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';

export const createConfigureStore = () => {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: true,
    });
};
