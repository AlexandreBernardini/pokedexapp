import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PokemonCard from "../PokemonCard/pokemonCard";
import useGetAsyncStoragePokemons from '../../services/GetAsyncStoragePokemon/useGetAsyncStoragePokemon';

export default function DisplayAsyncStoragePokemon() {
    const { pokemonDetails } = useGetAsyncStoragePokemons();

    return (

        <View style={styles.container}>
            {pokemonDetails.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
