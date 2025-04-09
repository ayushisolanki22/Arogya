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

const HelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & FAQs</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>🌿 Arogya - Frequently Asked Questions</Text>

        <Text style={styles.question}>1. What is Arogya?</Text>
        <Text style={styles.answer}>
          Arogya is an Ayurvedic wellness companion app that provides personalized health guidance based on your unique mind-body constitution (Prakruti).
        </Text>

        <Text style={styles.question}>2. How does Arogya determine my Prakruti?</Text>
        <Text style={styles.answer}>
          When you sign up, Arogya asks you a series of questions to assess your physical, mental, and emotional traits and uses that information to determine your Ayurvedic body type (Vata, Pitta, or Kapha).
        </Text>

        <Text style={styles.question}>3. What kind of suggestions does Arogya provide?</Text>
        <Text style={styles.answer}>
          You receive custom lifestyle tips, diet recommendations, daily routines, and natural remedies that align with your Prakruti.
        </Text>

        <Text style={styles.question}>4. What is AyurBot?</Text>
        <Text style={styles.answer}>
          AyurBot is your smart wellness assistant in the app. It answers health-related questions and offers home remedies based on Ayurvedic principles.
        </Text>

        <Text style={styles.question}>5. Can I track my health with Arogya?</Text>
        <Text style={styles.answer}>
          Yes! Arogya lets you track your daily water intake, food habits, stress levels, and more to help you stay balanced.
        </Text>

        <Text style={styles.question}>6. Is my health data safe with Arogya?</Text>
        <Text style={styles.answer}>
          Absolutely. Arogya prioritizes user privacy and stores your data securely. Your information is never shared without your consent.
        </Text>

        <Text style={styles.question}>7. Can I use Arogya without knowing Ayurveda?</Text>
        <Text style={styles.answer}>
          Yes! Arogya is designed for both beginners and experienced users. The app explains everything in simple terms and guides you step by step.
        </Text>

        <Text style={styles.question}>8. Does Arogya replace professional medical advice?</Text>
        <Text style={styles.answer}>
          No. Arogya provides general wellness suggestions based on Ayurveda. For any serious health concerns, you should always consult a licensed healthcare provider.
        </Text>

        <Text style={styles.question}>9. Is Arogya free to use?</Text>
        <Text style={styles.answer}>
          The basic features of Arogya are free. Some advanced features may require a subscription, which will be clearly mentioned within the app.
        </Text>

        <Text style={styles.question}>10. How do I contact support?</Text>
        <Text style={styles.answer}>
          You can reach our support team from within the app through the "Help" section or email us at arogyaproject2025@gmail.com.
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 20,
    paddingTop: 60,
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
    color: '#2E7D32',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  answer: {
    fontSize: 15,
    color: '#555',
    marginBottom: 18,
    lineHeight: 22,
  },
});

export default HelpScreen;
