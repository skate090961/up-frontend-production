import { memo, Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from './route-config';
import { PageLoader } from '@/widgets/page-loader';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return <Routes>{routeConfig.map(renderWithWrapper)}</Routes>;
});
