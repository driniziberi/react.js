import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ButtonScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Button Screen</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button
        title='Click Me'
        color='purple'
        onPress={() => {
          setCounter(counter + 1);
          console.log('Button Click', counter + 1);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 1);
          console.log('Touchable Click', counter + 1);
        }}
      >
        <Text style={styles.touch}>Click Touch Element</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
  },
  counter: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  touch: {
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    padding: 10,
  },
});

export default ButtonScreen;