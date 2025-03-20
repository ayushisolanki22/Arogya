import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; // For dropdown icon

const { width, height } = Dimensions.get('window');

const BirthdateInputScreen = () => {
    const [birthdate, setBirthdate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());

    const handleDateChange = (_event: DateTimePicker, selectedDate?: Date) => {
        if (selectedDate) {
            setDate(selectedDate); // Ensure selectedDate is not undefined before setting state
        }
    };

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Cake.png')} style={styles.icon} />
            <Text style={styles.title}>Enter your birthdate</Text>
            <TouchableOpacity style={styles.dateInput} onPress={toggleDatePicker}>
                <Text style={styles.dateText}>{birthdate.toDateString()}</Text>
                <AntDesign name="caretdown" size={16} color="gray" />
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    value={birthdate}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                    onChange={handleDateChange}
                    textColor="black" // Set text color to black
                    themeVariant="dark" // Change the calendar background to black
                    minimumDate={new Date('1900-01-01')} // Allow older years
                    maximumDate={new Date('2025-12-31')}
                />
            )}

            <Text style={styles.description}>
                To provide you with the best health insights, please enter your birthdate. This helps us personalize your experience and ensure accurate recommendations.
            </Text>
            <Image source={require('../../assets/images/Yoga.png')} style={styles.yogaImage} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.navigate('NameInputScreen')}
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
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    dateInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    dateText: {
        color: 'black',
        fontSize: 14,
    },
    description: {
        fontSize: 14,
        color: '#6D4C41',
        textAlign: 'center',
        marginBottom: 20,
    },
    yogaImage: {
        width: width * 0.5,
        height: height * 0.2,
        resizeMode: 'contain',
        opacity: 0.2,
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
    },
    backButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    nextButton: {
        backgroundColor: '#A4C27E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 40,
    },
});

export default BirthdateInputScreen;
