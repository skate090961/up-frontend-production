import { Box, Button, Flex, Separator, Text } from '@radix-ui/themes';
import { ExitIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import styles from './burger-menu.module.scss';
import { AppAvatar } from '@/shared/ui/app-avatar';
import { AppNavigation } from '@/shared/ui/app-navigation';
import { NAV_LINKS } from './config';
import { PROFILE_LINKS } from '../../lib/profile-links';

interface BurgerMenuProps {
    data: any;
    logout: () => void;
}

const ProfileInfo = ({ data, logout }: BurgerMenuProps) => {
    return (
        <>
            <Flex align="center" gap="2">
                <AppAvatar
                    size="2"
                    src={data.avatar}
                    userName={data.userName}
                />
                <Text>{data.userName}</Text>
            </Flex>
            <Flex gap="5" justify="between" direction="column" mt="5">
                <AppNavigation
                    links={PROFILE_LINKS}
                    classNames={styles.navMenu}
                />
            </Flex>
            <Separator my="4" size="4" />
            <Button onClick={logout} variant="ghost" highContrast color="red">
                <ExitIcon />
                Выйти
            </Button>
        </>
    );
};

export const BurgerMenu = ({ logout, data }: BurgerMenuProps) => {
    return (
        <Box className={styles.menu}>
            <AppNavigation links={NAV_LINKS} classNames={styles.navMenu} />
            <Flex direction="column">
                <Separator my="5" size="4" />
                {data ? (
                    <ProfileInfo data={data} logout={logout} />
                ) : (
                    <Button variant="classic">
                        Войти с помощью GitHub
                        <GitHubLogoIcon />
                    </Button>
                )}
            </Flex>
        </Box>
    );
};
