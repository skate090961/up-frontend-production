import {
    Badge,
    Box,
    Button,
    Card,
    Flex,
    Grid,
    Heading,
    Section,
    Strong,
    Text,
} from '@radix-ui/themes';
import {
    ArrowRightIcon,
    CodeIcon,
    Crosshair2Icon,
    FigmaLogoIcon,
    FileTextIcon,
    LayersIcon,
} from '@radix-ui/react-icons';
import styles from './main.module.scss';
import { AppLink } from '@/shared/ui/app-link';
import { getRouteProjects } from '@/shared/routes';
import { ReactNode } from 'react';
import { ProjectList } from '@/pages/projects/ui/project-list/project-list';
import { AppAccordion } from '@/shared/ui/app-accordion';

const accordionItems = [
    {
        value: 'item-1',
        trigger: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
        value: 'item-2',
        trigger: 'Is it unstyled?',
        content:
            "Yes. It's unstyled by default, giving you freedom over the look and feel.",
    },
    {
        value: 'item-3',
        trigger: 'Can it be animated?',
        content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
    },
];

const featureCards = [
    {
        icon: <FigmaLogoIcon />,
        title: 'Figma Designs',
        description:
            'Access professional Figma designs for each project, ready to be implemented.',
    },
    {
        icon: <CodeIcon />,
        title: 'Technical Requirements',
        description:
            'Clear technical specifications to guide your implementation and ensure quality.',
    },
    {
        icon: <FileTextIcon />,
        title: 'Project Templates',
        description:
            'Download starter templates to jumpstart your development process.',
    },
    {
        icon: <Crosshair2Icon />,
        title: 'Debug Challenges',
        description:
            'Download versions with intentional bugs to practice your debugging skills and improve your problem-solving abilities.',
    },
    {
        icon: <LayersIcon />,
        title: 'Difficulty Levels',
        description:
            'Projects for all skill levels, from beginner to advanced developers.',
    },
    {
        icon: <ArrowRightIcon />,
        title: 'Guided Learning',
        description:
            'Follow a structured path to improve your frontend development skills.',
    },
];

const steps = [
    {
        step: '1',
        title: 'Browse Projects',
        description:
            'Explore our catalog and find a project that matches your skill level and interests.',
    },
    {
        step: '2',
        title: 'Download Resources',
        description:
            'Get the Figma design, starter template, and technical requirements.',
    },
    {
        step: '3',
        title: 'Start Coding',
        description:
            'Focus on implementation without wasting time on setup and design decisions.',
    },
];

const projects = [
    {
        id: '1',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/giwjqezcwrig3xi9rjzh.jpg',
        title: 'Character counter',
        description:
            'This project will test a range of your skills, especially your JavaScript, with the counters and letter density graph. The theme switcher is another little challenge.',
        isFree: false,
        complexity: 'medium',
        techs: ['html', 'css', 'javascript'],
    },
    {
        id: '2',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/k81dmgdccd7y5ltajrvh.jpg',
        title: 'Conference ticket generator',
        description:
            "In this challenge, you'll create a form that generates a ticket. There's a lot of scope for customizing the generated ticket and putting your own stamp on the project.",
        isFree: true,
        complexity: 'easy',
        techs: ['html', 'css', 'javascript'],
    },
    {
        id: '3',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/jc6hb2cbxsmpxzqolm0h.jpg',
        title: 'Tech book club landing page',
        description:
            "This will be an excellent test of your HTML and CSS skills. The design uses common layout patterns you'll likely use in future projects, as well as some fun details.",
        isFree: false,
        complexity: 'easy',
        techs: ['html', 'css'],
    },
];

const MainSectionLayout = ({
    children,
    badge,
    title,
    subtitle,
    withGradient = false,
}: {
    children: ReactNode;
    badge: string;
    title: string;
    subtitle: string;
    withGradient?: boolean;
}) => {
    return (
        <Section size={'4'}>
            {withGradient && <Box className={styles.background} />}
            <Box>
                <Flex
                    direction={'column'}
                    justify={'center'}
                    align={'center'}
                    mb={'7'}
                >
                    <Badge size={'2'} mb={'2'}>
                        {badge}
                    </Badge>
                    <Heading as={'h2'} size={'8'}>
                        {title}
                    </Heading>
                    <Text as={'p'} color={'gray'}>
                        {subtitle}
                    </Text>
                </Flex>
                {children}
            </Box>
        </Section>
    );
};

