import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View } from 'react-native';
import Recherche from './src/screens/Recherche';
import Notification from './src/screens/Notification';
import MyHome from './src/screens/MyHome';
import NavBar from './src/screens/NavBar';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
           <Stack.Navigator initialRouteName="MyHome" >
                <Stack.Screen name="MyHome" component={MyHome} options={{ headerShown: false }}/>
                <Stack.Screen name="Recherche" component={Recherche} options={{ headerShown: false }}/>
                <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
                <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }}/>
           </Stack.Navigator>
        </NavigationContainer>
    );
}