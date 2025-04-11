import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  PanResponder,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const WaterInsights = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Get date passed from InsightsScreen
  const selectedDate = route.params?.date || 'Today';

  const [glasses, setGlasses] = useState(0);
  const maxGlasses = 8;

  const handleReminderPress = () => {
    Alert.alert('Reminder Set', `We'll remind you to drink water today.`);
  };

  const handleSave = () => {
    Alert.alert('Saved', `${glasses} glasses saved for ${selectedDate}`);
  };

  // Gesture Handling for Swipe Right
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
        <View style={{ width: 24 }} /> {/* Spacer for symmetry */}
      </View>

      {/* Progress */}
      <Text style={styles.progressText}>{glasses} of {maxGlasses} Glasses</Text>
      <ProgressBar progress={glasses / maxGlasses} color="black" style={styles.progressBar} />

      {/* Water Glass with Animation */}
      <View style={styles.glassContainer}>
        <TouchableOpacity onPress={() => setGlasses(Math.max(0, glasses - 1))}>
          <Ionicons name="remove-circle-outline" size={35} color="black" />
        </TouchableOpacity>

        <View style={styles.glassWrapper}>
          {/* Background behind GIF to remove greyish look */}
          {glasses > 0 && (
            <View style={styles.waveBackground}>
              <Image
                source={require('../../assets/images/Wave.gif')}
                style={styles.waveGif}
                resizeMode="cover"
              />
            </View>
          )}
          <Image source={require('../../assets/images/Glass.png')} style={styles.glassImage} />
        </View>

        <TouchableOpacity onPress={() => setGlasses(Math.min(maxGlasses, glasses + 1))}>
          <Ionicons name="add-circle-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.glassText}>{glasses} Glass ({glasses * 250} ml)</Text>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Reminder Section */}
      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>Set a Reminder!</Text>
        <TouchableOpacity onPress={handleReminderPress}>
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
    paddingTop: 50,
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
  waveBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00BFFF', // Blue background for visibility
    borderRadius: 50,
    zIndex: 0,
    overflow: 'hidden',
  },
  waveGif: {
    width: '100%',
    height: '100%',
  },
  glassImage: {
    width: 90,
    height: 80,
    zIndex: 1,
  },
  glassText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 9,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
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
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

export default WaterInsights;
