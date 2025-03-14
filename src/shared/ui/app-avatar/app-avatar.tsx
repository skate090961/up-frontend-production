import { Avatar } from '@radix-ui/themes';
import { FC } from 'react';

interface AppAvatarProps {
    userName: string;
    src?: string;
    size?: string;
    variant?: string;
    color?: string;
    highContrast?: boolean;
    radius?: string;
    className?: string;
}

export const AppAvatar: FC = ({
    highContrast,
    size = '2',
    radius,
    variant,
    color,
    userName,
    src,
    className,
}: AppAvatarProps) => {
    const fallback = userName[0].toUpperCase();

    return (
        <Avatar
            fallback={fallback}
            src={src}
            className={className}
            highContrast={highContrast}
            size={size}
            radius={radius}
            variant={variant}
            color={color}
        />
    );
};
