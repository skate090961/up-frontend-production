import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { DownloadIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import styles from './project-download-cards.module.scss';

interface DownloadCard {
    icon: ReactNode;
    title: string;
    description: string;
    buttonName: string;
}

interface ProjectDownloadCardsProps {
    cards: DownloadCard[];
    className?: string;
}

export const ProjectDownloadCards = ({
    cards,
    className,
}: ProjectDownloadCardsProps) => {
    return (
        <Grid
            columns={{ initial: '1', sm: '2', md: '3' }}
            gap="5"
            width="auto"
            className={className}
        >
            {cards.map((card) => (
                <Card key={card.title} size="3" variant="classic">
                    <article className={styles.article}>
                        <Flex className={styles.bgIcon} mb="3">
                            {card.icon}
                        </Flex>
                        <Box mb="4">
                            <Heading as="h3" size="5" mb="1">
                                {card.title}
                            </Heading>
                            <Text color="gray" as="p">
                                {card.description}
                            </Text>
                        </Box>
                        <Flex className={styles.controlContainer}>
                            <Button variant="outline">
                                <DownloadIcon />
                                {card.buttonName}
                            </Button>
                        </Flex>
                    </article>
                </Card>
            ))}
        </Grid>
    );
};
