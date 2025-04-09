import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  PanResponder,
  Animated,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const insightsData = [
  { title: 'Sleep', goal: '8hr', icon: require('../../assets/images/Moon.png') },
  { title: 'Water', goal: '8 Glasses', icon: require('../../assets/images/Glass.png') },
  { title: 'Stress Level', goal: 'Low', icon: require('../../assets/images/Brain.png') },
  { title: 'Food', goal: '2000 Cal', icon: require('../../assets/images/Food.png') },
];

const getFormattedDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

const getLast7Dates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    dates.push(getFormattedDate(d));
  }
  return dates;
};

const InsightsScreen = () => {
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(getFormattedDate(new Date()));
  const availableDates = getLast7Dates();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) navigation.navigate('HomeScreen');
      },
    })
  ).current;

  return (
    <Animated.View style={styles.container} {...panResponder.panHandlers}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.backButton}>
          <Image source={require('../../assets/images/BackButton.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>INSIGHTS</Text>
      </View>
      <Text style={styles.subtitle}>Track and record your progress</Text>

      {/* Date Selector */}
      <View style={styles.todayContainer}>
        <TouchableOpacity
          style={styles.todayButton}
          onPress={() => setShowDateDropdown(true)}
        >
          <Text style={styles.todayText}>{selectedDate} ▼</Text>
        </TouchableOpacity>
      </View>

      {/* Overlay Modal for Date Dropdown */}
      <Modal transparent visible={showDateDropdown} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setShowDateDropdown(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.dropdown}>
              {availableDates.map((date) => (
                <TouchableOpacity
                  key={date}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedDate(date);
                    setShowDateDropdown(false);
                  }}
                >
                  <Text>{date}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Insight Cards */}
      <View style={styles.cardContainer}>
        <FlatList
          data={insightsData}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.insightCard}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardGoal}>Goal: {item.goal}</Text>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  if (item.title === 'Sleep') navigation.navigate('SleepTrack', { date: selectedDate });
                  else if (item.title === 'Water') navigation.navigate('WaterInsights');
                  else if (item.title === 'Stress Level') navigation.navigate('StressTracker');
                  else if (item.title === 'Food') navigation.navigate('FoodTrackerScreen', { date: selectedDate });
                }}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Footer Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/ArogyaLogo.png')}
          style={styles.footerLogo}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1B0',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerContainer: {
    marginTop: 60,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  todayContainer: {
    alignItems: 'flex-end',
    marginVertical: 10,
    zIndex: 2,
  },
  todayButton: {
    backgroundColor: '#E3D47A',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  todayText: {
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 180,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: 160,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 8,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
  insightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardGoal: {
    fontSize: 14,
    color: 'gray',
  },
  addButton: {
    backgroundColor: '#E3D47A',
    borderRadius: 20,
    padding: 10,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  footerLogo: {
    width: 100,
    height: 35,
    marginBottom: 45,
  },
});

export default InsightsScreen;
