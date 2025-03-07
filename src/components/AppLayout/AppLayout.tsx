import styles from "@/App.module.scss";
import {Box, Container} from "@radix-ui/themes";

const AppLayout = ({children}) => {
    return (
        <>
            <Box className={styles.background}/>
            <Container px={'4'}>
                <header>Шапка Сайта</header>
                <main>
                    {children}
                </main>
                <footer>Подвал Сайта</footer>
            </Container>
        </>
    )
}

export default AppLayout