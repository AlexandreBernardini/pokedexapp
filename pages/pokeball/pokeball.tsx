import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import useGetPokemon from "../../services/getOnePokemon/useGetOnePokemon";
import { useRoute } from "@react-navigation/native";
import PokeballAnimation from "../../Pokeball3D/pokeball3D";

export default function Pokeball() {
    const route = useRoute();
    const params = route.params;
    const pokemonId = params && typeof params === 'object' && 'pokemonId' in params && typeof params.pokemonId === 'number' ? params.pokemonId : null;
    const pokemon = useGetPokemon(pokemonId as number); // Add type assertion here
    

    return (
        <View>
            <ImageBackground source={require('../../image/herbe.jpg')} style={{width: 400, height: 200}}>
                <View style={styles.imageComponent}>
                    <Image source={{ uri: pokemon.pokemon?.image }} style={styles.image} />
                </View>
            </ImageBackground>
            <ImageBackground source={require('../../image/herbebas.jpg')} style={{width: 400, height: 600 }}>
            <View>
                {/* fonction */}
                <PokeballAnimation />
            </View>
        </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    imageComponent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

})