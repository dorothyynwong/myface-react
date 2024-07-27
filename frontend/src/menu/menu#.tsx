import { useState } from 'react';

export const useMenu = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    };

    return [isMenuVisible, toggleMenu];
};
