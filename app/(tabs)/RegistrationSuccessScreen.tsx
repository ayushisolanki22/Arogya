import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';

const { width, height } = Dimensions.get('window');

const RegistrationSuccessScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Trigger confetti after mount
    }, []);

    return (
        <View style={styles.container}>
            <ConfettiCannon count={200} origin={{ x: width / 2, y: 0 }} fadeOut={true} />
            <Text style={styles.title}>🎉 Registration Successful! 🎉</Text>
            <Text style={styles.subtitle}>Dear [User's Name],</Text>
            <Text style={styles.description}>Welcome to Arogya - Your Personalized Ayurvedic Wellness Companion! 🌱{"\n"}Your registration is successfully completed.</Text>
            <View style={styles.checklistContainer}>
                <Text style={styles.checklistItem}>✅ Discover your unique Prakruti (body type)</Text>
                <Text style={styles.checklistItem}>✅ Track your stress, food, and water intake</Text>
                <Text style={styles.checklistItem}>✅ Get personalized Ayurvedic remedies</Text>
                <Text style={styles.checklistItem}>✅ Consult AyurBot for instant health advice</Text>
            </View>
            <Text style={styles.journeyText}>✨ Start your wellness journey towards a balanced and healthy lifestyle with Ayurveda! ✨{"\n"}👉 Let’s Begin! 🚀</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('BirthdateInputScreen')}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('WelcomeScreen')}>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#6D4C41',
        textAlign: 'center',
        marginBottom: 20,
    },
    checklistContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    checklistItem: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    journeyText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
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
});

export default RegistrationSuccessScreen;
