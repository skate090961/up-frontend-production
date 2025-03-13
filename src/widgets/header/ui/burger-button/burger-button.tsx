import {Box, Button} from "@radix-ui/themes";
import {Cross1Icon, HamburgerMenuIcon} from "@radix-ui/react-icons";

interface BurgerButtonProps {
    isMenuOpen: boolean
    toggleMenu: () => void
}

export const BurgerButton = ({isMenuOpen, toggleMenu}: BurgerButtonProps) => {
    return (
        <Box display={{initial: 'block', sm: 'none'}}>
            <Button onClick={toggleMenu} variant={'outline'}>
                {isMenuOpen ? <Cross1Icon/> : <HamburgerMenuIcon/>}
            </Button>
        </Box>
    )
}