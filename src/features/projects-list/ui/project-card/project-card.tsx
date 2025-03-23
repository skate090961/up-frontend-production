import { Button, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { memo } from 'react';
import styles from './project-card.module.scss';

import { AppLink } from '@/shared/ui/app-link';
import { getRouteProjectDetails } from '@/shared/routes';
import {
    ProjectAccessBadge,
    ProjectComplexityBadge,
    ProjectTechsBadge,
} from '@/entities/project';

interface ProjectCardProps {
    id: number;
    title: string;
    image: string;
    description: string;
    isFree: boolean;
    complexity: any;
    techs: any;
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const { title, image, description, isFree, complexity, techs, id } = props;

    return (
        <Card size="2" variant="classic" className={styles.card}>
            <article className={styles.article}>
                <Inset clip="padding-box" side="top" pb="current">
                    <img src={image} alt={title} className={styles.image} />
                    <ProjectAccessBadge
                        isFree={isFree}
                        className={styles.accessBadge}
                    />
                </Inset>
                <Heading as="h3" size="5" mb="1">
                    {title}
                </Heading>
                <Text as="p" color="gray" size="2" mb="2">
                    {description}
                </Text>
                <Flex direction="column" className={styles.controlContainer}>
                    <Flex direction="column" mb="4">
                        <ProjectComplexityBadge level={complexity} />
                        <ProjectTechsBadge techs={techs} />
                    </Flex>
                    <Button asChild>
                        <AppLink to={getRouteProjectDetails(String(id))}>
                            Подробнее
                            <ArrowRightIcon />
                        </AppLink>
                    </Button>
                </Flex>
            </article>
        </Card>
    );
});
