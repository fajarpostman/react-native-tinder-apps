/**
 * @author Fajar Postman
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';

type AvatarProps = {
    uri: string;
    size?: number;
}

export default function Avatar({ uri, size = 48 } : AvatarProps) {
    return <Image source={{ uri }} style={[styles.img, { width: size, height: size }]} />;
}

const styles = StyleSheet.create({
    img: { borderRadius: 999 },
});