import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SettingsScreen'>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveLoginModal, setShowSaveLoginModal] = useState(false);
  const [showLogoutConfirmModal, setShowLogoutConfirmModal] = useState(false);

  const MenuItem: React.FC<{ icon: any; title: string; onPress?: () => void }> = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Feather name={icon} size={20} color="black" />
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.headerTitle}>Home</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={require('../../assets/images/UserIcon.png')} style={styles.userIcon} />
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsAndActivity')}>
            <Text style={styles.userName}>Username</Text>
          </TouchableOpacity>
          <Text style={styles.userPhone}>+91 1234567890</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsAndActivity')} style={styles.editIconContainer}>
          <Feather name="edit-3" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Menu Section */}
      <View style={styles.menuSection}>
        <MenuItem icon="lock" title="Account Privacy" />
        <View style={styles.divider} />
        <MenuItem icon="bell" title="Notifications" onPress={() => navigation.navigate('Notification')} />
        <View style={styles.divider} />
        <MenuItem icon="info" title="About" onPress={() => navigation.navigate('AboutScreen')} />
        <View style={styles.divider} />
        <MenuItem icon="help-circle" title="Help" onPress={() => navigation.navigate('HelpScreen')} />
        <View style={styles.divider} />
        <MenuItem icon="shield" title="Privacy Policy" onPress={() => navigation.navigate('PrivacyPolicy')} />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <MenuItem icon="log-out" title="Log Out" onPress={() => setShowSaveLoginModal(true)} />
        <View style={styles.divider} />
        <MenuItem icon="trash" title="Delete Account" onPress={() => setShowDeleteModal(true)} />
      </View>

      {/* Delete Confirmation Modal */}
      <Modal transparent animationType="fade" visible={showDeleteModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Are you sure you want to delete your account?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setShowDeleteModal(false)}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setShowDeleteModal(false);
                  // Add delete logic here
                }}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Save Login Info Modal */}
      <Modal transparent animationType="fade" visible={showSaveLoginModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Do you want to save your login information?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setShowSaveLoginModal(false);
                  setShowLogoutConfirmModal(true);
                }}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setShowSaveLoginModal(false);
                  setShowLogoutConfirmModal(true);
                }}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Final Logout Confirmation Modal */}
      <Modal transparent animationType="fade" visible={showLogoutConfirmModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Do you want to logout your account?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setShowLogoutConfirmModal(false)}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setShowLogoutConfirmModal(false);
                  // Add logout logic here
                }}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E5BF',
    padding: 30,
    paddingTop: 90, // shifted everything down
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingBottom: 10,
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
    position: 'relative',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  editIconContainer: {
    position: 'absolute',
    right: 15,
    top: 24,
  },
  menuSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 5,
  },
  bottomSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 20,
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
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    width: '80%',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
