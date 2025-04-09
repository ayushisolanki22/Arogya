import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LET’S GET TO KNOW YOU!</Text>
            
            <Text style={styles.description}>
                Answer these questions to help us find the perfect routine for you! ✨{"\n"}
                We’ll recommend a plan to build healthy habits that fit your lifestyle.{"\n"}
                Just a few quick questions, and you'll be on your way! 🚀
            </Text>
            
            <Image source={require('../../assets/images/Yoga.png')} style={styles.yogaImage} />
            
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('UserExercise')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            
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
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A772F',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: -height * 0.2, // Moves the title up
    },
    description: {
        fontSize: 16,
        color: '#7A4E3A',
        textAlign: 'center',
        marginBottom: 30,
    },
    yogaImage: {
        width: width * 0.4,   // ⬅️ Reduced from 0.5 to 0.4
        height: height * 0.18, // ⬅️ Reduced from 0.22 to 0.18
        resizeMode: 'contain',
        opacity: 0.2,
        marginTop: 20, // ⬅️ Keeps it close to the boxes
    },
    nextButton: {
        position: 'absolute',
        bottom: 180,
        right: 20,
        backgroundColor: '#A4C27E',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    logo: {
        position: 'absolute',
        bottom: 80, // Adjust as needed
        alignSelf: 'center', // Centers the logo horizontally
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
});

export default WelcomeScreen;
