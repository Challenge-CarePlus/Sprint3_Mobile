import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

export default function Exercise(){
    return(
        <View style={styles.containerExercise}>
            <StatusBar hidden={true} />
            <Text style={styles.titleText}>
                Olá! Esses são seus exercícios para hoje
            </Text>
            <View style={styles.cardContainer}>
                <Card title="Exercício 1" subtitle="3X ..." icon={require("./../assets/svg/Exercicios.png")} active={true}/>
                <Card title="Exercício 2" subtitle="5X ..." icon={require("./../assets/svg/Exercicios.png")} active={true}/>
                <Card title="Exercício 3" subtitle="7X ..." icon={require("./../assets/svg/Exercicios.png")} active={true}/>
                <Card title="Exercício 4" subtitle="3X ..." icon={require("./../assets/svg/Exercicios.png")} active={true}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerExercise: {
        width: '80%',
        flex: 1,
        justifyContent: "space-evenly"
    },
    titleText: {
        fontFamily: 'Righteous_400Regular',
        fontSize: 32,
        textAlign: 'center',
        color: '#1E3E6D',
    },
    cardContainer: {
        gap: 20,
    }
});