import { Layout } from './ui/layout';
import { ProjectFilters, ProjectsList } from '@/features/projects-list';
import { PageInfo } from './ui/page-info';

const ProjectsLazy = () => {
    return (
        <Layout
            pageInfo={<PageInfo />}
            actions={<ProjectFilters />}
            content={<ProjectsList />}
        />
    );
};

export default ProjectsLazy;
