import { FileTextIcon, HomeIcon, StarIcon } from '@radix-ui/react-icons';
import { AppRoutes } from '@/shared/lib/const';

export const NAV_LINKS = [
    {
        name: 'Главная',
        path: AppRoutes.MAIN,
        icon: <HomeIcon />,
    },
    {
        name: 'Каталог проектов',
        path: AppRoutes.PROJECTS,
        icon: <FileTextIcon />,
    },
    {
        name: 'Premium',
        path: '/premium',
        icon: <StarIcon />,
    },
];
