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
            <Text style={styles.alreadyUser} onPress={() => navigation.navigate('EmailLoginScreen')}>
                Already a user?
            </Text>

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

            <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('NameInputScreen')}>
                <Text style={styles.signInText}>Sign Up</Text>
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
        backgroundColor: '#FDF6E3',
        paddingVertical: 40,
        paddingTop: 50, // ⬅️ Increased padding to bring everything down
    },
    alreadyUser: {
        fontSize: 14,
        color: 'green',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 50,     // 👈 Add or increase this
        marginBottom: 30,
        fontWeight: 'bold',
    },

     title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginTop: 10,       // 👈 Add this or increase to push it down
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: '95%', // increased from 85%
        height: 55,
        marginBottom: 25,
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
        width: '95%',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 0,  // 👈 lowered this to bring the button up
        marginBottom: 25,
    },
    
    signInText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    orContinueText: {
        fontSize: 14,
        color: '#777',
        marginBottom: 20,
    },
    phoneNumberButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        width: '95%', // increased from 85%
        marginBottom: 30,
    },
    phoneNumberText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 260, // ⬅️ Add this if supported
        marginTop: 20,
        marginBottom: 60,
        position: 'relative',
    },
    
    
socialIcon: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
},
socialIconCenter: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -25 }], // Center it horizontally
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
},

    iconImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30,  // ⬅️ Reduced from 50 to 20 to lift just the logo
        marginBottom: 20,
    },
    
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
});


export default EmailRegistrationScreen;
