import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
  SettingsAndActivity: undefined;
};

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showBirthdateModal, setShowBirthdateModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
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
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image source={require('../../assets/images/UserIcon.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.changePhotoText}>Change profile photo</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <InfoItem icon="user" title="Username" onEditPress={() => setShowUsernameModal(true)} />
        <View style={styles.separator} />
        <InfoItem icon="phone" title="Phone Number" onEditPress={() => setShowPhoneModal(true)} />
        <View style={styles.separator} />
        <InfoItem icon="calendar" title="Birthdate" onEditPress={() => setShowBirthdateModal(true)} />
        <View style={styles.separator} />
        <InfoItem icon="mail" title="Email" onEditPress={() => setShowEmailModal(true)} />
      </View>

      {/* Username Modal */}
      <CustomModal
        visible={showUsernameModal}
        onClose={() => setShowUsernameModal(false)}
        label="Edit your username"
        value={username}
        onChangeText={setUsername}
        onContinue={() => {
          setShowUsernameModal(false);
          navigation.navigate('SettingsAndActivity');
        }}
      />

      {/* Phone Modal */}
      <CustomModal
        visible={showPhoneModal}
        onClose={() => setShowPhoneModal(false)}
        label="Change your phone number"
        value={phone}
        onChangeText={setPhone}
        onContinue={() => {
          setShowPhoneModal(false);
          setShowOtpModal(true);
        }}
        keyboardType="phone-pad"
      />

      {/* OTP Modal */}
      <CustomModal
        visible={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        label="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        onContinue={() => {
          setShowOtpModal(false);
          navigation.navigate('SettingsAndActivity');
        }}
        keyboardType="numeric"
      />

      {/* Birthdate Modal */}
      <CustomModal
        visible={showBirthdateModal}
        onClose={() => setShowBirthdateModal(false)}
        label="Edit your birthdate"
        value={birthdate}
        onChangeText={(text) => {
          let cleaned = text.replace(/[^\d]/g, '');
          if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);
          let formatted = '';
          if (cleaned.length <= 2) {
            formatted = cleaned;
          } else if (cleaned.length <= 4) {
            formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
          } else {
            formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
          }
          setBirthdate(formatted);
        }}
        onContinue={() => {
          setShowBirthdateModal(false);
          navigation.navigate('SettingsAndActivity');
        }}
        keyboardType="numeric"
        placeholder="DD/MM/YYYY"
      />

      {/* Email Modal */}
      <CustomModal
        visible={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        label="Edit your email"
        value={email}
        onChangeText={setEmail}
        onContinue={() => {
          setShowEmailModal(false);
          navigation.navigate('SettingsAndActivity');
        }}
        keyboardType="email-address"
        placeholder="your@email.com"
      />
    </View>
  );
};

const InfoItem = ({ icon, title, onEditPress }) => (
  <TouchableOpacity style={styles.infoItem}>
    <Feather name={icon} size={20} color="black" />
    <Text style={styles.infoText}>{title}</Text>
    <TouchableOpacity onPress={onEditPress}>
      <Feather name="edit-3" size={18} color="black" style={styles.editIcon} />
    </TouchableOpacity>
  </TouchableOpacity>
);

const CustomModal = ({
  visible,
  onClose,
  label,
  value,
  onChangeText,
  onContinue,
  keyboardType = 'default',
  placeholder = '',
}) => (
  <Modal transparent animationType="fade" visible={visible}>
    <View style={styles.modalOverlay}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={styles.modalLabel}>{label}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
          <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E5BF',
    padding: 30,
    paddingTop: 70, // Moved everything slightly down
  },
  header: {
    paddingHorizontal: 0, // reduced horizontal padding
    paddingVertical: 20,
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
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SettingsScreen;
