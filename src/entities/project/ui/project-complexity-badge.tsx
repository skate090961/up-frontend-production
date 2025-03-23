import { Badge, Flex, Text } from '@radix-ui/themes';

interface ProjectComplexityProps {
    level: 'medium' | 'easy' | 'hard';
}

interface ComplexityValue {
    name: string;
    color: 'green' | 'orange' | 'red';
}

const complexityMap = {
    easy: { name: 'Легкий', color: 'green' },
    medium: { name: 'Средний', color: 'orange' },
    hard: { name: 'Сложный', color: 'red' },
} as const;

const getComplexityValue = (
    level: ProjectComplexityProps['level'],
): ComplexityValue => complexityMap[level];

export const ProjectComplexityBadge = ({ level }: ProjectComplexityProps) => {
    const { name, color } = getComplexityValue(level);

    return (
        <Flex align="center" gap="2">
            <Text as="p">Уровень:</Text>
            <Badge color={color}>{name}</Badge>
        </Flex>
    );
};
