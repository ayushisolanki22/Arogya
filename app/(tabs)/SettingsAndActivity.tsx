import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation type
type RootStackParamList = {
  ProfileAndSettings: undefined;
};

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileAndSettings'>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <TouchableOpacity onPress={() => navigation.navigate('profileAndSettings')}>
          <Text style={styles.headerTitle}>Settings</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }}
          style={styles.profileImage}
        />
        <Text style={styles.changePhotoText}>Change profile photo</Text>
      </View>
      
      <View style={styles.infoSection}>
        <InfoItem icon="user" title="Username" />
        <InfoItem icon="phone" title="Phone Number" />
        <InfoItem icon="calendar" title="Birthdate" />
        <InfoItem icon="mail" title="Email" />
      </View>
    </View>
  );
};

const InfoItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.infoItem}>
    <Feather name={icon} size={20} color="black" />
    <Text style={styles.infoText}>{title}</Text>
    <Feather name="edit-3" size={18} color="black" style={styles.editIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E5BF',
    padding: 30,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePhotoText: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
  infoSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  editIcon: {
    marginLeft: 'auto',
  },
});

export default SettingsScreen;
