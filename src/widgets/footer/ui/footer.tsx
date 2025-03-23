import { memo } from 'react';
import { Container } from '@radix-ui/themes';
import styles from './footer.module.scss';

export const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <Container>FOOTER</Container>
        </footer>
    );
});
