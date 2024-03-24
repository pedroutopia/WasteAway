import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/screens/Home';

const Stack = createStackNavigator();



function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}
        options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerStatusBarHeight: 50,
          headerStyle: {
            backgroundColor: '#FA5F49',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        }} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar translucent={true} />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
}

