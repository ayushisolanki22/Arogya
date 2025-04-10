import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const WeatherFeelingScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "I feel too hot and sweat a lot in summer",
    "I feel very cold even when others are fine",
    "I feel heavy and tired when it's humid",
    "I feel okay in all weather"
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.question}>How do you feel in different weather?</Text>
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
                color="black"
              />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('DiscoverPrakrutiScreen')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('FollowUpQuestionsScreen1')}
          >
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
    padding: 20,
    paddingTop: 120,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  question: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 40,
    color: '#6D3B1E',
  },
  optionsContainer: {
    marginBottom: 40,
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
    marginTop: 130,
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
