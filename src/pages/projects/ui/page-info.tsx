import { Box, Heading, Text } from '@radix-ui/themes';

export const PageInfo = () => {
    return (
        <Box>
            <Heading size="7">Каталог проектов</Heading>
            <Text as="p" color="gray">
                Просмотрите нашу коллекцию проектов, чтобы попрактиковаться и
                улучшить свои навыки
            </Text>
        </Box>
    );
};
