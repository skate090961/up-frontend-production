import { Box, Container } from '@radix-ui/themes';
import styles from './base-layout.module.scss';
import { ReactElement } from 'react';

interface BaseLayoutProps {
    header: ReactElement;
    content: ReactElement;
    footer: ReactElement;
}

export const BaseLayout = ({ content, header, footer }: BaseLayoutProps) => {
    return (
        <>
            <Box className={styles.background} />
            {header}
            <Container px="4">
                <main className={styles.main}>{content}</main>
                {footer}
            </Container>
        </>
    );
};
