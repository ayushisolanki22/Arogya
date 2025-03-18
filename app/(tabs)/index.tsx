import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const firstTimer = setTimeout(() => setStep(1), 2000);
    const secondTimer = setTimeout(() => navigation.navigate('PhoneRegistrationScreen'), 4000);
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      {step === 0 ? (
        <>
          {/* Welcome Text Positioned Above the Logo */}
          <ThemedText type="title" style={styles.welcomeText}>
            Welcome To
          </ThemedText>

          {/* Logo Positioned at the Center */}
          <Image 
            source={require('../../assets/images/ArogyaLogo.png')} 
            style={styles.logo} 
            resizeMode="contain"
          />

          {/* Subtext Positioned Immediately Below the Logo */}
          <ThemedText type="subtitle" style={styles.subtitle}>
            Predict Prevent Protect
          </ThemedText>
        </>
      ) : (
        <ActivityIndicator size="large" color="#6B6B6B" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E37D', // Light yellow background
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B6B6B',
    marginBottom: -40, // Space between welcome text and logo
  },
  logo: {
    width: 250,  // Further increased width
    height: 200, // Further increased height
    marginBottom: 0, // Ensures subtitle is immediately below the logo
  },
  subtitle: {
    fontSize: 14,
    color: '#6B6B6B',
    marginTop: -30, // Removes unnecessary spacing
    textAlign: 'center',
  },
});
