
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailScreen from '../screens/details/DetailScreem';


export type RootStackParams = {
    Home: undefined;
    Details: { movieID: number }
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigatorStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    );
}