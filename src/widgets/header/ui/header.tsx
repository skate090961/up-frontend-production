import {memo} from 'react';
import {Box, Container, Flex, Link} from '@radix-ui/themes';
import styles from './header.module.scss';
import {ProfileMenu} from "./profile-menu/profile-menu";
import {BurgerMenu} from "./burger-menu/burger-menu";
import {BurgerButton} from "./burger-button/burger-button";
import {Navigation} from "./navigation/navigation";
import {useHeaderMenu} from "../lib/use-header-menu";
import {LoginButton} from "./login-button/login-button";

interface AppHeaderProps {
    data: any
    logout: () => void
}

export const Header = memo(({logout, data}: AppHeaderProps) => {
    const {isMenuOpen, toggleMenu} = useHeaderMenu()

    return (
        <header className={styles.header}>
            <Container px={'4'}>
                <Flex align={'center'} justify={'between'}>

                    <Box>
                        <Link>Logo</Link>
                    </Box>

                    <Navigation/>

                    <Box display={{initial: 'none', sm: 'block'}}>
                        {data ? <ProfileMenu data={data} logout={logout}/> : <LoginButton/>}
                    </Box>

                    <BurgerButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>

                </Flex>
                {isMenuOpen && <BurgerMenu data={data} logout={logout}/>}
            </Container>
        </header>
    );
});