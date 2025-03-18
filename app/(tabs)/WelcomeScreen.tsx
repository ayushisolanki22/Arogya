import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LET’S GET TO KNOW YOU!</Text>
            
            <Text style={styles.description}>
                Answer these questions to help us find the perfect routine for you! ✨{"\n"}
                We’ll recommend a plan to build healthy habits that fit your lifestyle.{"\n"}
                Just a few quick questions, and you'll be on your way! 🚀
            </Text>
            
            <Image source={require('../../assets/images/Yoga.png')} style={styles.yogaImage} />
            
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
        width: width * 0.5,
        height: height * 0.2,
        resizeMode: 'contain',
        opacity: 0.2,
        marginBottom: 50, // Moves the yoga image down
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 60, // Moves the Arogya logo up slightly
    },
});

export default WelcomeScreen;
