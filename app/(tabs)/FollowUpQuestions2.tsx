import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const FollowUpQuestions2 = () => {
  const navigation = useNavigation(); // ✅ Use navigation hook

  const [vata, setVata] = useState('');
  const [pitta, setPitta] = useState('');
  const [kapha, setKapha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follow Up Questions :</Text>

      {/* Vata Question */}
      <Text style={styles.question}>
        Do you eat small meals but snack often? 
      </Text>
      <RadioButton.Group
        onValueChange={newValue => setVata(newValue)}
        value={vata}
      >
        <View style={styles.radioContainer}>
          <RadioButton value="yes" />
          <Text style={styles.radioLabel}>Yes</Text>
          <RadioButton value="no" />
          <Text style={styles.radioLabel}>No</Text>
        </View>
      </RadioButton.Group>

      {/* Pitta Question */}
      <Text style={styles.question}>
        Do you feel hot or get headaches when hungry? 
      </Text>
      <RadioButton.Group
        onValueChange={newValue => setPitta(newValue)}
        value={pitta}
      >
        <View style={styles.radioContainer}>
          <RadioButton value="yes" />
          <Text style={styles.radioLabel}>Yes</Text>
          <RadioButton value="no" />
          <Text style={styles.radioLabel}>No</Text>
        </View>
      </RadioButton.Group>

      {/* Kapha Question */}
      <Text style={styles.question}>
        Do you eat more when stressed or at night? 
      </Text>
      <RadioButton.Group
        onValueChange={newValue => setKapha(newValue)}
        value={kapha}
      >
        <View style={styles.radioContainer}>
          <RadioButton value="yes" />
          <Text style={styles.radioLabel}>Yes</Text>
          <RadioButton value="no" />
          <Text style={styles.radioLabel}>No</Text>
        </View>
      </RadioButton.Group>

      {/* Navigation Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('AppetiteScreen')} // ✅ Fixed navigation
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('DigestionScreen')} // Replace with actual next screen name
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FollowUpQuestions2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf5cc',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#5a3e2b',
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
    color: '#3a2f1b',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioLabel: {
    marginRight: 20,
    marginLeft: 4,
    fontSize: 16,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  backButton: {
    backgroundColor: '#f4d35e',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#98c379',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
});
