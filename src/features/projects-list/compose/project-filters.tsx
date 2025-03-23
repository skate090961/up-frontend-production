import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { AppSelect } from '@/shared/ui/app-select';
import { AppTextField } from '@/shared/ui/app-text-field';
import { FiltersLayout } from '../ui/filters-layout';
import {
    complexityOpts,
    subscriptionOpts,
    techOpts,
} from '../model/filter-options';

export const ProjectFilters = () => {
    const [complexity, setComplexity] = useState<any>('all');
    const [tech, setTechValue] = useState<any>('all');
    const [subscription, setSubscription] = useState('all');
    const [searchValue, setSearchValue] = useState('');

    return (
        <FiltersLayout
            textField={
                <AppTextField
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="Поиск по проектам..."
                    slotLeft={<MagnifyingGlassIcon height="16" width="16" />}
                />
            }
            filters={
                <>
                    <AppSelect
                        value={tech}
                        defaultValue={tech}
                        options={techOpts}
                        contentVariant="soft"
                        label="Технологии"
                        onValueChange={setTechValue}
                    />
                    <AppSelect
                        value={subscription}
                        defaultValue={subscription}
                        options={subscriptionOpts}
                        contentVariant="soft"
                        label="Подписка"
                        onValueChange={setSubscription}
                    />
                    <AppSelect
                        value={complexity}
                        defaultValue={complexity}
                        options={complexityOpts}
                        contentVariant="soft"
                        label="Уровень"
                        onValueChange={setComplexity}
                    />
                </>
            }
        />
    );
};
