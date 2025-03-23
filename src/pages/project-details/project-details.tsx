import { ProjectDetailsTabs } from '@/features/project-details';
import { Layout } from './ui/layout';

const ProjectDetailsLazy = () => {
    return (
        <Layout>
            <ProjectDetailsTabs />
        </Layout>
    );
};

export default ProjectDetailsLazy;
