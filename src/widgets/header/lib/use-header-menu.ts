import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BREAKPOINTS } from '@/shared/lib/const';

export const useHeaderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= BREAKPOINTS.sm) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isMenuOpen,
        toggleMenu,
    };
};
