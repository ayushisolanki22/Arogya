import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const DisclaimerScreen = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Disclaimer</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={true}>
                <Text style={styles.paragraph}>
                    This application provides health predictions and home remedies based on Ayurvedic principles. The information shared is for general wellness and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                </Text>
                <Text style={styles.paragraph}>
                    While we strive to offer accurate insights, the predictions and remedies are based on traditional Ayurvedic knowledge and may not be 100% accurate or suitable for everyone. Individual health conditions vary, and responses to remedies may differ from person to person.
                </Text>
                <Text style={styles.paragraph}>
                    If you experience persistent symptoms, worsening health conditions, or any medical emergency, please consult a qualified healthcare professional or doctor immediately. Use this application as a supportive guide, not as a replacement for medical expertise.
                </Text>
                <Text style={styles.paragraph}>
                    By using this app, you acknowledge and agree that the creators of this application are not responsible for any health-related consequences resulting from the use of the information provided.
                </Text>
                <Text style={[styles.paragraph, styles.boldText]}>
                    Confidentiality Notice
                </Text>
                <Text style={styles.paragraph}>
                    We deeply respect your privacy and are committed to protecting your personal information with the highest standards of security. Any details you provide within this application, including your health data, personal preferences, and any interactions, will be kept strictly confidential and used only for improving your experience and offering personalized Ayurvedic insights.
                </Text>
                <Text style={styles.paragraph}>
                    How We Protect Your Information:
                    {'\n'}- Strict Confidentiality: Your personal data is never shared, sold, or disclosed to third parties without your explicit consent.
                    {'\n'}- Limited Access: Only authorized personnel involved in app maintenance and support may access data, and even then, only for necessary operational purposes.
                    {'\n'}- No Misuse of Information: Your health-related data is used solely to provide Ayurvedic recommendations and improve the accuracy of our insights.
                </Text>
                <Text style={styles.paragraph}>
                    While we take every possible measure to safeguard your information, we encourage users to be mindful of their own data security as well. If you ever suspect unauthorized access or misuse, please contact us immediately.
                </Text>
                <Text style={styles.paragraph}>
                    By using this application, you acknowledge and agree to our privacy practices. For full details on how we collect, store, and protect your data, please review our Privacy Policy.
                </Text>

                {/* Checkbox with white background aligned left */}
                <View style={styles.checkboxWrapper}>
                    <CheckBox
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                        checkedColor="green"
                        containerStyle={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>I accept term & condition</Text>
                </View>
            </ScrollView>

            {/* Arogya logo image */}
            <Image
                source={require('../../assets/images/ArogyaLogo.png')} // Adjust path as needed
                style={styles.logoImage}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9E5',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
        alignSelf: 'center',
        marginBottom: 15,
    },
    scrollContainer: {
        paddingBottom: 100,
    },
    paragraph: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
        lineHeight: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'stretch',
    },
    checkbox: {
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    checkboxText: {
        fontSize: 14,
        color: '#000',
        marginLeft: -8,
    },
    logoImage: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: 100,
        height: 30,
    },
});

export default DisclaimerScreen;
