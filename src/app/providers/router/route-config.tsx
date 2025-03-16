import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { ProjectsPage } from '@/pages/projects';
import {
    getRouteMain,
    getRouteProjectDetails,
    getRouteProjects,
} from '@/shared/routes';
import { ProjectDetailsPage } from '@/pages/project-details';

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
];
