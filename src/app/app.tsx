import { memo, useEffect, useState } from 'react';
import { Header } from '@/widgets/header';
import { BaseLayout } from '@/shared/layouts';
import { AppRouter } from '@/app/providers/router';

export interface ProfileInfoProps {
    userName: string;
    avatar: string;
}

const user: ProfileInfoProps = {
    userName: 'skater123',
    avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
};

const Footer = memo(() => <footer>FOOTER</footer>);

const App = () => {
    // TODO: Имитация залогиненного юзера для проверки профиля
    const [initUser, setInitUser] = useState<ProfileInfoProps | null>(null);
    useEffect(() => {
        setInitUser(user);
    }, []);
    const logout = () => setInitUser(null);

    return (
        <BaseLayout
            header={<Header data={initUser} logout={logout} />}
            content={<AppRouter />}
            footer={<Footer />}
        />
    );
};

export default App;
