import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AyurBotScreen() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste! 🌿 I'm your Veda companion, here to guide you on your wellness journey through personalized care based on your Prakruti. How can I assist you today?",
    },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef();

  const handleSend = () => {
    if (inputText.trim() === '') return;
    setMessages(prev => [...prev, { sender: 'user', text: inputText }]);
    setInputText('');

    // Scroll to bottom after sending
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={90} // adjust if header height is different
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.botName}>Veda</Text>
              {/* <Text style={styles.subText}>Typically replies instantly</Text> */}
            </View>
          </View>

          {/* Messages */}
          <ScrollView
            ref={scrollViewRef}
            style={styles.messagesContainer}
            contentContainerStyle={{ paddingBottom: 10 }}
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.map((msg, index) => (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  msg.sender === 'bot'
                    ? styles.botBubble
                    : styles.userBubble,
                ]}
              >
                <Text>{msg.text}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Input area */}
          <View style={styles.inputContainer}>
            <TouchableOpacity>
              <Text style={styles.icon}>📷</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.icon}>📎</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Message AyurBot"
            />
            <TouchableOpacity onPress={handleSend}>
              <Text style={styles.sendIcon}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
  },
  backArrow: {
    fontSize: 24,
    marginRight: 10,
  },
  botName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: '#555',
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  botBubble: {
    backgroundColor: '#f7efc6',
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom:20,
    backgroundColor: '#f6eec2',
  },
  icon: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    height: 40,
  },
  sendIcon: {
    fontSize: 24,
    marginLeft: 5,
  },
});
