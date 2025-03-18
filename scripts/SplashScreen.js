import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        
        <View style={styles.logoContainer}>
          <Image 
            source={require('assets/images/ArogyaLogo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.taglineText}>Predict Prevent Protect</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E205', // Matches the yellow background
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  taglineText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    letterSpacing: 1,
  }
});

export default SplashScreen;