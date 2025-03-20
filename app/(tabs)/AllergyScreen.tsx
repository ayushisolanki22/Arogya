import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const AllergyScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Yes, to food', 'Yes, to medications', 'Yes, to dust/pollens', 'No allergies'];

  return (
    <LinearGradient colors={['#fffbe0', '#ffecb3']} style={styles.container}>
      <Text style={styles.title}>Do you have any known allergies?</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.option, selectedOption === option && styles.selectedOption]}
          onPress={() => setSelectedOption(option)}
        >
          <Ionicons
            name={selectedOption === option ? 'radio-button-on' : 'radio-button-off'}
            size={24}
            color={selectedOption === option ? 'green' : 'black'}
          />
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.nextButton]}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/images/Heart.png')} style={styles.image} />
      <Text style={styles.logoText}>AROGYA</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffecb3',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#b3e69e',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  nextButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    opacity: 0.5,
  },
  logoText: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default AllergyScreen;
