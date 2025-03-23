import { CodeIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';

export const PROFILE_LINKS = [
    {
        name: 'Профиль',
        path: '/profile',
        icon: <PersonIcon />,
    },
    {
        name: 'Мои проекты',
        path: '/profile/projects',
        icon: <CodeIcon />,
    },
    {
        name: 'Настройки',
        path: '/settings',
        icon: <GearIcon />,
    },
];
