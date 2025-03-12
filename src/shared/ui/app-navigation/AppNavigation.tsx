import styles from "./AppNavigation.module.scss";
import {clsx} from "clsx";
import {Text} from "@radix-ui/themes";
import {ReactNode} from "react";
import {Link, useLocation} from 'react-router-dom'
import {AppLink} from "@/shared/ui/app-link";

interface Link {
    name: string
    path: string
    icon?: ReactNode
}

interface AppTabNavProps {
    links: Link[]
    classNames?: string
}

export const AppNavigation = ({links, classNames}: AppTabNavProps) => {
    const location = useLocation();

    return (
        <nav>
            <ul className={clsx(styles.links, classNames)}>
                {links?.map(link => (
                    <li key={link.path} className={styles.linkWrapper}>
                        <AppLink key={link.path} to={link.path}>
                                {link.icon}
                                <Text size={'2'} highContrast={location.pathname === link.path}>{link.name}</Text>
                        </AppLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};