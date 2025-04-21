import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BalancedVegDietScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('DietSelectionScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Image
          source={require('../../assets/images/BackButton.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>Balanced Diet Plan - Vegetarian</Text>

        <Text style={styles.section}>🥣 Breakfast (7:00 AM - 9:00 AM)</Text>
        <Text style={styles.item}>Oatmeal with Fresh Fruits</Text>
        <Text style={styles.item}>Green Smoothie</Text>

        <Text style={styles.section}>🍎 Mid-Morning Snack (10:30 AM - 11:30 AM)</Text>
        <Text style={styles.item}>Apple with Almonds</Text>

        <Text style={styles.section}>🍱 Lunch (12:30 PM - 2:00 PM)</Text>
        <Text style={styles.item}>Vegetable Stir Fry with Quinoa</Text>
        <Text style={styles.item}>Side Salad</Text>

        <Text style={styles.section}>🥒 Afternoon Snack (4:00 PM - 5:00 PM)</Text>
        <Text style={styles.item}>Hummus with Veggie Sticks</Text>

        <Text style={styles.section}>🌙 Dinner (6:30 PM - 8:00 PM)</Text>
        <Text style={styles.item}>Lentil and Chickpea Curry</Text>
        <Text style={styles.item}>Roasted Vegetables</Text>

        <Text style={styles.section}>🍯 Evening Snack 
          (Optional, 8:30 PM - 9:30 PM)</Text>
        <Text style={styles.item}>Greek Yogurt with Honey and Walnuts</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7E7AE' },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 1,
    padding: 10
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  scroll: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  section: { fontSize: 18, fontWeight: '600', marginTop: 15 },
  item: { fontSize: 16, marginTop: 5, color: '#333' }
});

export default BalancedVegDietScreen;
