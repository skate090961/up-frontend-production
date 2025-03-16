import { lazy } from 'react';

export const ProjectDetailsLazy = lazy(
    () =>
        new Promise((res) => {
            // TODO: имитация задержки для проверки лези лоадинга
            // @ts-ignore
            setTimeout(() => res(import('./project-details')), 1500);
        }),
);
