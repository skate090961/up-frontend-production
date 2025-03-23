import { Badge } from '@radix-ui/themes';

interface ProjectAccessProps {
    isFree: boolean;
    className?: string;
    size?: '1' | '2' | '3';
}

export const ProjectAccessBadge = ({
    isFree,
    className,
    size,
}: ProjectAccessProps) => {
    const accessBadge = {
        name: isFree ? 'Бесплатно' : 'Premium',
        color: isFree ? 'blue' : 'violet',
    } as const;

    return (
        <Badge
            color={accessBadge.color}
            variant="solid"
            className={className}
            size={size}
        >
            {accessBadge.name}
        </Badge>
    );
};
