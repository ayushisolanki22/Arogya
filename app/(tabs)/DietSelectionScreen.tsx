import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SuggestionsScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [dietPreference, setDietPreference] = useState(null);

  const openModal = (dietType) => {
    setSelectedDiet(dietType);
    setDietPreference(null); // Reset preference when opening a new modal
    setModalVisible(true);
  };

  const selectPreference = (preference) => {
    // Just update the preference state without affecting modal visibility
    setDietPreference(preference);
  };

  const handleContinue = () => {
    if (dietPreference) {
      setModalVisible(false); // Close modal first
      
      // Add a small delay before navigation to ensure modal closes smoothly
      setTimeout(() => {
        // Check the selected diet and navigate accordingly
        if (selectedDiet === 'Balanced Diet Plan' && dietPreference === 'Vegan') {
          navigation.navigate('BalancedVeganDietScreen'); // Navigate to the BalancedVeganDietScreen
        } else if (selectedDiet === 'Balanced Diet Plan' && dietPreference === 'Vegetarian') {
          navigation.navigate('BalancedVegDietScreen'); // Navigate to the BalancedVegDietScreen
        } else {
          navigation.navigate('DietSelectionScreen', {
            dietType: selectedDiet,
            preference: dietPreference
          });
        }
        console.log(`Navigating to appropriate screen with ${selectedDiet} and ${dietPreference} preference`);
      }, 100);
    }
  };
  
  // Define the modal component outside the render path
  // This can help prevent unwanted re-renders
  const renderModal = () => {
    if (!modalVisible) return null;
    
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Choose Diet Preference</Text>
            
            <TouchableOpacity 
              style={[styles.preferenceOption, dietPreference === 'Vegetarian' && styles.selectedOption]}
              onPress={() => selectPreference('Vegetarian')}
              activeOpacity={0.8}
            >
              <Text style={[styles.preferenceText, dietPreference === 'Vegetarian' && styles.selectedText]}>Vegetarian</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.preferenceOption, dietPreference === 'Vegan' && styles.selectedOption]}
              onPress={() => selectPreference('Vegan')}
              activeOpacity={0.8}
            >
              <Text style={[styles.preferenceText, dietPreference === 'Vegan' && styles.selectedText]}>Vegan</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.continueButton, !dietPreference && styles.disabledButton]}
              onPress={handleContinue}
              disabled={!dietPreference}
              activeOpacity={0.8}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('SuggestionsScreen')}
        >
          <Ionicons name="arrow-back" size={24} color="#6D3B1E" />
        </TouchableOpacity>
        
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => openModal('Balanced Diet Plan')}
          >
            <Image source={require('../../assets/images/Balanced_diet.png')} style={styles.logoIcon}></Image>
            <Text style={styles.cardTitle}>Balanced Diet Plan</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.card}
            onPress={() => openModal('Weight Loss Diet Plan')}
          >
            <Text style={styles.cardTitle}>Weight Loss Diet Plan </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => openModal('Weight Gain Diet Plan')}
          >
            <Text style={styles.cardTitle}>Weight Gain Diet Plan </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => openModal('Muscle Building Diet Plan')}
          >
            <Text style={styles.cardTitle}>Muscle Building Diet Plan</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => openModal('Keto Diet Plan')}
          >
            <Text style={styles.cardTitle}>Keto Diet Plan </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => openModal('Ayurveda-Based Diet Plan')}
          >
            <Text style={styles.cardTitle}>Ayurveda-Based Diet Plan  </Text>
          </TouchableOpacity>
        </ScrollView>
        
        {/* Render modal only if it's visible */}
        {renderModal()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7E7AE',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7E7AE',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 70,
  },
  logoIcon: {
    marginTop: -100,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  preferenceOption: {
    width: '100%',
    padding: 16,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#E0E0E0',
  },
  selectedText: {
    fontWeight: '600',
    color: '#000',
  },
  preferenceText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  continueButton: {
    width: '100%',
    padding: 16,
    borderRadius: 15,
    backgroundColor: '#6D3B1E',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
  },
  cancelButton: {
    width: '100%',
    padding: 16,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#A67C52',
    opacity: 0.7,
  },
});

export default SuggestionsScreen;
