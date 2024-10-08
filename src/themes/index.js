import React, { createContext, useState, useEffect } from 'react';
import { StatusBar, Appearance, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import lightTheme from './Light';
import darkTheme from './Dark';

const defaultMode = Appearance.getColorScheme() || 'dark';

const ThemeContext = createContext({
    mode: defaultMode,
    setMode: (mode) => console.log(mode),
});

const useThemeContext = () => React.useContext(ThemeContext);

const ManageThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(defaultMode);
    const setMode = (mode) => {
        setThemeState(mode);
    };
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setThemeState(colorScheme);
        });
        return () => subscription.remove();
    }, []);

    return (
        <ThemeContext.Provider value={{ mode: themeState, setMode }}>
            <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// const ThemeManager = ({ children }) => (
//     <AppearanceProvider>
//         <ManageThemeProvider>{children}</ManageThemeProvider>
//     </AppearanceProvider>
// );
const ThemeManager = ({ children }) => {
    return (
        <ManageThemeProvider>{children}</ManageThemeProvider>
    )
};

export { useThemeContext, lightTheme, darkTheme };

export default ThemeManager;
