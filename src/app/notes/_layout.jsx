import { Stack } from "expo-router";

const NotesLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the header for this layout
      }}
    ></Stack>
  );
};

export default NotesLayout;
