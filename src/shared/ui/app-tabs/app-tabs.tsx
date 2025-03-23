import React, { ReactNode } from 'react';
import { Box, Flex, Tabs } from '@radix-ui/themes';
import { LockClosedIcon } from '@radix-ui/react-icons';

export interface Tab<T> {
    value: T;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}

interface AppTabsProps<T extends string> {
    value?: T;
    defaultValue?: T;
    tabs: Tab<T>[];
    onValueChange?: (value: T) => void;
}

export const AppTabs = <T extends string>({
    defaultValue,
    value,
    tabs,
    onValueChange,
}: AppTabsProps<T>) => {
    const handleChange = (value: string) => onValueChange?.(value as T);

    return (
        <Tabs.Root
            defaultValue={defaultValue}
            onValueChange={handleChange}
            value={value}
        >
            <Tabs.List>
                {tabs.map((tab) => (
                    <Tabs.Trigger
                        key={tab.value}
                        value={tab.value}
                        disabled={tab.disabled}
                    >
                        <Flex align="center" gap="2">
                            {tab.disabled && <LockClosedIcon />}
                            {tab.label}
                        </Flex>
                    </Tabs.Trigger>
                ))}
            </Tabs.List>

            <Box pt="4">
                {tabs.map((tab) => (
                    <Tabs.Content key={tab.value} value={tab.value}>
                        {tab.content}
                    </Tabs.Content>
                ))}
            </Box>
        </Tabs.Root>
    );
};
