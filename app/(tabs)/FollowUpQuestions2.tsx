import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
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
          <Text style={styles.question}>Do you eat small meals but snack often? </Text>
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
          <Text style={styles.question}>Do you feel hot or get headaches when hungry?  </Text>
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
          <Text style={styles.question}>Do you eat more when stressed or at night? </Text>
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
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('AppetiteScreen')}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('DigestionScreen')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Arogya Logo at bottom of screen */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/images/ArogyaLogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E1',
    padding: 20,
    paddingTop: 90,
  },
  scrollContent: {
    paddingBottom: 80, // Increased to make room for logo
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D3B1E',
    marginBottom: 15,
    textAlign: 'left', // Changed to left align
  },
  questionContainer: {
    marginBottom: 15,
    alignItems: 'flex-start', // Left align the content
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3E5025',
    marginBottom: 10,
    textAlign: 'left', // Ensure left alignment
  },
  optionRow: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Left align options
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 3, // Add some vertical spacing between options
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
    marginTop: 103,
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
  logoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
  },
});

export default FollowUpQuestionsScreen1;