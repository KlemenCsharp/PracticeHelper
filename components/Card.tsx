import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

type CardProps = {
    title: string;
    onPress: () => void;
}

const Card: React.FC<CardProps> = ({ title, onPress}) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        color: '#333',
    },
});


export default Card;