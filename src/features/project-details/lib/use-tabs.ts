import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { TabConfig, TabValues } from '../model/types/tabs';
import { DEFAULT_TAB, TAB_QUERY_KEY, TABS } from '../config/tabs';

interface UseTabsResult {
    activeTab: TabValues;
    tabs: TabConfig[];
    setActiveTab: (newTab: TabValues) => void;
}

export const useTabs = (): UseTabsResult => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabFromUrl = searchParams.get(TAB_QUERY_KEY);

    const isValidTab = TABS.some((t) => t.value === tabFromUrl && !t.disabled);

    const activeTab = (isValidTab ? tabFromUrl : DEFAULT_TAB) as TabValues;

    const setActiveTab = useCallback(
        (newTab: TabValues) => setSearchParams({ tab: newTab }),
        [setSearchParams],
    );

    useEffect(() => {
        if (!isValidTab) {
            setActiveTab(DEFAULT_TAB);
        }
    }, [isValidTab, setActiveTab]);

    return {
        activeTab,
        tabs: TABS,
        setActiveTab,
    };
};
