import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SuggestionsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Ionicons name="arrow-back" size={24} color="#6D3B1E" />
        </TouchableOpacity>
        
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('DietSelectionScreen')}
          >
            <Text style={styles.cardTitle}>DIET</Text>
            <Text style={styles.cardSubtitle}>Tap to know diet suggestions</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('LifestyleScreen')} // ✅ Added navigation
          >
            <Text style={styles.cardTitle}>LIFESTYLE</Text>
            <Text style={styles.cardSubtitle}>Tap to know lifestyle suggestions</Text>
          </TouchableOpacity>
          
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Image source={require('../../assets/images/Yoga.png')} />
            </View>
          </View>
        </ScrollView>
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
  cardSubtitle: {
    fontSize: 16,
    color: '#000000',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  logo: {
    opacity: 0.2,
  },
});

export default SuggestionsScreen;
