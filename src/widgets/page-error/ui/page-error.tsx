import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { BaseLayout } from '@/shared/layouts';
import styles from './page-error.module.scss';

const PageErrorContent = () => {
    const redirectHandler = () => {
        location.reload();
    };

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            className={styles.container}
        >
            <Heading size="9" mb="2">
                Что-то пошло не так!
            </Heading>
            <Text as="p" size="6" mb="6" color="gray">
                Попробуйте обновить страницу
            </Text>
            <Button onClick={redirectHandler} size="3">
                Обновить страницу
            </Button>
        </Flex>
    );
};

export const PageError = () => {
    return <BaseLayout content={<PageErrorContent />} />;
};
