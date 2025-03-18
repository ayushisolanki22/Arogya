import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const GenderSelectionScreen = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SELECT YOUR GENDER</Text>
            <View style={styles.genderContainer}>
                <TouchableOpacity
                    style={[styles.genderCircle, selectedGender === 'Male' && styles.selectedGender]}
                    onPress={() => setSelectedGender('Male')}
                >
                    <Text style={styles.genderText}>MALE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.genderCircle, selectedGender === 'Female' && styles.selectedGender]}
                    onPress={() => setSelectedGender('Female')}
                >
                    <Text style={styles.genderText}>FEMALE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.genderCircle, selectedGender === 'Other' && styles.selectedGender]}
                    onPress={() => setSelectedGender('Other')}
                >
                    <Text style={styles.genderText}>OTHER</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../../assets/images/Yoga.png')} style={styles.yogaImage} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('NameInputScreen')}
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    genderContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    genderCircle: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: (width * 0.25) / 2,
        backgroundColor: '#F4E1A6',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    selectedGender: {
        backgroundColor: '#A4C27E',
    },
    genderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    yogaImage: {
        width: width * 0.5,
        height: height * 0.2,
        resizeMode: 'contain',
        opacity: 0.2,
        marginTop: 20,
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

export default GenderSelectionScreen;
