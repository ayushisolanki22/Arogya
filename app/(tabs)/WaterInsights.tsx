import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground,
  PanResponder
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const WaterInsights = () => {
  const navigation = useNavigation();
  const [glasses, setGlasses] = useState(0);
  const maxGlasses = 8;

  // Gesture Handling for Swipe Right
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
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
        <Text style={styles.date}>Today, 11 Feb</Text>
        <TouchableOpacity>
          <Ionicons name="pencil" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <Text style={styles.progressText}>{glasses} of {maxGlasses} Glasses</Text>
      <ProgressBar progress={glasses / maxGlasses} color="black" style={styles.progressBar} />

      {/* Water Glass with Animation */}
      <View style={styles.glassContainer}>
        <TouchableOpacity onPress={() => setGlasses(Math.max(0, glasses - 1))}>
          <Ionicons name="remove-circle-outline" size={35} color="black" />
        </TouchableOpacity>

        {/* Glass with Wave GIF as Background */}
        <View style={styles.glassWrapper}>
          {glasses > 0 && (
            <ImageBackground
              source={require('../../assets/images/Wave.gif')}
              style={styles.waveGif}
              resizeMode="cover"
            />
          )}
          <Image source={require('../../assets/images/Glass.png')} style={styles.glassImage} />
        </View>

        <TouchableOpacity onPress={() => setGlasses(Math.min(maxGlasses, glasses + 1))}>
          <Ionicons name="add-circle-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.glassText}>{glasses} Glass ({glasses * 250} ml)</Text>

      {/* Reminder Section */}
      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>Set a Reminder!</Text>
        <TouchableOpacity>
          <View style={styles.addButton}>
            <Text style={styles.addText}>Add</Text>
            <Ionicons name="add-circle-outline" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Hydration Tip */}
      <View style={styles.tipContainer}>
        <Image source={require('../../assets/images/Glass.png')} style={styles.tipImage} />
        <Text style={styles.tipText}>
          Stay Hydrated! Drink a glass of water every hour to finish your goal each day!
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
    backgroundColor: '#CDECF7',
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
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#E0E0E0',
  },
  glassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  glassWrapper: {
    width: 95,
    height: 95,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveGif: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  glassImage: {
    width: 90,
    height: 80,
  },
  glassText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reminderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 50,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addText: {
    fontSize: 16,
    marginRight: 5,
  },
  tipContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  tipImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  tipText: {
    fontSize: 14,
    color: 'black',
    flex: 1,
  },
  logo: {
    width: 130,
    height: 50,
    alignSelf: 'center',
    marginTop: 150,
  },
});

export default WaterInsights;
