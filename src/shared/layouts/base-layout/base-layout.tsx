import { Box, Container } from '@radix-ui/themes';
import { ReactElement } from 'react';
import styles from './base-layout.module.scss';

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
            </Container>
            {footer}
        </>
    );
};
