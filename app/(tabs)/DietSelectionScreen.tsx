import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar , Image } from 'react-native';
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
          <TouchableOpacity style={styles.card} 
        //   onPress={() => navigation.navigate('DietSelectionScreen')}
          >
            <Image source={require('../../assets/images/Balanced_diet.png')} style={styles.logoIcon}></Image>
            <Text style={styles.cardTitle}>Balanced Diet Plan</Text>
            {/* <Text style={styles.cardSubtitle}>For General health</Text> */}
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Weight Loss Diet Plan </Text>
            {/* <Text style={styles.cardSubtitle}>Tap to know lifestyle suggestions</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Weight Gain Diet Plan </Text>
            {/* <Text style={styles.cardSubtitle}>Tap to know lifestyle suggestions</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Muscle Building Diet Plan</Text>
            {/* <Text style={styles.cardSubtitle}>Tap to know lifestyle suggestions</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Keto Diet Plan </Text>
            {/* <Text style={styles.cardSubtitle}>Tap to know lifestyle suggestions</Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Ayurveda-Based Diet Plan  </Text>
            {/* <Text style={styles.cardSubtitle}>Tap to know lifestyle suggestions</Text> */}
          </TouchableOpacity>
          
          {/* <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Image source = {require('../../assets/images/Yoga.png')}></Image>
            </View>
          </View> */}
        </ScrollView>
        
        {/* <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home-outline" size={24} color="#6D3B1E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="leaf-outline" size={24} color="#6D3B1E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="add-circle-outline" size={24} color="#6D3B1E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="stats-chart-outline" size={24} color="#6D3B1E" />
          </TouchableOpacity>
        </View> */}
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
    opacity:0.2
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DFCC85',
    height: 70,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  navItem: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SuggestionsScreen;