import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define Navigation Type
type RootStackParamList = {
  Home: undefined;
  DiscoverPrakrutiScreen: undefined;
  LifestyleDiet: undefined;
  ChatBox: undefined;
  InsightsScreen: undefined;
  SettingAndActivity: undefined;
  SuggestionsScreen: undefined; // Added SuggestionsScreen
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello User,</Text>
        </View>
        <TouchableOpacity 
          style={styles.profileIcon} 
          onPress={() => navigation.navigate('SettingAndActivity')} // Navigate on press
        >
          <Ionicons name="person-circle-outline" size={34} color="black" />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DiscoverPrakrutiScreen')}>
          <Text style={styles.cardTitle}>PRAKRUTI</Text>
          <Text style={styles.cardDescription}>Tap to know your prakruti here.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SuggestionsScreen')}>
          <Text style={styles.cardTitle}>LIFESTYLE & DIET</Text>
          <Text style={styles.cardDescription}>Tap to know a suitable lifestyle for you.</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home" size={32} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoButton} onPress={() => navigation.navigate('HomeRemedies')}>
            <Image source={require('../../assets/images/Logo.png')} style={styles.logoIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.chatBoxButton} onPress={() => navigation.navigate('chatbot')}>
            <Image source={require('../../assets/images/ChatBox.png')} style={styles.chatBoxIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('InsightsScreen')}>
            <Image source={require('../../assets/images/Insight.png')} style={styles.insightIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefde1',
    padding: 10,
  },
  header: {
    backgroundColor: '#fefde1',
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingContainer: {
    flex: 1,
    alignItems: 'flex-start', // Align "Hello User," to the left
  },
  greeting: {
    fontSize: 20,
    color: 'black',
    marginTop: 50, // Moves "Hello User" directly above Prakruti
  },
  profileIcon: {
    marginRight: 15,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    height: 210,
    marginVertical: 15,
    padding: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 16,
    color: 'black',
  },
  bottomNavContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 65,
  },
  bottomNav: {
    backgroundColor: '#fefde1',
    height: 70,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
  },
  navButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  logoButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  chatBoxButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  logoIcon: {
    width: 41,
    height: 31,
  },
  chatBoxIcon: {
    width: 32,
    height: 32,
  },
  insightIcon: {
    width: 32,
    height: 32,
  },
});

export default HomeScreen;