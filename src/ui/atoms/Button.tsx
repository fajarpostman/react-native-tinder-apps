/**
 * @author Fajar Postman
 */

import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

type ButtonProps = {
    label: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string;
};

export default function Button({ label, onPress, color = '#333' }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.txt}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: { padding: 12, borderRadius: 8, margin: 4 },
    txt: { color: '#fff', fontWeight: '600', textAlign: 'center'},
});