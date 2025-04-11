import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConditionsScreen() {
  const navigation = useNavigation();

  const conditions = [
    {
        title: 'Common Cold & Flu',
        description: `Cold and flu are caused by viral infections and can lead to symptoms like sneezing, runny nose, fever, and body aches. These simple home remedies can provide relief and boost immunity.\n\nRemedies:\n✅ Ginger Tea: Boil fresh ginger slices in water, add honey and lemon for taste. Ginger has anti-inflammatory properties that help relieve congestion and sore throat.\n✅ Turmeric Milk: Mix ½ teaspoon of turmeric powder in a glass of warm milk and drink before bed. Turmeric has antibacterial and antiviral properties that speed up recovery.\n✅ Steam Inhalation: Add a few drops of eucalyptus oil or mint leaves in hot water, cover your head with a towel, and inhale the steam. This helps clear nasal congestion.\n✅ Honey & Black Pepper: Mix a pinch of black pepper with a teaspoon of honey and consume twice a day. Black pepper helps reduce phlegm and clears the respiratory tract.\n✅ Tulsi & Ginger Decoction: Boil a few tulsi (holy basil) leaves and grated ginger in water, strain, and drink. Tulsi has antimicrobial properties that help fight infections.`,
      },
      
    {
      title: 'Cough / Sore Throat',
      description: 'Dry or wet cough and sore throat can be irritating. These natural remedies help soothe the throat and reduce inflammation. \n\n Remedies:\n ✅ Honey & Warm Water: Take a teaspoon of honey with a glass of warm water. Honey coats the throat, providing relief from irritation.\n ✅ Saltwater Gargle: Gargle with warm salt water (½ teaspoon salt in a glass of warm water) twice a day to reduce throat swelling and kill bacteria.\n ✅ Turmeric & Honey Paste: Mix a pinch of turmeric with a teaspoon of honey and have it twice a day to soothe the throat and reduce inflammation.\n ✅ Tulsi Tea: Boil 5–6 tulsi leaves in water, strain, and sip. Tulsi has antibacterial properties that help clear throat infections.\n✅ Clove & Honey: Suck on a clove dipped in honey to suppress cough and ease throat irritation.',
    },
    {
      title: 'Indigestion & Acidity',
      description: 'Poor digestion and acidity can cause discomfort. These simple home remedies can aid digestion and soothe the stomach.\n\n Remedies:\n✅ Jeera (Cumin) Water: Boil a teaspoon of cumin seeds in water, let it cool slightly, and drink. It helps in digestion and reduces acidity.\n ✅ Fennel Seeds: Chewing a teaspoon of fennel seeds after meals prevents bloating and aids digestion.\n ✅ Banana: Eating a banana helps neutralize stomach acid and provides relief from acidity.\n ✅ Aloe Vera Juice: Drinking aloe vera juice on an empty stomach helps soothe the digestive tract and prevents acidity.\n ✅ Ginger & Lemon Tea: Ginger has digestive enzymes that help break down food and relieve indigestion. Squeeze some lemon in warm ginger tea for best results.\n ',
    },
    {
      title: 'Constipation',
      description: 'A sluggish digestive system can lead to constipation. These natural remedies help regulate bowel movements.\n\n Remedies:\n ✅ Warm Water & Lemon: Drinking warm water with lemon on an empty stomach in the morning stimulates bowel movements.\n ✅ Flaxseeds: Soak flaxseeds in water overnight and consume in the morning. Flaxseeds are rich in fiber and omega-3 fatty acids, which help relieve constipation.\n ✅ Papaya & Prunes: Eating papaya or prunes daily acts as a natural laxative.\n ✅ Triphala Powder: Mix ½ teaspoon of Triphala powder in warm water and drink before bedtime. It helps cleanse the digestive system.\n ✅ Castor Oil: Taking 1 teaspoon of castor oil with warm water before bed can help relieve constipation naturally.\n',
    },
    {
      title: 'Headache',
      description: 'Headaches can be caused by stress, dehydration, or tension. These remedies provide relief naturally.\n\nRemedies:\n✅ Peppermint Oil Massage: Apply peppermint oil on the temples and gently massage for instant relief.\n✅ Ginger Tea: Ginger helps reduce inflammation and relaxes blood vessels, easing headaches.\n✅ Hydration: Drink plenty of water, as dehydration is a common cause of headaches.\n✅ Cold Compress: Applying a cold compress on the forehead helps relieve tension headaches.\n✅ Basil Tea: Boil a few basil leaves in water and sip slowly to ease headaches caused by stress or tension.\n',
    },
    {
      title: 'Joint Pain & Arthritis',
      description: ': Joint pain and arthritis can cause discomfort, especially in older adults. These natural remedies help reduce inflammation and pain.\n\nRemedies:\n✅ Turmeric & Warm Milk: Drinking warm milk with ½ teaspoon of turmeric powder helps reduce inflammation and joint pain.\n✅ Epsom Salt Bath: Soaking in warm water with Epsom salt relaxes the muscles and reduces stiffness.\n✅ Mustard Oil Massage: Warm mustard oil with a few garlic cloves, let it cool slightly, and massage on the affected joints to improve blood circulation.\n✅ Fenugreek Seeds: Soak fenugreek seeds overnight and consume in the morning. Fenugreek has anti-inflammatory properties that help in joint pain relief.\n✅ Hot & Cold Compress: Applying a hot water bag or ice pack alternately can reduce swelling and pain in the joints.\n',
    },
    {
        title:'Insomnia & Stress ',
        description: 'Sleep problems and stress can affect overall health. These remedies help calm the mind and promote restful sleep.\n\nRemedies:\n✅ Warm Milk with Nutmeg: Adding a pinch of nutmeg to warm milk before bed can help induce sleep naturally.\n✅ Chamomile Tea: Drinking chamomile tea before bed helps relax the mind and improves sleep quality.\n✅ Lavender Oil Therapy: Add a few drops of lavender essential oil to your pillow or diffuse it in the room to promote relaxation.\n✅ Deep Breathing & Meditation: Practicing deep breathing exercises before bedtime helps calm the nervous system and reduce stress.\n✅ Banana & Almonds: Eating a banana with a few almonds before bed helps regulate sleep hormones and promotes better rest.\n'
    },
    {
        title:'Other',
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable List */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {conditions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleToggle(index)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
            {expandedIndex === index && (
              <View style={styles.descriptionBox}>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.logoText}>A R O G Y A</Text>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6eec2',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  header: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 26,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionBox: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  logoText: {
    fontSize: 16,
    fontFamily: 'serif',
    letterSpacing: 3,
    color: '#555',
  },
});

