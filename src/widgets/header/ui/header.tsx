import { memo } from 'react';
import { Box, Container, Flex } from '@radix-ui/themes';
import styles from './header.module.scss';
import { AvatarDropdown } from './avatar-dropdown/avatar-dropdown';
import { BurgerMenu } from './burger-menu/burger-menu';
import { BurgerButton } from './burger-button/burger-button';
import { Navigation } from './navigation/navigation';
import { useHeaderMenu } from '../lib/use-header-menu';
import { LoginButton } from './login-button/login-button';
import { AppLink } from '@/shared/ui/app-link';
import { AppRoutes } from '@/shared/lib/const';

interface AppHeaderProps {
    data: any;
    logout: () => void;
}

export const Header = memo(({ logout, data }: AppHeaderProps) => {
    const { isMenuOpen, toggleMenu } = useHeaderMenu();

    return (
        <header className={styles.header}>
            <Container px="4">
                <Flex align="center" justify="between">
                    <Box>
                        <AppLink to={AppRoutes.MAIN}>Logo</AppLink>
                    </Box>

                    <Navigation />

                    <Box display={{ initial: 'none', sm: 'block' }}>
                        {data ? (
                            <AvatarDropdown data={data} logout={logout} />
                        ) : (
                            <LoginButton />
                        )}
                    </Box>

                    <BurgerButton
                        toggleMenu={toggleMenu}
                        isMenuOpen={isMenuOpen}
                    />
                </Flex>
                {isMenuOpen && <BurgerMenu data={data} logout={logout} />}
            </Container>
        </header>
    );
});
