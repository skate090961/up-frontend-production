import { Flex, Spinner } from '@radix-ui/themes';
import styles from './page-loader.module.scss';

export const PageLoader = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            className={styles.container}
        >
            <Spinner size="3" />
        </Flex>
    );
};
