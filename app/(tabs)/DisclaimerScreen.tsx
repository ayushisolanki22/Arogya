import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const DisclaimerScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();

    const handleCheck = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);

        if (!isChecked) {
            setTimeout(() => {
                navigation.navigate('HomeScreen');
            }, 1000); // Wait 1 second
        }
    };

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
                    We deeply respect your privacy and are committed to protecting your personal information with the highest standards of security...
                </Text>

                {/* Checkbox */}
                <View style={styles.checkboxWrapper}>
                    <CheckBox
                        checked={isChecked}
                        onPress={handleCheck}
                        checkedColor="green"
                        containerStyle={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>I accept terms & conditions</Text>
                </View>
            </ScrollView>

            {/* Logo */}
            <Image
                source={require('../../assets/images/ArogyaLogo.png')}
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
        bottom: 30,
        alignSelf: 'center',
        width: 100,
        height: 40,
    },
});

export default DisclaimerScreen;
