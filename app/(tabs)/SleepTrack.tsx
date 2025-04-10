import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  PanResponder,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SleepTrack = () => {
  const navigation = useNavigation();
  const [sleepHours, setSleepHours] = useState(0);
  const maxSleep = 8;

  // ✅ PanResponder for swipe detection
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          console.log("Swiped Right! Navigating to InsightsScreen...");
          navigation.navigate('InsightsScreen');
        }
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('InsightsScreen')}>
          <Image
            source={require('../../assets/images/BackButton.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.date}>Today, 11 Feb</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Sleep Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Hi User,</Text>
          {"\n"}Quality sleep is the foundation of good health. Track your sleep to restore balance, boost energy, and enhance well-being.
          Let Ayurveda guide you to restful nights and brighter days!
        </Text>
      </View>

      {/* Sleep Tracking Input */}
      <Text style={styles.trackText}>Please track your sleep timings here</Text>
      <View style={styles.sleepInputContainer}>
        <TouchableOpacity
          onPress={() => setSleepHours(Math.max(0, sleepHours - 1))}
        >
          <Ionicons name="remove-circle-outline" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.sleepText}>{sleepHours}h of {maxSleep}h</Text>

        <TouchableOpacity
          onPress={() => setSleepHours(Math.min(maxSleep, sleepHours + 1))}
        >
          <Ionicons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <ProgressBar progress={sleepHours / maxSleep} color="black" style={styles.progressBar} />

      {/* My Sleep Section */}
      <Text style={styles.sectionTitle}>My Sleep</Text>
      <View style={styles.sleepIconContainer}>
        <Ionicons name="time" size={60} color="black" />
        <Text style={styles.noRecordsText}>No records yet!</Text>
      </View>

      {/* Tips for Better Sleep */}
      <Text style={styles.tipsTitle}>😴 Tips For You To Sleep Better</Text>
      <Text style={styles.tipsText}>
        Create a calming bedtime routine by disconnecting from screens, practicing deep breathing, and sipping warm herbal tea.
        Maintain a consistent sleep schedule and ensure your space is dark, quiet, and comfortable.
      </Text>

      {/* Logo */}
      <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1B3F2',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 40,
  },
  infoText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  trackText: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  sleepInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  sleepText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  sleepIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  noRecordsText: {
    fontSize: 14,
    color: 'black',
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  tipsText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
    textAlign: 'center',
  },
  logo: {
    width: 130,
    height: 50,
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default SleepTrack;
