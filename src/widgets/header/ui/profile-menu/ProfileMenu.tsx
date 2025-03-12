import {Button, DropdownMenu, Reset, Text} from "@radix-ui/themes";
import {ExitIcon} from "@radix-ui/react-icons";
import {AppAvatar} from "@/shared/ui/app-avatar";
import {PROFILE_LINKS} from "../../lib/profile-links";
import {AppLink} from "@/shared/ui/app-link";

interface ProfileMenuProps {
    data: any
    logout: () => void
}

export const ProfileMenu = ({data, logout}: ProfileMenuProps) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Reset>
                    <button type={'button'}>
                        <AppAvatar
                            size="2"
                            src={data.avatar}
                            userName={data.userName}
                        />
                    </button>
                </Reset>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                {PROFILE_LINKS.map(item => (
                    <DropdownMenu.Item key={item.path}>
                        <AppLink to={item.path}>
                            {item.icon}
                            <Text size={'2'} highContrast>{item.name}</Text>
                        </AppLink>
                    </DropdownMenu.Item>
                ))}

                <DropdownMenu.Separator/>
                <DropdownMenu.Item color={'red'} >
                    <Button onClick={logout} variant={'ghost'} highContrast>
                        <ExitIcon/>
                        Выйти
                    </Button>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>

    )
}