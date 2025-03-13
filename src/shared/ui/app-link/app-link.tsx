import {ReactNode} from 'react';
import {Flex, Link as RadixLink} from "@radix-ui/themes";
import {Link as RouterLink, LinkProps} from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    children?: ReactNode;
}

export const AppLink = ({children, ...props}: AppLinkProps) => {
    return (
        <RadixLink asChild>
            <RouterLink {...props}>
                <Flex align={'center'} gap={'1'}>
                    {children}
                </Flex>
            </RouterLink>
        </RadixLink>
    );
};