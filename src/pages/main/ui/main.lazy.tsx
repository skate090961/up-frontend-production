import { lazy } from 'react';

export const MainLazy = lazy(
    () =>
        new Promise((res) => {
            // TODO: имитация задержки для проверки лези лоадинга
            // @ts-ignore
            setTimeout(() => res(import('./main')), 1500);
        }),
);
