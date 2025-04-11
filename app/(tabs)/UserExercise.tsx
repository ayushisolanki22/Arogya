import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const UserExercise = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

    const options = [
        'Get tired quickly',
        'Strong and active',
        'Slow and easy',
        'Push hard, recover fast',
        'Struggle to stay consistent'
    ];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>How do you feel during exercise?</Text>
                <View style={styles.optionsContainer}>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedOption === option && styles.selectedOption
                            ]}
                            onPress={() => handleSelect(option)}
                        >
                            <Ionicons
                                name={selectedOption === option ? 'radio-button-on' : 'radio-button-off'}
                                size={20}
                                color="black"
                            />
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Image source={require('../../assets/images/Exercise.png')} style={styles.exerciseImage} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('WelcomeScreen')}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('UserMovement')}
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
        paddingTop: 40,
    },
    contentWrapper: {
        marginTop: -200,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3E5025',
        alignSelf: 'flex-start',
        marginBottom: 15,
    },
    optionsContainer: {
        width: '100%',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8E9A1',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20, // Increased spacing between options
        width: width * 0.9, // Increased horizontal size
        alignSelf: 'center',
    },
    selectedOption: {
        backgroundColor: '#A4C27E',
    },
    optionText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        flexShrink: 1,
    },
    exerciseImage: {
        width: width * 0.3,
        height: height * 0.12,
        resizeMode: 'contain',
        opacity: 0.2,
        marginTop: 50,
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

export default UserExercise;
