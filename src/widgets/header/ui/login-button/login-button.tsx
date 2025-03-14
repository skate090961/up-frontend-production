import { Button } from '@radix-ui/themes';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const LoginButton = () => {
    return (
        <Button variant="classic">
            Войти с помощью GitHub
            <GitHubLogoIcon />
        </Button>
    );
};
