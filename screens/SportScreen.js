import React from 'react';
import SportDetails from '../components/SportDetails';
import { StyleSheet, Text, View } from 'react-native';

const SportScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Sport Screen</Text>
      <SportDetails
        name='Drin Ziberi'
        image={require('../assets/android-icon-background.png')}
        description='e ka mar vendin e par'
      />
      <SportDetails
        name='Erlis Speci'
        image={require('../assets/android-icon-background.png')}
        description='e ka mar vendin e par'
      />
      <SportDetails
        name='RRoni SAllati'
        image={require('../assets/android-icon-background.png')}
        description='e ka mar vendin e par'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default SportScreen;