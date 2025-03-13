import styles from "./project-filter.module.scss";
import {ChangeEvent, useState} from "react";
import {Box, Button, Card, Flex, Grid, TextField} from "@radix-ui/themes";
import {MagnifyingGlassIcon, MixerHorizontalIcon} from "@radix-ui/react-icons";
import {AppSelect, Option} from "@/shared/ui/app-select";
import {ComplexityLevel, Tech} from "../projects";

interface ProjectFilterProps {
    searchValue: string
    setSearchValue: (newValue: string) => void
    techValue: Tech | 'all',
    setTechValue: (newTech: Tech) => void,
    subscriptionValue: string,
    setSubscriptionValue: (newSubscription: string) => void,
    complexityValue: ComplexityLevel | 'all',
    setComplexityValue: (newComplexity: ComplexityLevel) => void,
}

export const ProjectFilter = (props: ProjectFilterProps) => {
    const {
        searchValue,
        subscriptionValue,
        techValue,
        complexityValue,

        setComplexityValue,
        setSearchValue,
        setSubscriptionValue,
        setTechValue,
    } = props

    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const toggleFilterVisibility = () => setFilterIsOpen(prev => !prev)

    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value)

    const techOpts: Option[] = [
        {value: 'all', label: 'Все технологии'},
        {value: 'html/css', label: 'HTML/CSS'},
        {value: 'javascript', label: 'JavaScript'},
    ]

    const subscriptionOpts: Option[] = [
        {value: 'all', label: 'Все виды'},
        {value: 'free', label: 'Бесплатно'},
        {value: 'premium', label: 'Premium'},
    ]

    const complexityOpts: Option[] = [
        {value: 'all', label: 'Все уровни'},
        {value: 'easy', label: 'Легкий'},
        {value: 'medium', label: 'Средний'},
        {value: 'hard', label: 'Тяжелый'},
    ]

    return (
        <Box mb={'5'}>
            <Flex align={'center'} gap={'3'}>
                <TextField.Root
                    placeholder="Поиск по проектам..."
                    className={styles.searchInput}
                    value={searchValue}
                    onChange={onChangeSearchValue}
                >
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16"/>
                    </TextField.Slot>
                </TextField.Root>
                <Button variant={'outline'} onClick={toggleFilterVisibility}>
                    <MixerHorizontalIcon/>
                    Фильтр
                </Button>
            </Flex>
            {filterIsOpen && (
                <Card mt={'3'}>
                    <Grid gap={'3'} columns={{initial: "1", sm: "3", md: "3"}} width="auto">
                        <AppSelect
                            value={techValue}
                            defaultValue={techValue}
                            options={techOpts}
                            contentVariant={'soft'}
                            label={'Технологии'}
                            onValueChange={setTechValue}
                        />
                        <AppSelect
                            value={subscriptionValue}
                            defaultValue={subscriptionValue}
                            options={subscriptionOpts}
                            contentVariant={'soft'}
                            label={'Подписка'}
                            onValueChange={setSubscriptionValue}
                        />
                        <AppSelect
                            value={complexityValue}
                            defaultValue={complexityValue}
                            options={complexityOpts}
                            contentVariant={'soft'}
                            label={'Уровень'}
                            onValueChange={setComplexityValue}
                        />
                    </Grid>
                </Card>
            )}
        </Box>
    )
}