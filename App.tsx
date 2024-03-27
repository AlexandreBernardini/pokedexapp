// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home/home';
import Show from './pages/show/show';
import PokeTeam from './pages/team/team';
import Pokeball from './pages/pokeball/pokeball';

export type RootStackParamList = {
    Home: undefined;
    Show: { pokemonId: number };
    PokeTeam: undefined;
    PokeBall: {pokemonId: number};
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home">
                <RootStack.Screen name="Home" component={Home} />
                <RootStack.Screen name="Show" component={Show} />
                <RootStack.Screen name="PokeTeam" component={PokeTeam} />
                <RootStack.Screen name="PokeBall" component={Pokeball} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
