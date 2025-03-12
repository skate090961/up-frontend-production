import {lazy} from "react";

export const MainLazy = lazy(() => new Promise(res => {
    //TODO: имитация задержки для проверки лези лоадинга
    setTimeout(() => res(import('./Main')), 1500)
}))