import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#301934", // Header background color
        },

        headerTitleAlign: "center", // ✅ Center the title
        headerTintColor: "#fff", // Back button and title color
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        contentStyle: {
          backgroundColor: "#F5F5F5", // Screen background
        },
        animation: "slide_from_right", // Screen transition animation
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home", // Title for the home screen
        }}
      />
    </Stack>
  );
};

export default RootLayout;
