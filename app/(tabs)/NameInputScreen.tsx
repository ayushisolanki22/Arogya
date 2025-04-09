import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const NameInputScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {/* 🔄 Replaced the icon with Name.png */}
                <Image
                    source={require('../../assets/images/Name.png')}
                    style={styles.nameIcon}
                />
                <Text style={styles.title}>Enter your name below</Text>

                <TextInput
                    style={[styles.input, { color: 'black', marginTop: 0 }]}
                    placeholder="Enter your Firstname"
                    placeholderTextColor="gray"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Lastname"
                    placeholderTextColor="gray"
                    value={lastName}
                    onChangeText={setLastName}
                />

                <Image
                    source={require('../../assets/images/Yoga.png')}
                    style={styles.yogaImage}
                />
            </View>

            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate('GenderSelection')}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <Image
                source={require('../../assets/images/ArogyaLogo.png')}
                style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9E1',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    content: {
        alignItems: 'center',
        width: '100%',
    },
    nameIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 90,      // 👈 Added this line to bring it down
        marginBottom: 10,
    },
    
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderColor: 'gray',
        borderWidth: 0.8,
        color: 'black',
        fontSize: 16,
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

export default NameInputScreen;
