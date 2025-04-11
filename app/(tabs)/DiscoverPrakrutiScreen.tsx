import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Import Ionicons from expo vector icons, or use your preferred icon set
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const DiscoverPrakrutiScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Back Arrow Button */}
            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Ionicons name="arrow-back" size={24} color="#3E5025" />
            </TouchableOpacity>
            
            <Text style={styles.title}>Discover Your Prakruti! 🌱</Text>
            <Text style={styles.description}>
                Unlock the secrets of your unique body-mind constitution with our Ayurveda Prakruti test! ✨🙍
            </Text>
            <Text style={styles.description}>
                Understand whether you are Vata, Pitta, or Kapha and get personalized wellness, diet, and lifestyle recommendations to balance your health naturally. 🌱
            </Text>
            <Text style={styles.description}>
                Take the test now and embark on a journey to holistic well-being! 💚
            </Text>

            <Image source={require('../../assets/images/Ayurveda.png')} style={styles.image} />

            <Text style={styles.highlight}>Balance your Prakruti, balance your life.</Text>

            {/* Buttons Above Logo */}
            <View style={styles.bottomButtons}>
                <TouchableOpacity
                    style={[styles.navButton, styles.backButton]}
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Text style={styles.navButtonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.navButton, styles.nextButton]}
                    onPress={() => navigation.navigate('WeatherFeelingScreen')}
                >
                    <Text style={styles.navButtonText}>Next</Text>
                </TouchableOpacity>
            </View>

            {/* Logo */}
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
        position: 'relative', // Added to position the back button
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3E5025',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#6E6E6E',
        textAlign: 'center',
        marginBottom: 15,
    },
    highlight: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3E5025',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    image: {
        width: width * 0.4,
        height: height * 0.2,
        resizeMode: 'contain',
        marginVertical: 20,
        opacity: 0.5,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    navButton: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    backButton: {
        backgroundColor: '#FFFFFF',
    },
    nextButton: {
        backgroundColor: '#A4C27E',
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 30,
    },
});

export default DiscoverPrakrutiScreen;