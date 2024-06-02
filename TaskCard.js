import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 16,
  },
});

export default TaskCard;
