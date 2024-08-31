import { DarkTheme } from '@react-navigation/native';

const Dark = {
    dark: true,
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#171822',
        white: '#F5F5F5',
        black: '#0A0A0A',
        primary: '#55DDED',
        secondary: '#ADD8E6',
        grey: '#858585',
        red: '#FF0000',
        yellow: '#FFFF00',
        success: '#03DAC5',
        error: '#E14161',
        text1: '#FFFFFF',
        text2: '#7B7F9E',
        text3: '#7B7F9E',
        boxBackground: '#212330',
        transparent: 'rgba(0, 0, 0, .8)',
    },
};

export default Dark;
