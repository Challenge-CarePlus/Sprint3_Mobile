import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import { ChangeScreen, Tela } from "../types";

export default function Main({ changeScreen }: ChangeScreen){
    return(
        <View style={styles.containerMain}>
            <StatusBar hidden={true} />
            <Text style={styles.titleText}>
                Cuidado fonoaudiológico de alta perfomance
            </Text>
            <View style={styles.cardContainer}>
                <Card title="Exercícios" onPress={() => changeScreen(Tela.EXERCISE)} subtitle="Prática" icon={require("./../assets/svg/Exercicios.png")} active={true}/>
                <Card title="Paciente" onPress={() => {}} subtitle="Estatística" icon={require("./../assets/svg/Paciente.png")} active={true}/>
                <Card title="Placeholder" onPress={() => {}} subtitle="placeholder" icon={require("./../assets/svg/Missing.png")} active={false}/>
                <Card title="Serviços" onPress={() => {}} subtitle="Em construção" icon={require("./../assets/svg/Servicos.png")} active={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
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