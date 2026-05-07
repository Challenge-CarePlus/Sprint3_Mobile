import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DefaultProps, Tela } from "../types";

export default function Missing({ changeLogin, changeScreen }: DefaultProps){
    return(
        <View style={styles.containerMissing}>
            <StatusBar hidden={true} />
            <Text style={[styles.titleText, styles.defaultText]}>404</Text>
            <Text style={[styles.subtitleText, styles.defaultText]}>Página não encontrada.</Text>
            <TouchableOpacity style={styles.returnButton} onPress={() => {changeLogin(false), changeScreen(Tela.LOGIN)}}>
                <Text style={[styles.returnButtonText, styles.defaultText]}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMissing: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        gap: 20
    },
    defaultText: {
        fontFamily: 'Righteous_400Regular',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 32,
        color: '#1E3E6D'
    },
    subtitleText: {
        fontSize: 20,
        color: '#1E3E6D'
    },
    returnButton: {
        backgroundColor: '#1E3E6D',
        paddingVertical: 13,
        paddingHorizontal: 22,
        borderRadius: 5,
        width: '30%'
    },
    returnButtonText: {
        color: '#fff',
    }
});