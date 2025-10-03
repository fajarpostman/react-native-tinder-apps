/**
 * @author Fajar Postman
 */

import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';

type TextLabelProps = {
    children: ReactNode;
    size?: number;
    weight?: TextStyle['fontWeight'];
}

export default function TextLabel({ children, size = 16, weight= '400'}: TextLabelProps) {
    return <Text style={{ fontSize: size, fontWeight: weight}}>{children}</Text>
}