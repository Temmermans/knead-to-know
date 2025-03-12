import { Stack } from "expo-router";

// todo:
//  - theme
//  - header & footer wrapper
//  - ui overhaul foshoooo

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="logbook" options={{headerShown:false}} />
    </Stack>
  );
}
