import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FollowUpQuestionsScreen = () => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({
    vata: null,
    pitta: null,
    kapha: null,
  });

  const handleSelect = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follow Up Questions :</Text>
      
      <View style={styles.questionContainer}>
        <Text style={styles.question}>Do you need extra layers even when others feel okay? (Vata)</Text>
        <View style={styles.optionRow}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleSelect('vata', 'yes')}
          >
            <Ionicons 
              name={answers.vata === 'yes' ? 'radio-button-on' : 'radio-button-off'} 
              size={20} 
              color={answers.vata === 'yes' ? '#A4C27E' : 'black'}
            />
            <Text style={styles.optionText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleSelect('vata', 'no')}
          >
            <Ionicons 
              name={answers.vata === 'no' ? 'radio-button-on' : 'radio-button-off'} 
              size={20} 
              color={answers.vata === 'no' ? '#A4C27E' : 'black'}
            />
            <Text style={styles.optionText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.questionContainer}>
        <Text style={styles.question}>Do you sweat a lot even when it’s not very hot? (Pitta)</Text>
        <View style={styles.optionRow}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleSelect('pitta', 'yes')}
          >
            <Ionicons 
              name={answers.pitta === 'yes' ? 'radio-button-on' : 'radio-button-off'} 
              size={20} 
              color={answers.pitta === 'yes' ? '#A4C27E' : 'black'}
            />
            <Text style={styles.optionText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleSelect('pitta', 'no')}
          >
            <Ionicons 
              name={answers.pitta === 'no' ? 'radio-button-on' : 'radio-button-off'} 
              size={20} 
              color={answers.pitta === 'no' ? '#A4C27E' : 'black'}
            />
            <Text style={styles.optionText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.questionContainer}>
        <Text style={styles.question}>Do you feel slow and heavy in humid climates? (Kapha)</Text>
        <View style={styles.optionRow}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleSelect('kapha', 'yes')}
          >
            <Ionicons 
              name={answers.kapha === 'yes' ? 'radio-button-on' : 'radio-button-off'} 
              size={20} 
              color={answers.kapha === 'yes' ? '#A4C27E' : 'black'}
            />
            <Text style={styles.optionText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleSelect('kapha', 'no')}
          >
            <Ionicons 
              name={answers.kapha === 'no' ? 'radio-button-on' : 'radio-button-off'} 
              size={20} 
              color={answers.kapha === 'no' ? '#A4C27E' : 'black'}
            />
            <Text style={styles.optionText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('WeatherFeelingScreen')}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E1',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D3B1E',
    marginBottom: 15,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 15,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3E5025',
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
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

export default FollowUpQuestionsScreen;