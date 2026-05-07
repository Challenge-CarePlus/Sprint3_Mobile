import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, ImageSourcePropType, Image } from 'react-native';

type CardProps = {
    title: string;
    subtitle: string;
    icon?: ImageSourcePropType;
    active: boolean;
    onPress?: () => void;
};

export default function Card({
    title,
    subtitle,
    icon,
    active,
    onPress
}: CardProps) {
    return (
        <TouchableOpacity style={[active ? null : styles.desativado, styles.container]} onPress={onPress}>
            <View style={styles.iconContainer}>
                {icon && (
                    <Image source={icon} style={styles.icon} />
                )}
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: '#284A7D',
        borderWidth: 3,
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    desativado: {
        opacity: 0.4,
        backgroundColor: '#b0c7e6'
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 999,
        backgroundColor: '#284A7D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#fff',
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        color: '#000',
        fontFamily: 'Righteous_400Regular',
    },
    subtitle: {
        fontSize: 18,
        color: '#8B8B8B',
        fontFamily: 'Righteous_400Regular',
    },
});