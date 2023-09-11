import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/LoginScreen';
import { StackRoutes } from '../routes/app.routes';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false, animationEnabled: true, gestureEnabled: false, gestureDirection: 'horizontal'}} >
            <Screen 
               name='Signin'
               component={Signin}
            />
            <Screen 
               name='StackRoutes'
               component={StackRoutes}
            />
        </Navigator>
    )
}