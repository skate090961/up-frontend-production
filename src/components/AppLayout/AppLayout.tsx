import styles from "@/App.module.scss";
import {Box, Container} from "@radix-ui/themes";

const AppLayout = ({children}) => {
    return (
        <>
            <Box className={styles.background}/>
            <Container px={'4'}>
                <main>
                    {children}
                </main>
            </Container>
        </>
    )
}

export default AppLayout