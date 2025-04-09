import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EmailLoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewUserPress = () => {
    navigation.navigate('EmailRegistrationScreen');
  };

  const handlePhoneLoginPress = () => {
    navigation.navigate('PhoneLoginScreen');
  };

  const handleSignIn = () => {
    navigation.navigate('HomeScreen');
  };

  const handleForgotPassword = () => {
    setShowForgotModal(true);
  };

  const handlePasswordReset = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Password updated successfully!');
    setShowForgotModal(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.newUser} onPress={handleNewUserPress}>New User?</Text>
      <Text style={styles.title}>Welcome Back, Log In to continue</Text>

      <View style={styles.inputContainer}>
        <View style={[styles.inputRow, { marginBottom: 20 }]}>
          <FontAwesome name="user" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="black"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputRow}>
          <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="black"
            style={styles.input}
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <FontAwesome name={secureTextEntry ? "eye" : "eye-slash"} size={20} color="black" />
          </TouchableOpacity>
        </View>

       
       
<TouchableOpacity onPress={handleForgotPassword} style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
  <Text style={styles.forgotPassword}>Forgot Password?</Text>
</TouchableOpacity>


        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orContinueText}>or continue with</Text>

      <TouchableOpacity style={styles.phoneButton} onPress={handlePhoneLoginPress}>
        <FontAwesome name="phone" size={20} color="black" />
        <Text style={styles.phoneText}> Phone Number</Text>
      </TouchableOpacity>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com')}>
          <Image source={require('../../assets/images/Facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.google.com')}>
          <Image source={require('../../assets/images/Google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.apple.com')}>
          <Image source={require('../../assets/images/Apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 80 }} />
      <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />

      {/* Forgot Password Modal */}
      <Modal
        visible={showForgotModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowForgotModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Reset Password</Text>
            <TextInput
              placeholder="Enter new password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              style={styles.modalInput}
            />
            <TextInput
              placeholder="Re-Enter password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.modalInput}
            />
            <TouchableOpacity style={styles.modalButton} onPress={handlePasswordReset}>
              <Text style={styles.modalButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF8E1',
    padding: 20,
    paddingTop: 110,
  },
  newUser: {
    fontSize: 14,
    color: '#2E7D32',
    alignSelf: 'flex-end',
    marginTop: -100,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 30,
  },
  inputContainer: {
    width: '105%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  forgotPassword: {
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  signInText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  orContinueText: {
    fontSize: 14,
    color: '#777',
    marginTop: -15,
    marginBottom: 20,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 5,
    marginBottom: 20,
    width: '105%',
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
    gap: 85,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginTop: 10,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32',
  },
  modalInput: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EmailLoginScreen;
