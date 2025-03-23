import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { ProjectsPage } from '@/pages/projects';
import {
    getRouteMain,
    getRouteProjectDetails,
    getRouteProjects,
} from '@/shared/routes';
import { ProjectDetailsPage } from '@/pages/project-details';
import { NotFoundPage } from '@/pages/not-found-page';

export const routeConfig: RouteProps[] = [
    {
        path: getRouteMain(),
        element: <MainPage />,
    },
    {
        path: getRouteProjects(),
        element: <ProjectsPage />,
    },
    {
        path: getRouteProjectDetails(':id'),
        element: <ProjectDetailsPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
