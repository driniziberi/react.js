import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SportDetails = ({ image, name, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.img} />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  cardWrapper: {
    width: 200,
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  infoWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SportDetails;