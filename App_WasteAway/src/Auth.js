import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import { Cadastro } from './screens/Cadastro';
import { Home } from './screens/Home';
import { Buscar } from './screens/Buscar';
import { Carrinho } from './screens/Carrinho';
import { Pedidos } from './screens/Pedidos';
import { Perfil } from './screens/Perfil';
import { Config } from './screens/Configurações';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveBackgroundColor: "#44436c",
                tabBarActiveTintColor: "#FFF",
                tabBarInactiveTintColor: "#44436C",
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#A3DF99',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                }
            }}
        >
            <Tab.Screen

                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={color} />
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    },

                }}
            />

            <Tab.Screen
                name='Buscar'
                component={Buscar}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="search" size={size} color={color} />
                        }
                        return <Ionicons name="search-outline" size={size} color={color} />
                    },

                }}
            />

            <Tab.Screen
                name='Carrinho'
                component={Carrinho}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="cart" size={size} color={color} />
                        }
                        return <Ionicons name="cart-outline" size={size} color={color} />
                    },

                }}
            />

            <Tab.Screen
                name='Pedidos'
                component={Pedidos}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="clipboard" size={size} color={color} />
                        }
                        return <Ionicons name="clipboard-outline" size={size} color={color} />
                    },

                }}
            />

            <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="person" size={size} color={color} />
                        }
                        return <Ionicons name="person-outline" size={size} color={color} />
                    },

                }}
            />
        </Tab.Navigator>
    )
}


function Auth() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Login" component={Login}
                options={{
                    headerShown: false,
                    // title: 'Login',
                    // headerTitleAlign: 'center',
                    // headerStatusBarHeight: 30,
                    // headerStyle: {
                    //     backgroundColor: '#FA5F49',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    //     fontSize: 30,
                    // },
                }} />
            <Stack.Screen name="Home" component={Routes}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Cadastro" component={Cadastro}
                options={{
                }}
            />
            <Stack.Screen name="Config" component={Config}
                options={{
                }}
            />
        </Stack.Navigator>
    );
}

export default Auth;


