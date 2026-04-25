import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title='Go to List Screen'
          onPress={() => navigation.navigate('List')}
        />
      </View>
      <TouchableOpacity
        style={styles.touchContainer}
        onPress={() => navigation.navigate('Sport')}
      >
        <Text style={styles.touch}>Go to Sport</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginHorizontal: 40,
    marginBottom: 20,
  },
  touchContainer: {
    marginHorizontal: 40,
    backgroundColor: '#ff9f9f',
    padding: 15,
    borderRadius: 10,
  },
  touch: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MenuScreen;