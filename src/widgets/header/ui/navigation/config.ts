import { getRouteMain, getRouteProjects } from '@/shared/routes';

export const NAV_LINKS = [
    {
        name: 'Главная',
        path: getRouteMain(),
    },
    {
        name: 'Каталог проектов',
        path: getRouteProjects(),
    },
    {
        name: 'Premium',
        path: '/premium',
    },
];
