import { useCallback, useEffect, useState } from 'react';
import { Box } from '@radix-ui/themes';
import { useSearchParams } from 'react-router-dom';
import { ProjectDetailTabContent } from './project-detail-tab-content/project-detail-tab-content';
import { ProjectDownloadTabContent } from './project-download-tab-content/project-download-tab-content';
import { AppTabs, Tab } from '@/shared/ui/app-tabs';

enum TabValues {
    Details = 'details',
    Downloads = 'downloads',
}

const ProjectDetailsLazy = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const tabs: Tab<TabValues>[] = [
        {
            value: TabValues.Details,
            label: 'Информация о проекте',
            content: <ProjectDetailTabContent />,
            disabled: false,
        },
        {
            value: TabValues.Downloads,
            label: 'Скачать материалы',
            content: <ProjectDownloadTabContent />,
            disabled: false,
        },
    ];

    const TAB_QUERY_KEY = 'tabs';

    const tabParam = searchParams.get(TAB_QUERY_KEY);

    const isValidTab = (tab: string | null): tab is TabValues =>
        tabs.some((t) => t.value === tab);

    const currentTabState = isValidTab(tabParam) ? tabParam : TabValues.Details;

    const [currentTab, setCurrentTab] = useState<TabValues>(currentTabState);

    useEffect(() => {
        if (!isValidTab(tabParam)) {
            setSearchParams({ [TAB_QUERY_KEY]: TabValues.Details });
        }
    }, [tabParam, setSearchParams]);

    const handleTabChange = useCallback(
        (value: TabValues) => {
            setCurrentTab(value);
            setSearchParams({ [TAB_QUERY_KEY]: value });
        },
        [setSearchParams],
    );

    return (
        <Box>
            <Box mb="4">
                <AppTabs
                    tabs={tabs}
                    onValueChange={handleTabChange}
                    defaultValue={currentTab}
                />
            </Box>
        </Box>
    );
};

export default ProjectDetailsLazy;
