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
        <Text style={styles.headerText}>Food Tracker</Text>
      </View>

      <Text style={styles.dateText}>{selectedDate}</Text>

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
                onChangeText={(text) =>
                  setInputs((prev) => ({ ...prev, [meal]: { ...prev[meal], food: text } }))
                }
              />
              <TextInput
                placeholder="Calories"
                style={styles.input}
                keyboardType="numeric"
                value={inputs[meal].cal}
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

        {/* Overall Total */}
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
    backgroundColor: '#F8F1B0',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
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
  },
  addButton: {
    backgroundColor: '#E3D47A',
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
  },
  calText: {
    fontSize: 16,
    fontWeight: 'bold',
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
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 50,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
