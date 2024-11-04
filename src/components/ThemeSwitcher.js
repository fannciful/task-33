import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        return localStorage.getItem('dark-theme') === 'true';
    });

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
        localStorage.setItem('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    return (
        <button onClick={toggleTheme} className="switch-button">
            {isDarkTheme ? 'Light mode' : 'Dark mode'}
        </button>
    );
};

export default ThemeSwitcher;
