import {NAV_LINKS} from "./config";
import {Box} from "@radix-ui/themes";
import {AppNavigation} from "@/shared/ui/app-navigation";

export const Navigation = () => {
    return (
        <Box display={{initial: 'none', sm: 'block'}}>
            <AppNavigation links={NAV_LINKS}/>
        </Box>
    )
}