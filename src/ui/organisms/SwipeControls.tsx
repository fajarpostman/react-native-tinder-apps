/**
 * @author Fajar
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

type SwipeControlProps = {
  onLike: () => void;
  onDislike: () => void;
};

export default function SwipeControls({ onLike, onDislike }: SwipeControlProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.btn, { borderColor: "red" }]} onPress={onDislike}>
        <Ionicons name="close" size={36} color="red" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { borderColor: "green" }]} onPress={onLike}>
        <Ionicons name="heart" size={36} color="green" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20 },
  btn: { width: 64, height: 64, borderRadius: 32, borderWidth: 3, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }
});
