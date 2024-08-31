import { DefaultTheme } from '@react-navigation/native';

const Light = {
    dark: false,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
        white: '#F5F5F5',
        black: '#0A0A0A',
        primary: '#55DDED',
        secondary: '#ADD8E6',
        grey: '#858585',
        red: '#FF0000',
        yellow: '#FFF900',
        success: '#03DAC5',
        error: '#E14161',
        text1: '#1B1D28',
        text2: '#3A4276',
        text3: '#7B7F9E',
        boxBackground: '#F1F3F6',
        transparent: 'rgba(255, 255, 255, .8)',
    },
};

export default Light;
