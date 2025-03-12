import styles from "./ProjectPreviewCard.module.scss";
import ProjectAccess from "@/pages/projects/ui/ProjectAccess/ProjectAccessBadge";
import ProjectComplexity from "@/pages/projects/ui/ProjectComplexity/ProjectComplexity";
import ProjectTechs from "@/pages/projects/ui/ProjectTechs/ProjectTechs";
import {Button, Card, Flex, Heading, Inset, Text} from "@radix-ui/themes";
import {ArrowRightIcon} from "@radix-ui/react-icons";

const ProjectPreviewCard = ({title, image, description, isFree, complexity, techs}: any) => {
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