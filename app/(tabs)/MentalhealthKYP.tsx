import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const WeatherFeelingScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Anxious or overthinking  ",
    "Angry or frustrated  ",
    "Calm but sometimes lazy  "
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.question}>How do you feel most of the time?</Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.option, selectedOption === option && styles.selectedOption]}
              onPress={() => setSelectedOption(option)}
            >
              <Ionicons
                name={selectedOption === option ? "radio-button-on" : "radio-button-off"}
                size={20}
                color={selectedOption === option ? "black" : "black"}
              />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('StressKYP')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('MentalhealthFollowup')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E7AE',
  },
  scrollContent: {
    padding: 20,
    flexGrow: 1,
    paddingTop: 270,
    paddingBottom: 40,
  },
  question: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#6D3B1E',
    marginTop: -150,
  },
  optionsContainer: {
    marginTop: -20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF3D6',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: '#A4C27E',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 240,
  },
  backButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  nextButton: {
    backgroundColor: '#A4C27E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WeatherFeelingScreen;