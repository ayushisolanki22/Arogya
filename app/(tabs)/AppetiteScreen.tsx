import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'; // ✅ Import this
import { Ionicons } from "@expo/vector-icons";

const AppetiteScreen = () => {
  const navigation = useNavigation(); // ✅ Fix: Add useNavigation

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "vata", label: "Forget to eat or not hungry. " },
    { id: "pitta", label: "Hungry often, feel bad if I skip. " },
    { id: "kapha", label: "Can wait long but eat a lot. " },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How often do you feel hungry?</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.optionContainer,
            selectedOption === option.id && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(option.id)}
        >
          <Ionicons
            name={selectedOption === option.id ? "checkmark-circle" : "ellipse-outline"}
            size={24}
            color={selectedOption === option.id ? "#4CAF50" : "#555"}
          />
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('FollowUpQuestionsScreen1')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('FollowUpQuestions2')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    padding: 20,
    justifyContent: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#8B4513",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#C8E6C9",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backButton: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AppetiteScreen;
