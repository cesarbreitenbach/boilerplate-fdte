
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import InitialScreen from '../screens/FormScreen'; 

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){
    return (
    <Navigator screenOptions={{headerShown: false, animationEnabled: true, gestureEnabled: false, gestureDirection: 'horizontal'}} initialRouteName="splash">
        <Screen 
            name="splash"
            component={SplashScreen}
        />
        <Screen 
            name="initial"
            component={InitialScreen}
        />
    </Navigator>
)}