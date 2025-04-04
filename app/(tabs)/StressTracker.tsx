import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const StressTracker = () => {
  const [stressLevel, setStressLevel] = useState(100);

  const getColor = useCallback(() => {
    if (stressLevel <= 33) return "#4CAF50"; // Green (Stress Free)
    if (stressLevel > 33 && stressLevel <= 66) return "#2196F3"; // Blue (Average Stress)
    return "#F44336"; // Red (Very Stressed)
  }, [stressLevel]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.dateText}>Today, 11 Feb ▼</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.greeting}>Hi User,</Text>
        <Text style={styles.infoText}>
          How what is your stress level today?{"\n"}Record & Save your stress levels daily for us to help you live a Stress-free life!
        </Text>
      </View>
      
      <Text style={styles.questionText}>How do you feel today?</Text>
      
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor={getColor()}
        thumbTintColor={getColor()}
        maximumTrackTintColor="#e0e0e0"
        value={stressLevel}
        onValueChange={(value) => setStressLevel(Math.round(value))}
      />
      
      <View style={styles.scaleContainer}>
        <Text style={[styles.scaleText, { color: "#4CAF50", textAlign: "left" }]}>Stress Free</Text>
        <Text style={[styles.scaleText, { color: "#2196F3", textAlign: "center" }]}>Average Stress</Text>
        <Text style={[styles.scaleText, { color: "#F44336", textAlign: "right" }]}>Very Stressed </Text>
      </View>
      
      <View style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={150}
          width={12}
          fill={stressLevel}
          tintColor={getColor()}
          backgroundColor="#e0e0e0"
        >
          {() => (
            <Text style={[styles.stressText, { color: getColor() }]}>{stressLevel}</Text>
          )}
        </AnimatedCircularProgress>
        <Text style={[styles.statusText, { color: getColor() }]}>
          {stressLevel <= 33 ? "Great!" : stressLevel <= 66 ? "Average" : "Stressed!"}
        </Text>
      </View>
      
      <Text style={styles.progressText}>
        Your stress level is better than yesterday, great progress!
      </Text>

      <View>
        <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#E3F2FD",
    padding: 20,
    paddingTop: 40,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    width: "90%",
    alignItems: "center",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scaleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 5,
  },
  scaleText: {
    fontSize: 14,
    fontWeight: "bold",
    width: "33%",
  },
  progressContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  stressText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 16,
    marginTop: 5,
  },
  slider: {
    width: "90%",
    marginBottom: 5,
  },
  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  logo: {
    width: 130,
    height: 50,
    alignSelf: 'center',
    marginTop: 70,
  },
});

export default StressTracker;
