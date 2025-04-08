import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Image, Linking, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EmailLoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleNewUserPress = () => {
        navigation.navigate('EmailRegistrationScreen');
    };

    const handlePhoneLoginPress = () => {
        navigation.navigate('PhoneLoginScreen');
    };

    const handleSignIn = () => {
        navigation.navigate('HomeScreen');
    };

    const openLink = (url) => {
        Linking.openURL(url);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.newUser} onPress={handleNewUserPress}>New User?</Text>
            <Text style={styles.title}>Welcome Back, Log In to continue</Text>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <FontAwesome name="user" size={20} color="black" style={styles.icon} />
                    <TextInput
                        placeholder="user@abc.com"
                        placeholderTextColor="black"
                        style={styles.input}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputRow}>
                    <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
                    <TextInput
                        placeholder="**********"
                        placeholderTextColor="black"
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <FontAwesome name={secureTextEntry ? "eye" : "eye-slash"} size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.orContinueText}>or continue with</Text>

            <TouchableOpacity style={styles.phoneButton} onPress={handlePhoneLoginPress}>
                <FontAwesome name="phone" size={20} color="black" />
                <Text style={styles.phoneText}> Phone Number</Text>
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
    // Styles remain unchanged
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF8E1',
        padding: 20,
    },
    newUser: {
        fontSize: 14,
        color: '#2E7D32',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 50,     // 👈 Add or increase this
        marginBottom: 30,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
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
    phoneButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF176',
        padding: 12,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center',
    },
    phoneText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
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

export default EmailLoginScreen;
