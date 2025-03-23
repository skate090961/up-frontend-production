import { TabConfig, TabValues } from '../model/types/tabs';
import { ProjectDetailTabContent } from '../ui/project-detail-tab-content/project-detail-tab-content';
import { ProjectDownloadTabContent } from '../ui/project-download-tab-content/project-download-tab-content';

export const TAB_QUERY_KEY = 'tab';
export const DEFAULT_TAB = TabValues.Details;

export const TABS: TabConfig[] = [
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
