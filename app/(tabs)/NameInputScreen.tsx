import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const NameInputScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.icon}>👤</Text>
            <Text style={styles.title}>Enter your name below</Text>
            <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Enter your Firstname"
                placeholderTextColor="gray"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Enter your Lastname"
                placeholderTextColor="gray"
                value={lastName}
                onChangeText={setLastName}
            />
            <Image source={require('../../assets/images/Yoga.png')} style={styles.yogaImage} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton}>
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
    },
    icon: {
        fontSize: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
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

export default NameInputScreen;