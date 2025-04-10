import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ChatBotScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Namaste! 🙏 I'm your Ayurveda companion, here to guide you on your wellness journey through personalized care based on your Prakruti. How can I assist you today?",
      isBot: true
    }
  ]);
  const [messageText, setMessageText] = useState('');
  const scrollViewRef = useRef();

  const sendMessage = () => {
    if (messageText.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      isBot: false
    };
    
    setMessages([...messages, newMessage]);
    setMessageText('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand your query. Let me provide some Ayurvedic insights on that.",
        isBot: true
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant camera permissions to use this feature.');
      return;
    }
    
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.canceled) {
      // Handle the image - for example, you could send it as a message
      const newImageMessage = {
        id: messages.length + 1,
        imageUri: result.assets[0].uri,
        isBot: false
      };
      setMessages([...messages, newImageMessage]);
    }
  };
  
  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant media library permissions to use this feature.');
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    if (!result.canceled) {
      // Handle the image - for example, you could send it as a message
      const newImageMessage = {
        id: messages.length + 1,
        imageUri: result.assets[0].uri,
        isBot: false
      };
      setMessages([...messages, newImageMessage]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.botIcon}
              // Replace with actual logo or use a placeholder
              defaultSource={require('../assets/placeholder.png')}
            />
            <View>
              <Text style={styles.headerTitle}>AyurBot</Text>
              <Text style={styles.headerSubtitle}>Typically replies instantly</Text>
            </View>
          </View>
        </View>
        
        {/* Chat Messages */}
        <ScrollView 
          style={styles.messagesContainer}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {messages.map(message => (
            <View 
              key={message.id} 
              style={[
                styles.messageBubble,
                message.isBot ? styles.botMessage : styles.userMessage
              ]}
            >
              {message.imageUri ? (
                <Image source={{ uri: message.imageUri }} style={styles.messageImage} />
              ) : (
                <Text style={styles.messageText}>{message.text}</Text>
              )}
            </View>
          ))}
        </ScrollView>
        
        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={openCamera}>
            <Ionicons name="camera-outline" size={24} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.iconButton} onPress={openGallery}>
            <Ionicons name="image-outline" size={24} color="black" />
          </TouchableOpacity>
          
          <TextInput
            style={styles.input}
            placeholder="Message AyurBot"
            value={messageText}
            onChangeText={setMessageText}
            multiline
          />
          
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={sendMessage}
            disabled={messageText.trim() === ''}
          >
            <Ionicons 
              name="send-outline" 
              size={24} 
              color={messageText.trim() === '' ? '#CCCCCC' : 'black'} 
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#F0F0F0', // Placeholder color
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#666666',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 18,
    marginBottom: 10,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8E8AA', // Light yellow color for bot messages
    borderBottomLeftRadius: 4,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E8F8F8', // Light blue color for user messages
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
  },
  messageImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#F9F9F9',
  },
  iconButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  sendButton: {
    padding: 8,
    marginLeft: 5,
  },
});

export default ChatBotScreen;