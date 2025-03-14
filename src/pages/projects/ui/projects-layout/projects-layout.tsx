import { Box, Heading, Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface ProjectsLayoutProps {
    children: ReactNode;
}

export const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
    return (
        <Box>
            <Heading size="7">Каталог проектов</Heading>
            <Text as="p" color="gray" mb="4">
                Просмотрите нашу коллекцию проектов, чтобы попрактиковаться и
                улучшить свои навыки
            </Text>
            {children}
        </Box>
    );
};
