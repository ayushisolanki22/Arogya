import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const DigestionScreen = () => {
  const navigation = useNavigation(); // ✅ Use navigation hook
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How is your digestion?</Text>

      {/* Vata */}
      <TouchableOpacity
        style={[
          styles.optionContainer,
          selectedOption === 'vata' && styles.selectedOption,
        ]}
        onPress={() => setSelectedOption('vata')}
      >
        <RadioButton
          value="vata"
          status={selectedOption === 'vata' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption('vata')}
          color="#6DA34D"
        />
        <Text style={styles.optionText}>
          Irregular, bloated, or constipated (Vata)
        </Text>
      </TouchableOpacity>

      {/* Pitta */}
      <TouchableOpacity
        style={[
          styles.optionContainer,
          selectedOption === 'pitta' && styles.selectedOption,
        ]}
        onPress={() => setSelectedOption('pitta')}
      >
        <RadioButton
          value="pitta"
          status={selectedOption === 'pitta' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption('pitta')}
          color="#EAC64C"
        />
        <Text style={styles.optionText}>
          Fast, acidic, or loose stools (Pitta)
        </Text>
      </TouchableOpacity>

      {/* Kapha */}
      <TouchableOpacity
        style={[
          styles.optionContainer,
          selectedOption === 'kapha' && styles.selectedOption,
        ]}
        onPress={() => setSelectedOption('kapha')}
      >
        <RadioButton
          value="kapha"
          status={selectedOption === 'kapha' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedOption('kapha')}
          color="#EAC64C"
        />
        <Text style={styles.optionText}>
          Slow, heavy, or sluggish (Kapha)
        </Text>
      </TouchableOpacity>

      {/* Navigation Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('FollowUpQuestions2')}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => console.log('Next pressed')} // Replace with navigation
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DigestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf5cc',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5a3e2b',
    marginBottom: 30,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F7E6A2',
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
  },
  selectedOption: {
    backgroundColor: '#A4D07B',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#3a2f1b',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    width: '100%',
  },
  backButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#6DA34D',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
});
