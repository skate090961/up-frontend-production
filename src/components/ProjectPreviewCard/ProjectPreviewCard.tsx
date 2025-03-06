import styles from "./ProjectPreviewCard.module.scss";
import ProjectAccess from "@/components/ProjectAccess/ProjectAccessBadge";
import ProjectComplexity from "@/components/ProjectComplexity/ProjectComplexity";
import ProjectTechs from "@/components/ProjectTechs/ProjectTechs";
import {Button, Card, Flex, Heading, Inset, Text} from "@radix-ui/themes";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import {ProjectCard} from "@/pages/ProjectsPage/ProjectsPage";

const ProjectPreviewCard = ({title, image, description, isFree, complexity, techs}: ProjectCard) => {
    const isAccessValue = isFree !== undefined && isFree !== null

    return (
        <Card size="2" variant="classic" className={styles.card}>
            <article className={styles.article}>
                <Inset clip="padding-box" side="top" pb="current">
                    {image && <img
                        src={image}
                        alt={title}
                        className={styles.image}
                    />}
                    {isAccessValue && <ProjectAccess isFree={isFree} className={styles.accessBadge}/> }
                </Inset>
                <Heading as={'h3'} size={'5'} mb={'1'}>{title}</Heading>
                <Text as={'p'} color={'gray'} size={'2'} mb={'2'}>{description}</Text>
                <Flex direction="column" className={styles.controlContainer}>
                    <Flex direction="column" mb={'4'}>
                        {complexity && <ProjectComplexity level={complexity}/>}
                        {techs && <ProjectTechs techs={techs}/>}
                    </Flex>
                    <Button>
                        Подробнее
                        <ArrowRightIcon/>
                    </Button>
                </Flex>
            </article>
        </Card>
    )
}

export default ProjectPreviewCard