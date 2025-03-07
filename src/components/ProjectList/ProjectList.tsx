import {Grid, Skeleton} from "@radix-ui/themes";
import {ProjectCard} from "@/pages/ProjectsPage/ProjectsPage";
import ProjectPreviewCard from "@/components/ProjectPreviewCard/ProjectPreviewCard";

interface ProjectListProps {
    projects: ProjectCard[]
    isLoading: boolean
}

const ProjectList = ({projects, isLoading}: ProjectListProps) => {
    const SKELETONS_AMOUNT = 6;

    const projectPreviewCards = projects.map((project) => <ProjectPreviewCard key={project.id} {...project}/>)
    const skeletons = [...Array(SKELETONS_AMOUNT)].map((_, index) => <Skeleton key={index} width={'100%'} height={'445px'}/>)

    return (
            <Grid columns={{initial: "1", sm: "2", md: "3"}} gap="5" width="auto">
                {isLoading ? skeletons : projectPreviewCards}
            </Grid>
    )
}

export default ProjectList