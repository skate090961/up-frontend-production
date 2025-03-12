import {memo, Suspense, useCallback} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {routeConfig} from "./routeConfig";

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<div>Loading</div>}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return <Routes>{routeConfig.map(renderWithWrapper)}</Routes>;
});