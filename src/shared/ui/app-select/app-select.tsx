import {Flex, Select, Text} from "@radix-ui/themes";

export interface Option {
    label: string
    value: string
}

type AppSelectSize = "1" | "2" | "3"
type TriggerVariant = "classic" | "surface" | "soft" | "ghost"
type ContentVariant = "solid" | "soft"

interface AppSelectProps {
    label?: string
    value?: string
    onValueChange?: (value: any) => void
    defaultValue?: any
    disabled?: boolean
    placeholder?: string
    size?: AppSelectSize
    triggerVariant?: TriggerVariant
    contentVariant?: ContentVariant
    options: Option[]
}

export const AppSelect = (props: AppSelectProps) => {
    const {
        label,
        defaultValue,
        onValueChange,
        value,
        disabled,
        placeholder,
        size = "2",
        triggerVariant = "surface",
        contentVariant = "solid",
        options
    } = props

    return (
        <Text as={'label'} size={'2'}>
            <Flex direction={'column'} gap={'1'}>
                {label}
                <Select.Root
                    defaultValue={defaultValue}
                    value={value}
                    onValueChange={onValueChange}
                    disabled={disabled}
                    size={size}
                >
                    <Select.Trigger aria-label={'select'} placeholder={placeholder} variant={triggerVariant}/>
                    <Select.Content variant={contentVariant}>
                        {options?.map(option => <Select.Item key={option.value} value={option.value}>{option.label}</Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </Flex>

        </Text>
    )
}