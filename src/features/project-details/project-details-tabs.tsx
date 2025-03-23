import { AppTabs } from '@/shared/ui/app-tabs';
import { useTabs } from './lib/use-tabs';

export const ProjectDetailsTabs = () => {
    const { activeTab, setActiveTab, tabs } = useTabs();

    return (
        <AppTabs tabs={tabs} onValueChange={setActiveTab} value={activeTab} />
    );
};
