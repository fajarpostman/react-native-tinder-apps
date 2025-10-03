/**
 * @author Fajar Postman
 */

import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import PersonCard from '../organisms/PersonCard';
import { Person } from '../../domain/models/Person';

interface SwipeDeckProps {
    people: Person[];
    onSwipeRight: (id: number) => void;
    onSwipeLeft: (id: number) => void;
}

export default function SwipeDeck({ people, onSwipeRight, onSwipeLeft }: SwipeDeckProps) {
    return (
        <View style={{ flex: 1 }}>
            <Swiper
                cards={people}
                renderCard={(person) => <PersonCard person={person} />}
                onSwipedRight={(i) => onSwipeRight(people[i].id)}
                onSwipedLeft={(i) => onSwipeLeft(people[i].id)}
                stackSize={3}
                verticalSwipe={false}
                backgroundColor="transparent"
                overlayLabels={{
                    left: {
                        title: "NOPE",
                        style: {
                            label: { backgroundColor: "transparent", borderColor: "red", color: "red", fontSize: 32, borderWidth: 4, padding: 8 },
                            wrapper: { flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-start", marginTop: 20, marginLeft: -20 }
                        }
                    },
                    right: {
                        title: "LIKE",
                        style: {
                            label: { backgroundColor: "transparent", borderColor: "green", color: "green", fontSize: 32, borderWidth: 4, padding: 8 },
                            wrapper: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", marginTop: 20, marginLeft: 20 }
                        }
                    }
                }}
            />
        </View>
    );
}