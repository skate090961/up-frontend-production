import { Box, Flex } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface LayoutProps {
    actions: ReactNode;
    pageInfo: ReactNode;
    content: ReactNode;
}

export const Layout = ({ actions, pageInfo, content }: LayoutProps) => {
    return (
        <Box>
            <Flex direction="column" gap="5">
                {pageInfo}
                {actions}
                {content}
            </Flex>
        </Box>
    );
};
