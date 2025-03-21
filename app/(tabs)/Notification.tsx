import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('profileAndSettings')}>
        <Text style={styles.headerTitle}>Setting</Text>
        </TouchableOpacity>
      </View>

      {/* Bell Icon and Message */}
      <View style={styles.centerSection}>
        <Feather name="bell" size={80} color="black" />
        <Text style={styles.message}>
          Stay updated with {"\n"} 
          important alerts and news!{"\n"} 
          You can turn notifications {"\n"} on or off anytime in {"\n"} your app settings.
        </Text>
      </View>

      {/* Notification Toggle */}
      <View style={styles.notificationContainer}>
        <Feather name="bell" size={20} color="black" />
        <Text style={styles.notificationText}>Notification</Text>
        <Switch
          value={isNotificationEnabled}
          onValueChange={(value) => setIsNotificationEnabled(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E5BF',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  centerSection: {
    alignItems: 'center',
    marginTop: 50,
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15,
    color: 'black',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  notificationText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
});

export default SettingsScreen;
