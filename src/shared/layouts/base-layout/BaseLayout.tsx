import styles from "./BaseLayout.module.scss";
import {Box, Container} from "@radix-ui/themes";

interface BaseLayoutProps {
    header: JSX.Element;
    content: JSX.Element;
    footer: JSX.Element;
}

export const BaseLayout = ({content, header, footer}: BaseLayoutProps) => {
    return (
        <>
            <Box className={styles.background}/>
            {header}
            <Container px={'4'}>
                <main className={styles.main}>
                    {content}
                </main>
                {footer}
            </Container>
        </>
    )
}