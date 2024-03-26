import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import PokemonCard from '../../components/PokemonCard/pokemonCard';
import useGetAsyncStoragePokemons from '../../services/GetAsyncStoragePokemon/useGetAsyncStoragePokemon';

export default function PokeTeam() {
    const { pokemonDetails } = useGetAsyncStoragePokemons();

    return (
        <ScrollView>
            <View style={styles.container}>
                {pokemonDetails.map((pokemon, index) => (
                    <View key={index}>
                        <PokemonCard pokemon={pokemon} />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
