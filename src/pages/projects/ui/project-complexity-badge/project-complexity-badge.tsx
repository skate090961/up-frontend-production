import {Badge, Flex, Text} from "@radix-ui/themes";

interface ProjectComplexityProps {
    level: any
}

interface ComplexityValue {
    name: string;
    color: string;
}

const complexityMap: Record<any, ComplexityValue> = {
    easy: { name: "Легкий", color: "green" },
    medium: { name: "Средний", color: "orange" },
    hard: { name: "Сложный", color: "red" }
};

const getComplexityValue = (level: ProjectComplexityProps): ComplexityValue => complexityMap[level];

export const ProjectComplexityBadge = ({ level }: any) => {
    const { name, color } = getComplexityValue(level);

    return (
            <Flex align={'center'} gap={'2'}>
                <Text as={'p'}>Уровень:</Text>
                <Badge color={color}>{name}</Badge>
            </Flex>
    );
};