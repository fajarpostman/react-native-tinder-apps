/**
 * @author Fajar Postman
 */

import React from "react";
import { View } from 'react-native';
import Avatar from "../atoms/Avatar";
import TextLabel from "../atoms/TextLabel";

type PersonInfoProps = {
    name: string;
    age: number;
    pictures?: string | null;
}

export default function PersonInfo({ name, age, pictures }: PersonInfoProps) {
    const avatarUrl = pictures && pictures.trim() !== ""
        ? pictures
        : "https://via.placeholder.com/400";
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Avatar uri={avatarUrl} size={48} />
            <TextLabel size={18} weight="600">{name}, {age}</TextLabel>
        </View>
    )
}