import { Flex, Heading, Text } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { AppLink } from '@/shared/ui/app-link';
import { getRouteMain } from '@/shared/routes';
import styles from './not-found-page.module.scss';

export const NotFoundPage = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            className={styles.container}
        >
            <Heading size="9" mb="2">
                404
            </Heading>
            <Text as="p" size="6" mb="6" color="gray">
                Страница, которую вы ищете, не существует.
            </Text>
            <AppLink to={getRouteMain()}>
                Вернуться на главную
                <ArrowRightIcon />
            </AppLink>
        </Flex>
    );
};
