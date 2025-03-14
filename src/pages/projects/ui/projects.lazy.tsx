import { lazy } from 'react';

export const ProjectsLazy = lazy(
    () =>
        new Promise((res) => {
            // TODO: имитация задержки для проверки лези лоадинга
            // @ts-ignore
            setTimeout(() => res(import('./projects')), 1500);
        }),
);
