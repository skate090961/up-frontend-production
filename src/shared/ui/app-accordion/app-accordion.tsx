import { ComponentPropsWithoutRef, FC, forwardRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';
import { Box } from '@radix-ui/themes';
import styles from './app-accordion.module.scss';

interface AccordionItem {
    value: string;
    trigger: string;
    content: string;
}

interface AppAccordionProps {
    items: AccordionItem[];
    className?: string;
}

const AccordionTrigger = forwardRef<
    HTMLButtonElement,
    ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={styles.header}>
        <Accordion.Trigger
            className={clsx(styles.trigger, className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className={styles.chevron} aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={clsx(styles.content, className)}
        {...props}
        ref={forwardedRef}
    >
        <div className={styles.contentText}>{children}</div>
    </Accordion.Content>
));

export const AppAccordion: FC<AppAccordionProps> = ({ items, className }) => {
    return (
        <Accordion.Root
            className={clsx(styles.root, className)}
            type="single"
            collapsible
            asChild
        >
            <Box>
                {items.map((item) => (
                    <Accordion.Item
                        className={styles.item}
                        key={item.value}
                        value={item.value}
                    >
                        <AccordionTrigger>{item.trigger}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                    </Accordion.Item>
                ))}
            </Box>
        </Accordion.Root>
    );
};
