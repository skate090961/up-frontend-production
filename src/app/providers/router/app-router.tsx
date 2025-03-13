import {memo, Suspense, useCallback} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {routeConfig} from "./route-config";
import {Spinner} from "@radix-ui/themes";

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<Spinner />}>{route.element}</Suspense>
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