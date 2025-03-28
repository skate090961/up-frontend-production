import { Skeleton } from '@radix-ui/themes';
import { memo, useEffect, useState } from 'react';
import { ProjectCard } from '../ui/project-card/project-card';
import { ListLayout } from '../ui/list-layout';
import { NotFound } from '../ui/not-found';

const getSkeletons = () => {
    const SKELETONS_AMOUNT = 6;
    return [...Array(SKELETONS_AMOUNT)].map((_, index) => (
        <Skeleton key={index} width="100%" height="445px" />
    ));
};

export const ProjectsList = memo(() => {
    // TODO: имитация задержки сети для проверки скелетов (удалить когда будет готов бек)
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const id = setTimeout(() => {
            setProducts([
                {
                    id: 1,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/giwjqezcwrig3xi9rjzh.jpg',
                    title: 'Character counter',
                    description:
                        'This project will test a range of your skills, especially your JavaScript, with the counters and letter density graph. The theme switcher is another little challenge.',
                    isFree: false,
                    complexity: 'medium',
                    techs: ['html', 'css', 'javascript'],
                },
                {
                    id: 2,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/k81dmgdccd7y5ltajrvh.jpg',
                    title: 'Conference ticket generator',
                    description:
                        "In this challenge, you'll create a form that generates a ticket. There's a lot of scope for customizing the generated ticket and putting your own stamp on the project.",
                    isFree: true,
                    complexity: 'easy',
                    techs: ['html', 'css', 'javascript'],
                },
                {
                    id: 3,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/jc6hb2cbxsmpxzqolm0h.jpg',
                    title: 'Tech book club landing page',
                    description:
                        "This will be an excellent test of your HTML and CSS skills. The design uses common layout patterns you'll likely use in future projects, as well as some fun details.",
                    isFree: false,
                    complexity: 'easy',
                    techs: ['html', 'css'],
                },
                {
                    id: 4,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/dgncmovanuzj13hyobkz.jpg',
                    title: 'Personal finance app',
                    description:
                        'This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. You can also build it as a full-stack app!',
                    isFree: false,
                    complexity: 'hard',
                    techs: ['html', 'css', 'javascript'],
                },
                {
                    id: 5,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/nr04mhuzgpmuipedmqcc.jpg',
                    title: 'FAQ accordion',
                    description:
                        "In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!",
                    isFree: true,
                    complexity: 'easy',
                    techs: ['html', 'css', 'javascript'],
                },
                {
                    id: 6,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/cmab9xsatnq8m04w5ikl.jpg',
                    title: 'Blog preview card',
                    description:
                        'This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.',
                    isFree: true,
                    complexity: 'easy',
                    techs: ['html', 'css'],
                },
                {
                    id: 7,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/v7pbc2r5ast5be2btubk.jpg',
                    title: 'Body Mass Index calculator',
                    description:
                        'This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!',
                    isFree: false,
                    complexity: 'medium',
                    techs: ['html', 'css', 'javascript'],
                },
                {
                    id: 8,
                    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/l12uqethss9x3xcfmiki.jpg',
                    title: 'Any way project',
                    description:
                        'This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills. The responsive layout shifts will also be an interesting challenge!',
                    isFree: true,
                    complexity: 'hard',
                    techs: ['html', 'css'],
                },
            ]);
            setIsLoading(false);
        }, 3500);

        return () => clearTimeout(id);
    }, []);

    if (!isLoading && !projects?.length) {
        return <NotFound />;
    }

    const projectPreviewCards = projects?.map((project) => (
        <ProjectCard key={project.id} {...project} />
    ));
    const skeletons = getSkeletons();

    return (
        <ListLayout>{isLoading ? skeletons : projectPreviewCards}</ListLayout>
    );
});
