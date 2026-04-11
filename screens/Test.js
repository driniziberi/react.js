import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const Cars = [
  { name: 'BMW', Model: '7', Years: '2015' },
  { name: 'Mercedes', Model: 'S-class', Years: '2018' },
  { name: 'Golf', Model: '8 r', Years: '2024' }
];

const CarsList = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Cars List</Text>

      <FlatList
        
        data={Cars}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.box}>
              {item.name} {item.Model} - {item.Years}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20,
  },
  box: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 15,
    marginBottom: 10,
    textAlign:"center",
  }
});

export default CarsList;