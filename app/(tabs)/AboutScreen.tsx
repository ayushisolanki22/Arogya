import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<any>;

const AboutScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('profileAndSettings')}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Arogya</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Your Ayurvedic Wellness Companion</Text>
        <Text style={styles.paragraph}>
          Arogya is your personalized Ayurvedic wellness companion, designed to help you lead a more balanced and healthy lifestyle using the timeless wisdom of Ayurveda.
        </Text>

        <Text style={styles.sectionTitle}>Personalized Health Guidance</Text>
        <Text style={styles.paragraph}>
          Our app begins by analyzing your Prakruti (body constitution) to understand your unique mind-body type. Based on this, Arogya offers custom health suggestions, lifestyle tips, and daily routines aligned with your natural balance.
        </Text>

        <Text style={styles.sectionTitle}>Daily Wellness Tracking</Text>
        <Text style={styles.paragraph}>
          With real-time tracking of your stress levels, food intake, and water consumption, you can stay in tune with your body and build healthier habits.
        </Text>

        <Text style={styles.sectionTitle}>Meet AyurBot</Text>
        <Text style={styles.paragraph}>
          Meet AyurBot, your smart wellness assistant. It provides instant consultations, answers to health questions, and recommends natural home remedies for common health issues – all based on Ayurvedic principles.
        </Text>

        <Text style={styles.sectionTitle}>Modern AI Meets Ancient Wisdom</Text>
        <Text style={styles.paragraph}>
          Arogya blends the power of ancient Ayurveda with modern AI technology, offering a safe, affordable, and accessible way to improve your overall well-being.
        </Text>

        <Text style={styles.sectionTitle}>Join the Journey 🌿</Text>
        <Text style={styles.paragraph}>
          Join us on the journey to rediscover your inner balance, naturally. Arogya is here to support you every step of the way.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E5BF',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    color: '#2D2D2D',
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginBottom: 10,
  },
});

export default AboutScreen;
