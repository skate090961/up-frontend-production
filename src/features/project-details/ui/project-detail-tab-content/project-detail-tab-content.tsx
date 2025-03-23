import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { ArrowRightIcon, CheckIcon } from '@radix-ui/react-icons';
import { useParams } from 'react-router-dom';
import styles from './project-detail-tab-content.module.scss';
import { AppAccordion } from '@/shared/ui/app-accordion';

import { useTabs } from '../../lib/use-tabs';
import { TabValues } from '../../model/types/tabs';
import {
    ProjectAccessBadge,
    ProjectComplexityBadge,
    ProjectTechsBadge,
} from '@/entities/project';

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

const checks = [
    'Interactive charts with Chart.js for data visualization',
    'Responsive layout that works on mobile, tablet, and desktop',
    'Data tables with sorting, filtering, and pagination',
    'Dark and light mode support',
    'Drag-and-drop widget customization',
    'Mock API integration for realistic data',
    'TypeScript for type safety',
    'Responsive layout that works on mobile, tablet, and desktop',
    'Data tables with sorting, filtering, and pagination',
    'Dark and light mode support',
    'Drag-and-drop widget customization',
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
    {
        id: '4',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/dgncmovanuzj13hyobkz.jpg',
        title: 'Personal finance app',
        description:
            'This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. You can also build it as a full-stack app!',
        isFree: false,
        complexity: 'hard',
        techs: ['html', 'css', 'javascript'],
    },
    {
        id: '5',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/nr04mhuzgpmuipedmqcc.jpg',
        title: 'FAQ accordion',
        description:
            "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
        isFree: true,
        complexity: 'easy',
        techs: ['html', 'css', 'javascript'],
    },
    {
        id: '6',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/cmab9xsatnq8m04w5ikl.jpg',
        title: 'Blog preview card',
        description:
            'This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.',
        isFree: true,
        complexity: 'easy',
        techs: ['html', 'css'],
    },
    {
        id: '7',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/v7pbc2r5ast5be2btubk.jpg',
        title: 'Body Mass Index calculator',
        description:
            'This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!',
        isFree: false,
        complexity: 'medium',
        techs: ['html', 'css', 'javascript'],
    },
    {
        id: '8',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/l12uqethss9x3xcfmiki.jpg',
        title: 'Any way project',
        description:
            'This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!',
        isFree: true,
        complexity: 'hard',
        techs: ['html', 'css'],
    },
];

export const ProjectDetailTabContent = () => {
    const { setActiveTab } = useTabs();
    const { id } = useParams();

    const project = projects.find((project) => project.id === id);

    const isAccessValue =
        project?.isFree !== undefined && project?.isFree !== null;

    const nextTabHandler = () => setActiveTab(TabValues.Downloads);

    return (
        <Box>
            <Flex direction="column" gap="4">
                <Grid
                    gap="4"
                    columns={{ initial: '1', sm: '1', md: '6fr 4fr' }}
                >
                    <Card size="2" className={styles.infoContainer}>
                        <Flex direction="column" gap="2">
                            <Flex align="center" justify="between">
                                {project?.title && (
                                    <Heading size="8">{project.title}</Heading>
                                )}
                                {isAccessValue && (
                                    <ProjectAccessBadge
                                        isFree={project.isFree}
                                        size="3"
                                    />
                                )}
                            </Flex>
                            <Box>
                                {project?.complexity && (
                                    <ProjectComplexityBadge
                                        level={project?.complexity}
                                    />
                                )}
                                {project?.techs && (
                                    <ProjectTechsBadge techs={project.techs} />
                                )}
                            </Box>
                        </Flex>
                        {project?.description && (
                            <Text as="p" color="gray">
                                {project.description}
                            </Text>
                        )}
                        <Flex className={styles.controlContainer}>
                            <Button onClick={nextTabHandler}>
                                Далее
                                <ArrowRightIcon />
                            </Button>
                        </Flex>
                    </Card>
                    {project?.image && (
                        <Box
                            height={{
                                initial: '200px',
                                sm: '300px',
                                md: 'auto',
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.image}
                            />
                        </Box>
                    )}
                </Grid>
                <Box>
                    <Card size="2">
                        <Heading as="h2" size="6" mb="3">
                            Техническое задание
                        </Heading>
                        <Grid
                            gap="3"
                            columns={{ initial: '1', sm: '2', md: '2' }}
                        >
                            {checks.map((check, index) => (
                                <Box
                                    key={index}
                                    className={styles.checkContainer}
                                >
                                    <CheckIcon />
                                    <Text as="p">{check}</Text>
                                </Box>
                            ))}
                        </Grid>
                    </Card>
                </Box>
                <Flex direction="column" gap="3">
                    <Heading as="h2" size="6">
                        Часто задаваемые вопросы
                    </Heading>
                    <AppAccordion items={accordionItems} />
                </Flex>
            </Flex>
        </Box>
    );
};
