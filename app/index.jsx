import { useRouter } from "expo-router"; // Import the router from expo-router
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter(); // Import the router from expo-router
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/thinksnap-logo2.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to ThinkSnap</Text>

      <Text style={styles.subTitle}>Snap your thoughts before they fade.</Text>

      <TouchableOpacity
        style={styles.main_button}
        onPress={() => router.push("/notes")} // Navigate to the notes screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Text>Don't have an account? Sign Up here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 900,
    color: "#301934", // Primary color
  },

  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A4A4F", // Secondary color
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#301934", // Green border
    borderRadius: 100, // Make the logo circular
  },

  // Main button styles
  // This button will be used to navigate to the next screen
  main_button: {
    backgroundColor: "#301934", // Primary color
    color: "#fff", // Button text color
    paddingY: 15,
    paddingX: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 50,
    shadowColor: "#000",
    borderRadius: 10,
    marginTop: 50, // Margin to push the button down
  },
  buttonText: {
    color: "#fff", // Button text color
    fontSize: 20,
    fontWeight: "bold",
  },
});

// Export the HomeScreen component as the default export
export default HomeScreen;
