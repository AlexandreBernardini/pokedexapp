import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DisplayAllPokemonsCard from '../../components/displayAllPokemons/displayAllPokemonsCard';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const pokemonData = DisplayAllPokemonsCard();
    const navigation = useNavigation();

    const navigateToPokeTeam = () => {
        navigation.navigate('PokeTeam'); // Assurez-vous que le nom de l'écran PokeTeam correspond à celui de votre Stack Navigator
    };

    return (
        <ScrollView>            
            <View>
            <TouchableOpacity style={styles.button} onPress={navigateToPokeTeam}>
                <Text style={styles.buttonText}>Ma Team</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.container}>
                {pokemonData}
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});
