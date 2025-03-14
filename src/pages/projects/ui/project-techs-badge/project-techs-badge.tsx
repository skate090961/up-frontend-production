import { Badge, Flex, Text } from '@radix-ui/themes';

interface ProjectTechsProps {
    techs: any;
}

interface TechsValue {
    name: string;
    color: string;
}

const TechsMap: Record<any, TechsValue> = {
    html: { name: 'HTML', color: 'blue' },
    css: { name: 'CSS', color: 'ruby' },
    javascript: { name: 'JavaScript', color: 'amber' },
};

export const ProjectTechsBadge = ({ techs }: ProjectTechsProps) => {
    return (
        <Flex align="center" gap="2">
            <Text as="p">Технологии:</Text>
            <Flex gap="2" wrap="wrap">
                {techs.map((tech) => {
                    const { name, color } = TechsMap[tech];
                    return (
                        <Badge key={tech} color={color}>
                            {name}
                        </Badge>
                    );
                })}
            </Flex>
        </Flex>
    );
};
