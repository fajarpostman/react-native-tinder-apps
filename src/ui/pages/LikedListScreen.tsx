/**
 * @author Fajar Postman
 */

import React from "react";
import { FlatList, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { PeopleRepository } from "../../data/repositories/PeopleRepository";
import PersonCard from "../organisms/PersonCard";
import { Person } from "../../domain/models/Person";

export default function LikedListScreen() {
    const { data } = useQuery<Person[], Error>({
        queryKey: ['liked'] as const,
        queryFn: () => PeopleRepository.getLiked()
    });

    return (
        <View style={{ flex: 1, padding: 16}}>
            <FlatList 
                data={ data || []}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <PersonCard person={item} />}
            />
        </View>
    )
}