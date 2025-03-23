export enum TabValues {
    Details = 'details',
    Downloads = 'downloads',
}

export type TabConfig = {
    value: TabValues;
    label: string;
    content: React.ReactNode;
    disabled: boolean;
};
