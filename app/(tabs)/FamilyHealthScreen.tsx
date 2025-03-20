import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const FamilyHealthScreen = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

    const options = [
        'Thyroid',
        'Diabetes',
        'HyperTension',
        'HypoTension',
        'None of the above'
    ];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Do you have any health issues now?</Text>
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
                            color={selectedOption === option ? 'black' : 'black'}
                        />
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Image source={require('../../assets/images/Heart.png')} style={styles.exerciseImage} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('NextScreen')}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.logo}>AROGYA</Text>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3E5025',
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginLeft: '10%',
    },
    optionsContainer: {
        width: '80%',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8E9A1',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
    },
    selectedOption: {
        backgroundColor: '#A4C27E',
    },
    optionText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
    },
    exerciseImage: {
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    logo: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3E5025',
    },
});

export default FamilyHealthScreen;
