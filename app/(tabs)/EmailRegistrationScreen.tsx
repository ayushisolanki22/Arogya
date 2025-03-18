import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EmailRegistrationScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.alreadyUser} onPress={() => navigation.navigate('EmailLoginScreen')}>Already a user?</Text>
            <Text style={styles.title}>REGISTER</Text>

            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={20} color="black" style={styles.icon} />
                <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor="black"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
                <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="black"
                    style={styles.input}
                    secureTextEntry={!isPasswordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <FontAwesome name={isPasswordVisible ? "eye" : "eye-slash"} size={20} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.orContinueText}>or continue with</Text>

            <TouchableOpacity style={styles.phoneNumberButton} onPress={() => navigation.navigate('PhoneRegistrationScreen')}>
                <FontAwesome name="phone" size={20} color="black" />
                <Text style={styles.phoneNumberText}> Phone Number</Text>
            </TouchableOpacity>

            <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.socialIcon} onPress={() => openLink('https://www.facebook.com/')}>
                    <Image source={require('../../assets/images/Facebook.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIconCenter} onPress={() => openLink('https://accounts.google.com/')}>
                    <Image source={require('../../assets/images/Google.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon} onPress={() => openLink('https://support.apple.com/')}>
                    <Image source={require('../../assets/images/Apple.png')} style={styles.iconImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDF6E3',
    },
    alreadyUser: {
        fontSize: 14,
        color: 'green',
        alignSelf: 'flex-end',
        marginRight: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: '85%',
        height: 50,
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
    signInButton: {
        width: '85%',
        backgroundColor: 'white',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },
    signInText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    orContinueText: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10,
    },
    phoneNumberButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 14,
        borderRadius: 10,
        width: '85%',
        marginBottom: 15,
    },
    phoneNumberText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    socialIcon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIconCenter: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '50%',
        marginLeft: -25,
    },
    iconImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    logoContainer: {
        marginTop: 200,
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
});

export default EmailRegistrationScreen;