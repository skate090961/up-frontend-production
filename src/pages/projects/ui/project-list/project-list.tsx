import {Flex, Grid, Skeleton, Text} from "@radix-ui/themes";
import {memo} from "react";
import {ProjectPreviewCard} from "../project-preview-card/project-preview-card";

interface ProjectListProps {
    projects: any
    isLoading: boolean
}

const getSkeletons = () => {
    const SKELETONS_AMOUNT = 6;
    return [...Array(SKELETONS_AMOUNT)]
        .map((_, index) => (
                <Skeleton key={index} width={'100%'} height={'445px'}/>
            )
        )
}

export const ProjectList = memo(({projects, isLoading}: ProjectListProps) => {
    if (!isLoading && !projects?.length) {
        return (
            <Flex justify={'center'}>
                <Text size={'4'}>
                    Ничего не найдено
                </Text>
            </Flex>
        )
    }

    const projectPreviewCards = projects?.map((project) => <ProjectPreviewCard key={project.id} {...project}/>)
    const skeletons = getSkeletons()

    return (
        <Grid columns={{initial: "1", sm: "2", md: "3"}} gap="5" width="auto">
            {isLoading ? skeletons : projectPreviewCards}
        </Grid>
    )
})