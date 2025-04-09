import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const GenderSelectionScreen = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Name.png')} style={styles.nameImage} />
            <Text style={styles.title}>Select your gender</Text>
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
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.navigate('NameInputScreen')}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('BirthdateInputScreen')}
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
        paddingBottom: 130, // ⬅️ Reduced to allow components to move lower
    },
    
    nameImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 20, // ⬅️ Added to push it down slightly
        marginBottom: 0, // ⬅️ Adjusted to bring it closer to title
    },
    
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 0,
        marginTop: 10,
    },

    genderContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10, // ⬅️ Increased to space from title
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
        width: width * 0.4,
        height: height * 0.18,
        resizeMode: 'contain',
        opacity: 0.2,
        marginTop: 45,
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
        width: 100,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 80,
        alignSelf: 'center',
    },
});



export default GenderSelectionScreen;