const MainLazy = () => {
    return (
        <>
            {/*Hero*/}
            <Section size={'4'}>
                <Box>
                    <Flex
                        direction={'column'}
                        justify={'center'}
                        align={'center'}
                        mb={'7'}
                    >
                        <Badge size={'3'} mb={'2'}>
                            For Frontend Developers
                        </Badge>
                        <Heading size={'9'} mb={'3'}>
                            Skip the setup. Start building.
                        </Heading>
                        <Text
                            as={'p'}
                            color={'gray'}
                            size={'6'}
                            align={'center'}
                            mb={'7'}
                        >
                            Get ready-made project ideas, Figma designs, and
                            technical requirements. Focus on coding, not on
                            figuring out what to build.
                        </Text>
                        <Flex>
                            <Button size={'4'} variant={'classic'} asChild>
                                <AppLink to={getRouteProjects()}>
                                    Go to projects
                                    <ArrowRightIcon
                                        width={'24'}
                                        height={'24'}
                                    />
                                </AppLink>
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Section>

            {/*Features*/}
            <MainSectionLayout
                badge={'Features'}
                title={'Everything You Need to Build Faster'}
                subtitle={
                    'Up Frontend provides all the resources you need to build impressive projects without wasting time on design decisions.'
                }
            >
                <Grid
                    columns={{ initial: '1', sm: '2', md: '3' }}
                    gap="4"
                    width="auto"
                >
                    {featureCards.map((card) => (
                        <Card key={card.title} size={'3'}>
                            <Flex direction={'column'} gap={'3'}>
                                <Flex align={'center'} gap={'3'}>
                                    <Flex className={styles.bgIcon}>
                                        {card.icon}
                                    </Flex>
                                    <Heading as={'h3'} size={'5'}>
                                        {card.title}
                                    </Heading>
                                </Flex>
                                <Text as={'p'} color={'gray'}>
                                    {card.description}
                                </Text>
                            </Flex>
                        </Card>
                    ))}
                </Grid>
            </MainSectionLayout>

            {/*How It Works*/}
            <MainSectionLayout
                badge={'How It Works'}
                title={'Simple Process, Powerful Results'}
                subtitle={
                    'Get from idea to implementation in just a few simple steps.'
                }
                withGradient
            >
                <Grid
                    columns={{ initial: '1', sm: '2', md: '3' }}
                    gap="6"
                    width="auto"
                >
                    {steps.map((step) => (
                        <Card key={step.step} variant={'ghost'}>
                            <Flex
                                direction={'column'}
                                justify={'center'}
                                align={'center'}
                            >
                                <Flex>
                                    <Box className={styles.stepCount} mb={'4'}>
                                        <Text as={'p'} size={'7'}>
                                            <Strong>{step.step}</Strong>
                                        </Text>
                                    </Box>
                                </Flex>
                                <Heading as={'h3'}>{step.title}</Heading>
                                <Text as={'p'} align={'center'} color={'gray'}>
                                    {step.description}
                                </Text>
                            </Flex>
                        </Card>
                    ))}
                </Grid>
            </MainSectionLayout>

            {/*Projects*/}
            <MainSectionLayout
                badge={'projects'}
                title={'Explore our project catalog'}
                subtitle={
                    'From simple landing pages to complex applications, find the perfect project to enhance your skills.'
                }
            >
                <Flex direction={'column'} gap={'6'} align={'center'}>
                    <ProjectList projects={projects} isLoading={false} />
                    <Flex>
                        <Button size={'4'} variant={'classic'} asChild>
                            <AppLink to={getRouteProjects()}>
                                View All Projects
                                <ArrowRightIcon width={'24'} height={'24'} />
                            </AppLink>
                        </Button>
                    </Flex>
                </Flex>
            </MainSectionLayout>

            <Section>
                <Box className={styles.background} />
                <Flex
                    direction={'column'}
                    justify={'center'}
                    align={'center'}
                    mb={'7'}
                >
                    <Heading as={'h2'} size={'8'}>
                        FAQs
                    </Heading>
                </Flex>
                <AppAccordion items={accordionItems} />
            </Section>
        </>
    );
};

export default MainLazy;
