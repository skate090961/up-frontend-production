import { Badge } from '@radix-ui/themes';

interface ProjectAccessProps {
    isFree: boolean;
    className?: string;
}

export const ProjectAccess = ({ isFree, className }: ProjectAccessProps) => {
    const accessBadge = {
        name: isFree ? 'Бесплатно' : 'Premium',
        color: isFree ? 'blue' : 'violet',
    };

    return (
        <Badge color={accessBadge.color} variant="solid" className={className}>
            {accessBadge.name}
        </Badge>
    );
};
