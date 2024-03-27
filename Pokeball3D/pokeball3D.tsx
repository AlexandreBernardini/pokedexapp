import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

export default function PokeballAnimation() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gesture) => {
        const velocity = Math.sqrt(gesture.vx * gesture.vx + gesture.vy * gesture.vy);
        const distance = Math.sqrt(pan.x._value * pan.x._value + pan.y._value * pan.y._value);
        const duration = Math.max(200, Math.min(500, distance / velocity * 1000)); // Limiting duration between 200ms and 500ms

        // Continue the movement
        Animated.decay(pan, {
          velocity: { x: gesture.vx, y: gesture.vy },
          deceleration: 0.997,
          useNativeDriver: false
        }).start();

        // Reset the position after 2 seconds
        setTimeout(() => {
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 500,
            useNativeDriver: false
          }).start();
        }, 2000);
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.pokeball, pan.getLayout()]}
        {...panResponder.panHandlers}
      >
        <View style={styles.pokeballRed} />
        <View style={styles.pokeballWhite} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 800,
    marginRight: 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#000',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  pokeballRed: {
    position: 'absolute',
    width: 60,
    height: 30,
    backgroundColor: 'red',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'black',
    top: -4,
  },
  pokeballWhite: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    bottom: 18,
    right: 18,
    zIndex: 2,
  },
});
