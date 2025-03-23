import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import {
    Crosshair2Icon,
    DownloadIcon,
    FigmaLogoIcon,
    FileIcon,
} from '@radix-ui/react-icons';
import styles from './project-download-cards.module.scss';

enum DownloadCardType {
    FIGMA = 'figma',
    TEMPLATE = 'template',
    BUG = 'bug',
}

interface ProjectDownloadCardsProps {
    id: number;
    className?: string;
}

const cards = [
    {
        type: DownloadCardType.FIGMA,
        title: 'Файл дизайна Figma',
        description:
            'Загрузите файл дизайна Figma, чтобы ссылаться на компоненты пользовательского интерфейса, макет и дизайн систему.',
        icon: <FigmaLogoIcon />,
        buttonName: 'Скачать файлы Figma',
    },
    {
        type: DownloadCardType.TEMPLATE,
        title: 'Шаблон проекта',
        description:
            'Получите стартовый шаблон со всеми необходимыми файлами и инструкциями для начала разработки.',
        icon: <FileIcon />,
        buttonName: 'Скачать Шаблон',
    },
    {
        type: DownloadCardType.BUG,
        title: 'Проект с Багами',
        description:
            'Загрузите версию проекта с преднамеренными багами, которые вы можете найти и исправить.',
        icon: <Crosshair2Icon />,
        buttonName: 'Скачать Проект',
    },
];

export const ProjectDownloadCards = ({
    id,
    className,
}: ProjectDownloadCardsProps) => {
    const downloadHandler = (type: DownloadCardType, id: number) => {
        switch (type) {
            case DownloadCardType.FIGMA:
                console.log(`fetch figma/${id}`);
                break;
            case DownloadCardType.TEMPLATE:
                console.log(`fetch template/${id}`);
                break;
            case DownloadCardType.BUG:
                console.log(`fetch bug/${id}`);
                break;
            default:
                break;
        }
    };

    return (
        <Grid
            columns={{ initial: '1', sm: '2', md: '3' }}
            gap="5"
            width="auto"
            className={className}
        >
            {cards.map((c) => (
                <Card key={c.title} size="3" variant="classic">
                    <article className={styles.article}>
                        <Flex className={styles.bgIcon} mb="3">
                            {c.icon}
                        </Flex>
                        <Box mb="4">
                            <Heading as="h3" size="5" mb="1">
                                {c.title}
                            </Heading>
                            <Text color="gray" as="p">
                                {c.description}
                            </Text>
                        </Box>
                        <Flex className={styles.controlContainer}>
                            <Button
                                variant="outline"
                                onClick={() => downloadHandler(c.type, id)}
                            >
                                <DownloadIcon />
                                {c.buttonName}
                            </Button>
                        </Flex>
                    </article>
                </Card>
            ))}
        </Grid>
    );
};
