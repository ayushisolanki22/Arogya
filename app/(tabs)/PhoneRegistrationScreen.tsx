import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Modal,
    FlatList,
    Dimensions,
    Linking
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const countryCodes = [
    { code: '+91', country: 'India 🇮🇳' },
    { code: '+1', country: 'USA 🇺🇸' },
    { code: '+44', country: 'UK 🇬🇧' },
    { code: '+61', country: 'Australia 🇦🇺' },
    { code: '+81', country: 'Japan 🇯🇵' },
    { code: '+49', country: 'Germany 🇩🇪' },
];

const PhoneRegistrationScreen = () => {
    const navigation = useNavigation();
    const [selectedCountry, setSelectedCountry] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('PhoneLoginScreen')}
                style={styles.alreadyUserContainer}
            >
                <Text style={styles.alreadyUser}>Already a user?</Text>
            </TouchableOpacity>

            <Text style={styles.title}>REGISTER</Text>

            <View style={styles.phoneInputContainer}>
                <TouchableOpacity style={styles.countryCodeButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.countryCodeText}>{selectedCountry} ▼</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Enter your phone number"
                    placeholderTextColor="black"
                    style={styles.phoneInput}
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>

            <View style={styles.otpInputContainer}>
                <TextInput
                    placeholder="Enter OTP"
                    placeholderTextColor="black"
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                />
            </View>

            <TouchableOpacity
                style={styles.signInButton}
                onPress={() => navigation.navigate('NameInputScreen')}
            >
                <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.orContinueText}>or continue with</Text>

            <TouchableOpacity
                style={styles.emailButton}
                onPress={() => navigation.navigate('EmailRegistrationScreen')}
            >
                <FontAwesome name="envelope" size={20} color="black" />
                <Text style={styles.emailText}> Email</Text>
            </TouchableOpacity>

            <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.socialIcon} onPress={() => openLink('https://www.facebook.com/')}>
                    <Image source={require('../../assets/images/Facebook.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.socialIconCenter}
                    onPress={() => openLink('https://accounts.google.com/')}
                >
                    <Image source={require('../../assets/images/Google.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon} onPress={() => openLink('https://support.apple.com/')}>
                    <Image source={require('../../assets/images/Apple.png')} style={styles.iconImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />
            </View>

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Country Code</Text>
                        <FlatList
                            data={countryCodes}
                            keyExtractor={(item) => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.countryOption}
                                    onPress={() => {
                                        setSelectedCountry(item.code);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.countryText}>
                                        {item.country} ({item.code})
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF6E3',
        alignItems: 'center',
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    alreadyUserContainer: {
        alignSelf: 'flex-end',
        marginTop: 30,
        marginBottom: 20,
    },
    alreadyUser: {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginTop: 20,
        marginBottom: 40,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: '105%',
        alignSelf: 'center',
        height: 55,
        marginBottom: 25,
    },
    countryCodeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: '100%',
    },
    countryCodeText: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        color: 'black',
    },
    otpInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: '105%',
        alignSelf: 'center',
        height: 55,
        marginBottom: 25,
        marginTop: -5,
    },
    otpInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        color: 'black',
    },
    signInButton: {
        width: '105%',
        backgroundColor: 'white',
        padding: 16,              // ⬅️ Adds padding on all sides (including vertical)
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 30,
    },
    
    signInText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#black',
    },
    orContinueText: {
        fontSize: 14,
        color: '#777',
        marginTop: 0,
        marginBottom: 10,
    },
    emailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '105%',
        alignSelf: 'center',
        height: 50,
        marginTop: 20,
        marginBottom: 30,
    },
    emailText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 50,
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
        alignItems: 'center',
        marginTop: 35,  // ⬅️ Reduced from 50 to 20 to lift just the logo
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    countryOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    countryText: {
        fontSize: 16,
    },
    closeButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        color: 'red',
    },
});

export default PhoneRegistrationScreen;
