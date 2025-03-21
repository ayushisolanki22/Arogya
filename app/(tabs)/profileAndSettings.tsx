import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SettingsScreen'>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const MenuItem: React.FC<{ icon: any; title: string; onPress?: () => void }> = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Feather name={icon} size={20} color="black" />
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profileImage}
        />
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsAndActivity')}>
            <Text style={styles.userName}>Username</Text>
          </TouchableOpacity>
          <Text style={styles.userPhone}>+91 1234567890</Text>
        </View>
        <Feather name="edit-3" size={20} color="black" style={styles.editIcon} />
      </View>
      
      <View style={styles.menuSection}>
        <MenuItem icon="lock" title="Account Privacy" />
        <MenuItem icon="bell" title="Notifications" onPress={() => navigation.navigate('Notification')} />
        <MenuItem icon="info" title="About" />
        <MenuItem icon="help-circle" title="Help" />
        <MenuItem icon="shield" title="Privacy Policy" />
      </View>
      
      <View style={styles.bottomSection}>
        <MenuItem icon="log-out" title="Log Out" />
        <MenuItem icon="trash" title="Delete Account" />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Feather name={icon} size={20} color="black" />
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E5BF',
    padding: 30,
  },
  header: {
    padding:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    color: 'gray',
  },
  editIcon: {
    marginLeft: 'auto',
  },
  menuSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
  bottomSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
});

export default SettingsScreen;
