import {lazy} from "react";

export const ProjectDetailedLazy = lazy(() => new Promise(res => {
    //TODO: имитация задержки для проверки лези лоадинга
    setTimeout(() => res(import('./ProjectDetailed')), 1500)
}))