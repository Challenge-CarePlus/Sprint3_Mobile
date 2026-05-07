import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { DefaultProps, Tela } from "../types";

export default function Menu({ changeLogin, changeScreen }: DefaultProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <View style={styles.fullMenu}>
            <StatusBar hidden={true} />
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    <Image source={require("./../assets/ECOA.png")} />

                    <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
                        <MaterialIcons name="menu" size={32} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.dropDown, menuOpen ? null : styles.menuClosed]}>
                <TouchableOpacity onPress={() => { changeLogin(false), changeScreen(Tela.LOGIN)}}>
                    <Text style={styles.menuText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fullMenu: {
        width: '100%',
        zIndex: 1
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    menu: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dropDown: {
        position: 'absolute',
        marginTop: 70,
        width: '100%',
        backgroundColor: '#1E3E6D',
        padding: 30
    },
    menuClosed: {
        display: 'none'
    },
    menuText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Righteous_400Regular'
    }
});