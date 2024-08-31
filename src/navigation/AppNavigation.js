import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {DetailsScreen, HomeScreen} from '../screens';
import { useThemeContext, lightTheme, darkTheme } from '../themes';

const NavigationStack = createStackNavigator();

const screenStackOptions = {};

const StackNavigation = ({navigation}) => (
    <NavigationStack.Navigator initialRouteName="HomeScreen" screenOptions={screenStackOptions}>
        <NavigationStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: null}} />
        <NavigationStack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown: null}} />
    </NavigationStack.Navigator>
);

const AppNavigation = () => {
    const theme = useThemeContext();
    
    return (
        <NavigationContainer theme={theme.mode === 'dark' ? darkTheme : lightTheme}>
            <StackNavigation />
        </NavigationContainer>
    );
}

export default AppNavigation;