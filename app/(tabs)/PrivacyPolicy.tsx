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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; // Update path as needed

type PrivacyPolicyScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PrivacyPolicyScreen'
>;

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation<PrivacyPolicyScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('profileAndSettings')}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.paragraph}>
          Welcome to Arogya. We value your privacy and are committed to protecting your personal data while providing a safe and personalized experience. This Privacy Policy explains how we collect, use, store, and protect your information when you use our application. By using Arogya, you consent to the practices described in this policy.
        </Text>

        <Text style={styles.paragraph}>
          We collect various types of information to enhance your experience and provide accurate Ayurvedic health recommendations. The data we collect includes personal information such as your name, email address, age, and gender (if applicable), as well as health-related data that you voluntarily provide, such as symptoms, health conditions, lifestyle habits, and preferences for natural remedies.
        </Text>

        <Text style={styles.paragraph}>
          Additionally, we collect device and usage data, including your IP address, the type of device you use, app interactions, and preferences, which help us improve app functionality and user experience.
        </Text>

        <Text style={styles.paragraph}>
          We use this information to provide personalized Ayurvedic health recommendations, tailor content to your needs, enhance our app’s features, ensure the security of our platform, and conduct research and analytics to improve the accuracy of our health suggestions.
        </Text>

        <Text style={styles.paragraph}>
          Additionally, your information may be used to respond to customer service requests, send important notifications regarding app updates, or communicate relevant health-related content. However, we do not sell your personal data to third parties.
        </Text>

        <Text style={styles.paragraph}>
          Your information is only shared in limited circumstances, such as with trusted service providers who assist in app operations, data analysis, and cloud storage. We may also share information if required by law or to comply with legal obligations. In cases where we share data for research or analytical purposes, the information is aggregated and anonymized to ensure that it does not personally identify you.
        </Text>

        <Text style={styles.paragraph}>
          We take strong security measures to safeguard your data from unauthorized access, loss, or misuse. These measures include data encryption to protect sensitive information, secure authentication mechanisms such as password protection and OTP verification, and regular security audits to identify and address potential vulnerabilities.
        </Text>

        <Text style={styles.paragraph}>
          As a user, you have full control over your personal data and can access, update, modify, or delete your information at any time. You can also manage your privacy settings within the app, control the data you share, and opt out of receiving promotional communications.
        </Text>

        <Text style={styles.paragraph}>
          If you wish to delete your account permanently, you may request account deletion, and we will erase all associated data from our system in accordance with our data retention policies.
        </Text>

        <Text style={styles.paragraph}>
          We retain your data only for as long as necessary to provide our services and improve your experience. Once you delete your account, we ensure that your personal data is permanently removed from our records.
        </Text>

        <Text style={styles.paragraph}>
          We also comply with global privacy laws, including General Data Protection Regulation (GDPR) for users in the European Union and California Consumer Privacy Act (CCPA) for users in California, ensuring that we handle data transparently and securely.
        </Text>

        <Text style={styles.paragraph}>
          From time to time, we may update this Privacy Policy to reflect changes in our data practices, legal requirements, or improvements to our services. If significant updates are made, we will notify you via email or an in-app notification.
        </Text>

        <Text style={styles.paragraph}>
          If you have any questions, concerns, or requests regarding your privacy, you can contact our support team.
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60, // Increased for spacing
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, // Increased margin
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#333',
  },
});
