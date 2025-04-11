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
  SettingsAndActivity: undefined;
  ProfileAndSettings: undefined;
  SuggestionsScreen: undefined;
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

        {/* User Icon + Settings Icon */}
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsAndActivity')}>
            <Ionicons name="person-circle-outline" size={34} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('profileAndSettings')}>
            <Image source={require('../../assets/images/Settings.png')} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons name="home" size={32} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('DiscoverPrakrutiScreen')}>
            <Image source={require('../../assets/images/Logo.png')} style={styles.logoIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ChatBox')}>
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
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  greetingContainer: {
    position: 'absolute',
    top: 130,
    left: 30,
    zIndex: 10,
  },
  greeting: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
  iconRow: {
    position: 'absolute',
    top: 80,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    zIndex: 10,
  },
  settingsIcon: {
    width: 26,
    height: 26,
    marginLeft: 10,
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
    marginBottom: 35,
  },
  bottomNav: {
    backgroundColor: '#fefde1',
    height: 80,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 15,
    borderRadius: 20,
    elevation: 5,
  },
  navButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 56,
    height: 56,
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
