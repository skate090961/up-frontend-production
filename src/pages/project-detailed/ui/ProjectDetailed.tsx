import {Box, Button, Flex, Separator, Text} from "@radix-ui/themes";
import {useState} from "react";
import styles from './ProjectDetailed.module.scss'

const ProjectDetailedLazy = () => {
    const [currentStep, setCurrentStep] = useState(1)

    const goToNextStep = () => setCurrentStep(2)
    const goToPreviousStep = () => setCurrentStep(1)

    return (
        <Box>
            <Flex align={'center'}>
                <Flex align={'center'} direction={'column'} className={styles.step}>
                    <Box
                        className={`${styles.stepCircle} ${
                            currentStep >= 1 ? styles.active : styles.inactive
                        }`}
                    >
                        <Text size={'5'}>1</Text>
                    </Box>
                    <Text>Детали проекта</Text>
                    <Text size={'2'} color={'gray'}>Техническое задание</Text>
                </Flex>
                <Separator className={styles.divider}/>
                <Flex align={'center'} direction={'column'} className={styles.step}>
                    <Box
                        className={`${styles.stepCircle} ${
                            currentStep >= 2 ? styles.active : styles.inactive
                        }`}
                    >
                        <Text size={'5'}>2</Text>
                    </Box>
                    <Text>Метериалы проекта</Text>
                    <Text size={'2'} color={'gray'}>Скачать ресурсы</Text>
                </Flex>
            </Flex>
            {currentStep === 1 && <Button onClick={goToNextStep}>Начать проект</Button>}
            {currentStep === 2 && <Button onClick={goToPreviousStep}>Назад</Button>}
        </Box>
    )
}

export default ProjectDetailedLazy