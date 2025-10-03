/**
 * @author Fajar Postman
 */

import React from "react";
import { View, StyleSheet, Image, Text } from 'react-native';
import { Person } from "../../domain/models/Person";

type PersonCardProps = {
    person: Person;
};

export default function PersonCard({ person }: PersonCardProps) {
  if (!person) return null;
  return (
    <View style={styles.card}>
      <Image source={{ uri: person.pictures }} style={styles.img} />
      <View style={styles.footer}>
        <Text style={styles.name}>{person.name}, {person.age}, {person.longitude}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  img: { width: '100%', height: undefined, aspectRatio: 3/4, resizeMode: 'cover' },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
  },
  name: { color: '#fff', fontSize: 28, fontWeight: 'bold', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 4 }
});
