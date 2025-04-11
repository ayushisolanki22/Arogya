import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Screens where tab bar should be hidden
const HIDDEN_TAB_SCREENS = [
  'index',
  'welcome',
  'About',
  'Allergy',
  'AppetiteScreen',
  'BirthdateInput',
  'DietSelectionScreen',
  'DigestionScreen',
  'Disclaimer',
  'DiscoverPrakruti',
  'EmailLogin',
  'EmailRegistration',
  'FamilyHealth',
  'FollowUpQuestions',
  'FollowUpQuestions2',
  'FollowUpQuestionsScreen1',
  'FoodTracker',
  'GenderSelection',
  'HealthIssue',
  'Help',
  'HomeScreen',
  'Insights',
  'MemoryKYP',
  'MentalhealthFollowup',
  'MentalhealthKYP',
  'NameInput',
  'Notification',
  'PhoneLogin',
  'PhoneRegistration',
  'PrivacyPolicy',
  'profileAndSettings',
  'RegistrationSuccess',
  'SettingsAndActivity',
  'SkinFollowup',
  'SkinKYP',
  'SleepFollowupKYP',
  'SleepKYP',
  'SleepTrack',
  'StressKYP',
  'StressTracker',
  'SuggestionsScreen',
  'UserExercise',
  'UserMovement',
  'WaterInsights',
  'WeatherFeeling',
  'WelcomeScreen',
  'Registration',
  'Login'
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
          display: HIDDEN_TAB_SCREENS.some(screen => 
            route.name === screen || route.name.includes(screen))
            ? 'none'
            : 'flex'
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
