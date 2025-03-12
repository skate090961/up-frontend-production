import {lazy} from "react";

export const ProjectsLazy = lazy(() => new Promise(res => {
    //TODO: имитация задержки для проверки лези лоадинга
    setTimeout(() => res(import('./Projects')), 1500)
}))