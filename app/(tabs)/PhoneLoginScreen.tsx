import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Linking, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PhoneLoginScreen = () => {
    const navigation = useNavigation();

    const handleNewUserPress = () => {
        navigation.navigate('PhoneRegistrationScreen');
    };

    const openLink = (url) => {
        Linking.openURL(url);
    };

    const handleEmailPress = () => {
        navigation.navigate('EmailLoginScreen');
    };

    const handleSignInPress = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.newUser} onPress={handleNewUserPress}>New User?</Text>
            <Text style={styles.title}>Welcome Back, Log In to continue</Text>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <FontAwesome name="phone" size={20} color="black" style={styles.icon} />
                    <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor="black"
                        style={styles.input}
                        keyboardType="phone-pad"
                    />
                </View>
                <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.orContinueText}>or continue with</Text>

            <TouchableOpacity style={styles.emailContainer} onPress={handleEmailPress}>
                <FontAwesome name="envelope" size={20} color="black" style={styles.emailIcon} />
                <Text style={styles.emailText}>Email</Text>
            </TouchableOpacity>

            <View style={styles.socialIconsContainer}>
                <TouchableOpacity onPress={() => openLink('https://www.facebook.com')}>
                    <Image source={require('../../assets/images/Facebook.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.google.com')}>
                    <Image source={require('../../assets/images/Google.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.apple.com')}>
                    <Image source={require('../../assets/images/Apple.png')} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>

            <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF8E1',
        padding: 20,
    },
    newUser: {
        fontSize: 14,
        color: 'green',
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF176',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: 'black',
    },
    signInButton: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        marginTop: 10,
    },
    signInText: {
        fontSize: 16,
        color: 'black',
    },
    orContinueText: {
        fontSize: 14,
        color: 'black',
        marginVertical: 20,
    },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF176',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
    },
    emailIcon: {
        marginRight: 8,
    },
    emailText: {
        fontSize: 16,
        color: 'black',
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    socialIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        marginTop: 20,
    },
});

export default PhoneLoginScreen;
