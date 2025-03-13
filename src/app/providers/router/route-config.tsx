import {RouteProps} from "react-router-dom";
import {MainPage} from "@/pages/main";
import {ProjectsPage} from "@/pages/projects";
import {AppRoutes} from "@/shared/lib/const";

export const routeConfig: RouteProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>
    },
    {
        path: AppRoutes.PROJECTS,
        element: <ProjectsPage/>
    }
]