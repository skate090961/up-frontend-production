import { Box } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return <Box mb="4">{children}</Box>;
};
