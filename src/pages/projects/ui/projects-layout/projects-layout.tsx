import {Box, Heading, Text} from "@radix-ui/themes";

export const ProjectsLayout = ({children}) => {
    return (
        <Box>
            <Heading size={'7'}>Каталог проектов</Heading>
            <Text as={'p'} color={'gray'} mb={'4'}>
                Просмотрите нашу коллекцию проектов, чтобы попрактиковаться и улучшить свои навыки
            </Text>
            {children}
        </Box>
    )
}