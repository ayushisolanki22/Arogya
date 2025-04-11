<<<<<<< HEAD
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
=======
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Platform } from 'react-native';
>>>>>>> fa3a34b81125173e642abda6ac1cfbb8857b1a96
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const BirthdateInputScreen = () => {
  const [birthdate, setBirthdate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const navigation = useNavigation();

<<<<<<< HEAD
  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || birthdate;
    setShowPicker(Platform.OS === 'ios'); // Close on Android, stay open on iOS
    setBirthdate(currentDate);
  };
=======
    const handleDateChange = (_event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setBirthdate(selectedDate); // Ensure selectedDate is not undefined before setting state
        }
    };
>>>>>>> fa3a34b81125173e642abda6ac1cfbb8857b1a96

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={require('../../assets/images/Cake.png')} style={styles.icon} />
        <Text style={styles.title}>Enter your birthdate</Text>

<<<<<<< HEAD
        <TouchableOpacity style={styles.dateInput} onPress={toggleDatePicker}>
          <Text style={styles.dateText}>{birthdate.toDateString()}</Text>
          <AntDesign name="caretdown" size={16} color="gray" />
        </TouchableOpacity>
=======
            {showPicker && (
                <DateTimePicker
                    value={birthdate}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                    onChange={handleDateChange}
                    textColor="black" // Set text color to black
                    themeVariant="dark" // Change the calendar background to black
                    minimumDate={new Date('1900-01-01')} // Allow older years
                    maximumDate={new Date()}
                />
            )}
>>>>>>> fa3a34b81125173e642abda6ac1cfbb8857b1a96

        {showPicker && (
          Platform.OS === 'ios' ? (
            <View style={styles.pickerContainer}>
              <DateTimePicker
                value={birthdate}
                mode="date"
                display="spinner"
                onChange={handleDateChange}
                minimumDate={new Date('1900-01-01')}
                maximumDate={new Date('2025-12-31')}
                textColor="black"
                style={styles.datePicker}
              />
            </View>
          ) : (
            <DateTimePicker
              value={birthdate}
              mode="date"
              display="calendar"
              onChange={handleDateChange}
              minimumDate={new Date('1900-01-01')}
              maximumDate={new Date('2025-12-31')}
              themeVariant="light"
            />
          )
        )}

        <Text style={styles.description}>
          To provide you with the best health insights, please enter your birthdate.
          This helps us personalize your experience and ensure accurate recommendations.
        </Text>

        <Image source={require('../../assets/images/Yoga.png')} style={styles.yogaImage} />
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('GenderSelection')}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('RegistrationSuccessScreen')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentWrapper: {
    marginTop: -130,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 180,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: -170,
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  dateText: {
    color: 'black',
    fontSize: 14,
  },
  pickerContainer: {
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  datePicker: {
    width: '100%',
  },
  description: {
    fontSize: 14,
    color: '#6D4C41',
    textAlign: 'center',
    marginBottom: 20,
  },
  yogaImage: {
    width: width * 0.4,
    height: height * 0.18,
    resizeMode: 'contain',
    opacity: 0.2,
    marginTop: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  backButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#A4C27E',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginLeft: 177,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BirthdateInputScreen;