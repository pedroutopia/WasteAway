import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import { Home } from './screens/Home';
import { Buscar } from './screens/Buscar';
import { Cadastro } from './screens/Cadastro';
import { Carrinho } from './screens/Carrinho';
import { Pedidos } from './screens/Pedidos';
import { Perfil } from './screens/Perfil';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { View } from 'react-native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator

        initialRouteName='Home'

        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarActiveBackgroundColor: "black" ,
          }}>

            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="house" size={24} color="black" />
                    ),
                    
                  }}
            />

            <Tab.Screen
                name='Buscar'
                component={Buscar}
            />

            <Tab.Screen
                name='Cadastro'
                component={Cadastro}
            />

            <Tab.Screen
                name='Carrinho'
                component={Carrinho}
            />

            <Tab.Screen
                name='Pedidos'
                component={Pedidos}
            />

            <Tab.Screen
                name='Perfil'
                component={Perfil}
            />
        </Tab.Navigator>
    )
}


function Auth(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: 'Login',
                        headerTitleAlign: 'center',
                        headerStatusBarHeight: 30,
                        headerStyle: {
                            backgroundColor: '#FA5F49',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                        },
                    }} />
                <Stack.Screen name="Home" component={Routes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Auth;


