/**
 * @author Fajar Postman
 */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwipeScreen from "../ui/pages/SwipeScreen";
import LikedListScreen from "../ui/pages/LikedListScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tinder Apps" component={SwipeScreen} />
            <Stack.Screen name="Liked" component={LikedListScreen} />
        </Stack.Navigator>
    );
}