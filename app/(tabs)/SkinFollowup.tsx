import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FollowUpQuestionsScreen1 = () => {
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Follow Up Questions :</Text>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>Does your skin feel rough or flaky? </Text>
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
          <Text style={styles.question}>Do you get acne after eating spicy food?  </Text>
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
          <Text style={styles.question}>Does your skin feel sticky or heavy in humid weather? </Text>
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

        <View style={styles.questionContainer}>
          <Text style={styles.question}>Does your skin change a lot with seasons?  </Text>
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
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('SkinKYP')}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('MemoryKYP')}>
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
    backgroundColor: '#FFF9E1',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D3B1E',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 25,
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
    padding: 15,
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
    marginTop: 30,
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

export default FollowUpQuestionsScreen1;
