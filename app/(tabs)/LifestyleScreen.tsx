import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LifestyleScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.navigate('SuggestionsScreen')} style={styles.backButton}>
  <Image source={require('../../assets/images/BackButton.png')} style={styles.backImage} />
</TouchableOpacity>


        <Text style={styles.header}>Your Daily Lifestyle Routine</Text>

        <View style={styles.section}>
          <Text style={styles.time}>6:00 AM - Wake Up</Text>
          <Text style={styles.description}>Start your day with 5 minutes of deep breathing or meditation.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>6:30 AM - Hydrate</Text>
          <Text style={styles.description}>Drink warm water with lemon or a glass of copper-charged water.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>7:00 AM - Exercise</Text>
          <Text style={styles.description}>Engage in yoga, walking, or light cardio for 30 minutes.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>8:00 AM - Healthy Breakfast</Text>
          <Text style={styles.description}>Choose a light, nourishing meal according to your dosha.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>12:30 PM - Lunch</Text>
          <Text style={styles.description}>Have your heaviest meal of the day, ideally warm and freshly cooked.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>3:00 PM - Herbal Tea / Snack</Text>
          <Text style={styles.description}>Sip on herbal tea or enjoy a small healthy snack if hungry.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>6:30 PM - Light Dinner</Text>
          <Text style={styles.description}>Keep dinner light and simple, at least 2-3 hours before bed.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>9:00 PM - Wind Down</Text>
          <Text style={styles.description}>Avoid screens, take a warm shower, and relax your mind.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.time}>9:30 PM - Sleep</Text>
          <Text style={styles.description}>Aim to sleep early to align with your circadian rhythm.</Text>
        </View>

        <Text style={styles.footerText}>
          For a Personalized lifestyle, chat with <Text style={styles.ved}>Ved</Text>, your very own wellness AI.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFBEA',
  },
  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D3B1E',
    marginBottom: 20,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
    color: '#A47148',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6D3B1E',
    marginTop: 30,
    textAlign: 'center',
  },
  ved: {
    fontWeight: 'bold',
    color: '#CDA349',
  },
});

export default LifestyleScreen;
