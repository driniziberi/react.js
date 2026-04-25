import React from "react";
import { Text, View, FlatList, StyleSheet , Button } from "react-native";

const students = [
  { name: 'Drin', lastname: 'ziberi', age: '15' },
  { name: 'Ron', lastname: 'Sallati', age: '15' },
  { name: 'Erlis', lastname: 'speci', age: '67' }
];

const ListScreen = (Props) => {
  return (
    <View>
      <Text style={styles.textStyle}>List Screen</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return <Text>{item.name} {item.lastname}-{item.age}</Text>;
        }}
      />

      <Button
      title="Go back"
      onPress={() => Props.navigation.goBack()}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default ListScreen;