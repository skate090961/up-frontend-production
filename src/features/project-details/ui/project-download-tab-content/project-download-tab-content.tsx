import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { ProjectDownloadCards } from '../project-download-cards/project-download-cards';
import { AppAccordion } from '@/shared/ui/app-accordion';

const accordionItems = [
    {
        value: 'item-1',
        trigger: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
        value: 'item-2',
        trigger: 'Is it unstyled?',
        content:
            "Yes. It's unstyled by default, giving you freedom over the look and feel.",
    },
    {
        value: 'item-3',
        trigger: 'Can it be animated?',
        content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
    },
];

export const ProjectDownloadTabContent = () => {
    return (
        <Box>
            <Heading size="7">Скачать ресурсы для проекта</Heading>
            <Text as="p" color="gray" mb="4">
                Загрузите все необходимые материалы, чтобы начать работу с
                проектом. Выберите вариант, который лучше всего подходит вашему
                стилю обучения и уровню опыта.
            </Text>
            <Flex direction="column" gap="4">
                <ProjectDownloadCards id={3} />
                <Flex direction="column" gap="2">
                    <Heading as="h2" size="6">
                        Часто задаваемые вопросы
                    </Heading>
                    <AppAccordion items={accordionItems} />
                </Flex>
            </Flex>
        </Box>
    );
};
