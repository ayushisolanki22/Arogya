import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DiscoverPrakrutiScreen = () => {
    return (
        <View style={styles.container}>
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
        color: '#3E5025',
        marginBottom: 20,
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
    },
    image: {
        width: width * 0.4,
        height: height * 0.2,
        resizeMode: 'contain',
        marginVertical: 20,
        opacity: 0.5,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginTop: 30,
    },
});

export default DiscoverPrakrutiScreen;
