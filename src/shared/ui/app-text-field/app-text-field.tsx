import { TextField } from '@radix-ui/themes';
import { ChangeEventHandler, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './app-text-field.module.scss';

interface AppTextFieldProps {
    placeholder?: string;
    onChange: (value: string) => void;
    value: string;
    slotLeft?: ReactNode;
    slotRight?: ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export const AppTextField = ({
    value,
    onChange,
    slotLeft,
    slotRight,
    placeholder,
    className,
    fullWidth = true,
}: AppTextFieldProps) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        onChange(event.target.value);
    };

    return (
        <TextField.Root
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={clsx(className, fullWidth && styles.fullWidth)}
        >
            {slotLeft && (
                <TextField.Slot side="left">{slotLeft}</TextField.Slot>
            )}
            {slotRight && (
                <TextField.Slot side="right">{slotRight}</TextField.Slot>
            )}
        </TextField.Root>
    );
};
