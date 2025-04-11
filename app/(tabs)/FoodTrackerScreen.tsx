import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const getFormattedDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

const mealTypes = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];

const FoodTrackScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedDate = route.params?.date || getFormattedDate(new Date());

  const [mealData, setMealData] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: [],
  });

  const [inputs, setInputs] = useState({
    Breakfast: { food: '', cal: '' },
    Lunch: { food: '', cal: '' },
    Dinner: { food: '', cal: '' },
    Snacks: { food: '', cal: '' },
  });

  const handleAddFood = (mealType) => {
    const food = inputs[mealType].food.trim();
    const cal = parseInt(inputs[mealType].cal);

    if (food && !isNaN(cal)) {
      const newEntry = { id: Date.now().toString(), name: food, cal };
      setMealData((prev) => ({
        ...prev,
        [mealType]: [...prev[mealType], newEntry],
      }));

      setInputs((prev) => ({
        ...prev,
        [mealType]: { food: '', cal: '' },
      }));
    }
  };

  const calculateMealCalories = (mealType) =>
    mealData[mealType].reduce((sum, item) => sum + item.cal, 0);

  const totalCalories = mealTypes.reduce(
    (sum, meal) => sum + calculateMealCalories(meal),
    0
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('InsightsScreen')} style={styles.backButton}>
          <Image source={require('../../assets/images/BackButton.png')} style={styles.backIcon} />
        </TouchableOpacity>
        {/* Date text now aligned with back button */}
        <Text style={styles.dateText}>{selectedDate}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {mealTypes.map((meal) => (
          <View key={meal} style={styles.mealSection}>
            <Text style={styles.mealTitle}>{meal}</Text>

            {/* Input Fields */}
            <View style={styles.inputRow}>
              <TextInput
                placeholder="Food Item"
                style={styles.input}
                value={inputs[meal].food}
                placeholderTextColor="#000"
                onChangeText={(text) =>
                  setInputs((prev) => ({ ...prev, [meal]: { ...prev[meal], food: text } }))
                }
              />
              <TextInput
                placeholder="Calories"
                style={styles.input}
                keyboardType="numeric"
                value={inputs[meal].cal}
                placeholderTextColor="#000"
                onChangeText={(text) =>
                  setInputs((prev) => ({ ...prev, [meal]: { ...prev[meal], cal: text } }))
                }
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddFood(meal)}
              >
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>

            {/* Meal List */}
            {mealData[meal].length > 0 ? (
              mealData[meal].map((item) => (
                <View key={item.id} style={styles.foodItem}>
                  <Text style={styles.foodText}>{item.name}</Text>
                  <Text style={styles.calText}>{item.cal} cal</Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyText}>No items added yet.</Text>
            )}

            {/* Total Calories for meal */}
            <Text style={styles.mealTotalText}>
              Total {meal}: {calculateMealCalories(meal)} cal
            </Text>
          </View>
        ))}

        {/* Overall Total - Moved higher with adjustments to margins */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Daily Total: {totalCalories} cal</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodTrackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', // Changed to baby pink
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 20,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  
  mealSection: {
    marginBottom: 30,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    marginRight: 10,
    color: '#000', // Ensuring text input color is black
  },
  addButton: {
    backgroundColor: '#F8F1B0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  addText: {
    fontWeight: 'bold',
  },
  foodItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  foodText: {
    fontSize: 16,
    color: '#000', // Ensuring food text color is black
  },
  calText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Ensuring calories text color is black
  },
  emptyText: {
    color: 'gray',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  mealTotalText: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  totalContainer: {
    marginTop: 0, // Reduced from 20 to move it higher
    marginBottom: 30, // Reduced from 50 to adjust overall spacing
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});