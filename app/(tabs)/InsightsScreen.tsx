import React, { useRef } from 'react';
import { 
  View, Text, TouchableOpacity, Image, FlatList, 
  StyleSheet, PanResponder, Animated 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample Data
const insightsData = [
  { title: 'Sleep', goal: '8hr', icon: require('../../assets/images/Moon.png') },
  { title: 'Water', goal: '8 Glasses', icon: require('../../assets/images/Glass.png') },
  { title: 'Stress Level', goal: 'Low', icon: require('../../assets/images/Brain.png') },
  { title: 'Food', goal: '2000 Cal', icon: require('../../assets/images/Food.png') },
];

const InsightsScreen = () => {
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

  // PanResponder for swipe detection
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          navigation.navigate('HomeScreen');  // Navigate to Home on right swipe
        }
      },
    })
  ).current;

  return (
    <Animated.View style={styles.container} {...panResponder.panHandlers}>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../../assets/images/Insight.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>INSIGHTS</Text>
      </View>
      <Text style={styles.subtitle}>Track and record your progress</Text>

      {/* Today Button aligned to the right */}
      <View style={styles.todayContainer}>
        <TouchableOpacity style={styles.todayButton}>
          <Text style={styles.todayText}>Today ▼</Text>
        </TouchableOpacity>
      </View>

      {/* Insight Cards Centered */}
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
              {/* Navigate to respective screens */}
              <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => {
                  if (item.title === 'Sleep') {
                    navigation.navigate('SleepTrack');
                  } else if (item.title === 'Water') {
                    navigation.navigate('WaterInsights');
                  }
                }}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Arogya Logo in Footer */}
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

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1B0',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
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
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  todayContainer: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  todayButton: {
    backgroundColor: '#E3D47A',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 70,
  },
  todayText: {
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
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
