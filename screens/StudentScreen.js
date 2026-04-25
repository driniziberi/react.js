import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const Hobbies = [
  { id: '1', hobby: 'Football' },
  { id: '2', hobby: 'Gaming' },
  { id: '3', hobby: 'Basketball' },
  { id: '4', hobby: 'Music' },
];

const name = 'Drin';
const lastname = 'Ziberi';
const age = '15';

const fullname = `${name} ${lastname}`;

const Studentlist = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <View style={styles.studentCard}>
        <Text style={styles.text}>{fullname}</Text>
        <Text style={styles.text}>Age: {age}</Text>
      </View>
      <Text style={styles.subtitle}>Hobbies</Text>
      <FlatList
        data={Hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hobbyCard}>
            <Text style={styles.hobbyText}>{item.hobby}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  studentCard: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  hobbyCard: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hobbyText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Studentlist;