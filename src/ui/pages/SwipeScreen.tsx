/**
 * @author Fajar Postman
 */

import React, { useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { usePeopleInfinite, useLikeDislike } from '../../hooks/usePeopleInfinite';
import SwipeDeck from '../templates/SwipeDeck';
import SwipeControl from '../organisms/SwipeControls';

export default function SwipeScreen() {
    const { data, isLoading, error } = usePeopleInfinite();
    const { like, dislike} = useLikeDislike();

    const people = useMemo(() => {
        if (!data?.pages) return [];
        return data.pages.flatMap(page => page.data ?? []);
    }, [data]);

    if (isLoading) return <ActivityIndicator style={{ flex: 1 }} />;

    return (
        <View style={{ flex: 1}}>
            <SwipeDeck 
                people={people}
                onSwipeRight={(id) => like.mutate(id)}
                onSwipeLeft={(id) => dislike.mutate(id)}
            />
            <SwipeControl 
                onLike={() => like.mutate(people[0]?.id)}
                onDislike={() => dislike.mutate(people[0]?.id)}
            />
        </View>
    );
}