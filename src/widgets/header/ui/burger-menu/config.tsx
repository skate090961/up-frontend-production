import { FileTextIcon, HomeIcon, StarIcon } from '@radix-ui/react-icons';
import { getRouteMain, getRouteProjects } from '@/shared/routes';

export const NAV_LINKS = [
    {
        name: 'Главная',
        path: getRouteMain(),
        icon: <HomeIcon />,
    },
    {
        name: 'Каталог проектов',
        path: getRouteProjects(),
        icon: <FileTextIcon />,
    },
    {
        name: 'Premium',
        path: '/premium',
        icon: <StarIcon />,
    },
];
