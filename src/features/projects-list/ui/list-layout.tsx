import { Grid } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface ListLayoutProps {
    children: ReactNode;
}

export const ListLayout = ({ children }: ListLayoutProps) => {
    return (
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="5" width="auto">
            {children}
        </Grid>
    );
};
