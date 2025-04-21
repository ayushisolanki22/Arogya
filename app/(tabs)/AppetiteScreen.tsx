import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AppetiteScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Rarely hungry",
    "Very hungry, often.",
    "Slow hunger, but can eat a lot ",
    "Balanced hunger ",
    "Hunger changes daily "
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.question}>How often do you feel hungry?</Text>

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
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('FollowUpQuestionsScreen1')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('FollowUpQuestions2')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed logo at bottom */}
      <Image
        source={require('../../assets/images/ArogyaLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E7AE',
    padding: 20,
    paddingTop: 90,
  },
  scrollContent: {
    paddingBottom: 100, // Give space for logo
  },
  question: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
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
    marginTop: 60,
    marginBottom: 20,
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
  logo: {
    width: 150,
    height: 40,
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});

export default AppetiteScreen;
