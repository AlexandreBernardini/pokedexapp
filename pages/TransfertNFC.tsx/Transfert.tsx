import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import nfcManager from "react-native-nfc-manager";

export default function Transfert() {   
    const [nfcSupported, setNfcSupported] = useState(false);

    useEffect(() => {
        // getCapturedPokemon();
        initializeNfc();
        return () => {
            // Nettoyer lors du démontage du composant
            cleanupNfc();
        }
    })

    const initializeNfc = async () => {
        try {
            await nfcManager.start();
            setNfcSupported(true);
        } catch (error) {
            console.warn("Error initializing NFC:", error);
            setNfcSupported(false);
        }
    };

    const cleanupNfc = () => {
        nfcManager.isEnabled();
    };


    return (
        <View>
            {nfcSupported ? (
                <Text>NFC is supported</Text>
            ) : (
                <Text>NFC is not supported</Text>
            )}
        </View>
    );
}