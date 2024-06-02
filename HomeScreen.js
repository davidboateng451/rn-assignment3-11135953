import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import TaskCard from '../components/TaskCard';
import exerciseImage from '../assets/exercise.png';
import studyImage from '../assets/study.png';
import filterIcon from '../assets/filter.png'; 

const categories = [
  { title: 'Exercise', tasks: 12, image: exerciseImage },
  { title: 'Study', tasks: 12, image: studyImage },
  { title: 'Code', tasks: 8, image: require('../assets/code.png') },
  { title: 'Cook', tasks: 5, image: require('../assets/cook.png') },
  { title: 'Read', tasks: 7, image: require('../assets/read.png') },
  { title: 'Write', tasks: 6, image: require('../assets/write.png') },
  { title: 'Meditate', tasks: 4, image: require('../assets/meditate.png') },
  { title: 'Sleep', tasks: 9, image: require('../assets/sleep.png') },
];

const tasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Code Review',
  'Reading a Book',
  'Writing an Article',
  'Cooking Dinner',
  'Meditation',
  'Jogging',
  'Learning React Native',
  'Designing UI',
  'Watching a Tutorial',
  'Sleeping',
  'Organizing Desk',
  'Attending Meeting',
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
          <Image source={filterIcon} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.ongoingTasksContainer}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <ScrollView style={styles.ongoingTasks} showsVerticalScrollIndicator={true}>
          {tasks.map((task, index) => (
            <TaskCard key={index} title={task} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 18,
    color: 'gray',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginRight: 10,
  },
  categories: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ongoingTasksContainer: {
    marginBottom: 20,
  },
  ongoingTasks: {
    maxHeight: 200,
  },
  filterButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
});

export default HomeScreen;
