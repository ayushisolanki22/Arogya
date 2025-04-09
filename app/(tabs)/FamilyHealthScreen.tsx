import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const FamilyHealthScreen = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [customIssue, setCustomIssue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

    const options = [
        'Heart Problem',
        'Diabetes',
        'Hypertension (high BP)',
        'None of the above',
        'Other'
    ];

    const handleSelect = (option) => {
        setSelectedOption(option);
        if (option === 'Other') {
            setShowModal(true);
        }
    };

    const handleContinueFromModal = () => {
        setShowModal(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Does anyone in your family have these health problems?</Text>
                <View style={styles.optionsContainer}>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedOption === option && styles.selectedOption
                            ]}
                            onPress={() => handleSelect(option)}
                        >
                            <Ionicons
                                name={selectedOption === option ? 'radio-button-on' : 'radio-button-off'}
                                size={20}
                                color="black"
                            />
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Image
                    source={require('../../assets/images/Heart.png')}
                    style={styles.exerciseImage}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('HealthIssueScreen')}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                        navigation.navigate('AllergyScreen');
                    }}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>

            <Image
                source={require('../../assets/images/ArogyaLogo.png')}
                style={styles.logo}
            />

            {/* Modal for "Other" option */}
            {showModal && (
                <View style={styles.modalOverlay}>
                    <View style={styles.popupBox}>
                        <Text style={styles.popupTitle}>Mention the health issue below:</Text>
                        <TextInput
                            style={styles.popupInput}
                            placeholder="Type here..."
                            value={customIssue}
                            onChangeText={setCustomIssue}
                            multiline
                        />
                        <TouchableOpacity
                            style={styles.popupButton}
                            onPress={handleContinueFromModal}
                        >
                            <Text style={styles.popupButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9E1',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    contentWrapper: {
        paddingTop: 45,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3E5025',
        alignSelf: 'flex-start',
        marginBottom: 15,
    },
    optionsContainer: {
        width: '100%',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8E9A1',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: width * 0.9,
        alignSelf: 'center',
    },
    selectedOption: {
        backgroundColor: '#A4C27E',
    },
    optionText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        flexShrink: 1,
    },
    exerciseImage: {
        width: width * 0.3,
        height: height * 0.12,
        resizeMode: 'contain',
        opacity: 0.1,
        marginTop: 79,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 180,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    backButton: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginRight: 10,
    },
    nextButton: {
        backgroundColor: '#A4C27E',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginLeft: 177,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    logo: {
        position: 'absolute',
        bottom: 80,
        alignSelf: 'center',
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: height,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    popupBox: {
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    popupTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3E5025',
        marginBottom: 10,
    },
    popupInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        minHeight: 100,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 15,
    },
    popupButton: {
        backgroundColor: '#A4C27E',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    popupButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default FamilyHealthScreen;
