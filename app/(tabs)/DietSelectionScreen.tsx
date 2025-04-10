import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DietSelectionScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('SuggestionsScreen');
  };

  const dietPlans = [
    {
      id: 1,
      title: 'Balanced Diet Plan',
      subtitle: 'For general health',
      // Image path will be added here
      imagePath: '', 
    },
    {
      id: 2,
      title: 'Weight Loss Diet Plan',
      subtitle: '',
      // Image path will be added here
      imagePath: '', 
    },
    {
      id: 3,
      title: 'Weight Gain Diet Plan',
      subtitle: '',
      // Image path will be added here
      imagePath: '', 
    },
    {
      id: 4,
      title: 'Weight Gain Diet Plan',
      subtitle: '',
      // Image path will be added here
      imagePath: '', 
    },
    {
      id: 5,
      title: 'Keto Diet Plan',
      subtitle: '',
      // Image path will be added here
      imagePath: '', 
    },
    {
      id: 6,
      title: 'Vegetarian Diet Plan',
      subtitle: '',
      // Image path will be added here
      imagePath: '', 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          {/* Back arrow image path will be added here */}
          <Image 
            source={{uri: ''}} 
            style={styles.backIcon} 
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Main content with scroll view */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Diet plan buttons */}
        {dietPlans.map((plan) => (
          <TouchableOpacity key={plan.id} style={styles.dietButton}>
            <View style={styles.dietContent}>
              <Image 
                source={{uri: plan.imagePath}} 
                style={styles.dietIcon} 
                resizeMode="contain"
              />
              <View style={styles.dietTextContainer}>
                <Text style={styles.dietTitle}>{plan.title}</Text>
                {plan.subtitle ? (
                  <Text style={styles.dietSubtitle}>{plan.subtitle}</Text>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
        {/* Space for logo at bottom */}
        <View style={styles.logoContainer}>
          {/* Logo image path will be added here */}
          <Image 
            source={{uri: ''}} 
            style={styles.logo} 
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6dd', // Yellowish background from the image
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    color: 'black',
    padding: 8,
  },
  backIcon: {
    color: 'black',
    width: 24,
    height: 24,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  dietButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
  },
  dietContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dietIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  dietTextContainer: {
    flex: 1,
  },
  dietTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  dietSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
});

export default DietSelectionScreen;