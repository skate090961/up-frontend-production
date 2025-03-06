import {Badge, Flex, Text} from "@radix-ui/themes";
import {ComplexityLevel} from "@/pages/ProjectsPage/ProjectsPage";

interface ProjectComplexityProps {
    level: ComplexityLevel
}

interface ComplexityValue {
    name: string;
    color: string;
}

const complexityMap: Record<ComplexityLevel, ComplexityValue> = {
    easy: { name: "Легкий", color: "green" },
    medium: { name: "Средний", color: "orange" },
    hard: { name: "Сложный", color: "red" }
};

const getComplexityValue = (level: ProjectComplexityProps): ComplexityValue => complexityMap[level];

const ProjectComplexity = ({ level }: ComplexityLevel) => {
    const { name, color } = getComplexityValue(level);

    return (
            <Flex align={'center'} gap={'2'}>
                <Text as={'p'}>Уровень:</Text>
                <Badge color={color}>{name}</Badge>
            </Flex>
    );
};

export default ProjectComplexity