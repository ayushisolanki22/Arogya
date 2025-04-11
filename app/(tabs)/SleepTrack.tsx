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
import { useNavigation, useRoute } from '@react-navigation/native';

const SleepTrack = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedDate = route.params?.date || 'Date not found';
  const [sleepHours, setSleepHours] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const maxSleep = 8;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
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
        <Text style={styles.date}>{selectedDate}</Text>
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
          onPress={() => {
            if (isAdded) setIsAdded(false);
            setSleepHours(Math.max(0, sleepHours - 1));
          }}
        >
          <Ionicons name="remove-circle-outline" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.sleepText}>{sleepHours}h of {maxSleep}h</Text>

        <TouchableOpacity
          onPress={() => {
            if (isAdded) setIsAdded(false);
            setSleepHours(Math.min(maxSleep, sleepHours + 1));
          }}
        >
          <Ionicons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <ProgressBar progress={sleepHours / maxSleep} color="black" style={styles.progressBar} />

      {/* Add Button */}
      <View style={styles.addButtonContainer}>
        {sleepHours > 0 && !isAdded && (
          <TouchableOpacity style={styles.addTrackButton} onPress={() => setIsAdded(true)}>
            <Text style={styles.addTrackText}>Add</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* My Sleep Section */}
      <Text style={styles.sectionTitle}>My Sleep</Text>
      <View style={styles.sleepIconContainer}>
        {!isAdded ? (
          <>
            <Ionicons name="time" size={60} color="black" />
            <Text style={styles.noRecordsText}>No records yet!</Text>
          </>
        ) : (
          <Text style={styles.sleepRecord}>
            {sleepHours}h of {maxSleep}h on {selectedDate}
          </Text>
        )}
      </View>

      {/* Tips for Better Sleep */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>😴 Tips For You To Sleep Better</Text>
        <Text style={styles.tipsText}>
          Create a calming bedtime routine by disconnecting from screens, practicing deep breathing, and sipping warm herbal tea.
          Maintain a consistent sleep schedule and ensure your space is dark, quiet, and comfortable.
        </Text>
      </View>

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
    paddingTop: 30,
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
    textAlign: 'left',
  },
  sleepInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  sleepText: {
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    marginVertical: 10,
  },
  addButtonContainer: {
    height: 45,  // Fixed height for the add button container
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  addTrackButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addTrackText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
  },
  sleepIconContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,  // Fixed height for sleep icon container
    marginBottom: 20,
  },
  noRecordsText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  sleepRecord: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    width: '100%',
  },
  tipsContainer: {
    marginTop: 20,
    paddingBottom: 20,
    alignItems: 'flex-start',
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
  },
  tipsText: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
    textAlign: 'left',
  },
  logo: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

export default SleepTrack;