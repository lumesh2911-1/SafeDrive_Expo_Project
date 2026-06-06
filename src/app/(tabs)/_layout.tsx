import { Tabs } from "expo-router";
import { Car, Home, User } from "lucide-react-native";
import { moderateScale } from "react-native-size-matters";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: moderateScale(70),
          paddingBottom: moderateScale(8),
          paddingTop: moderateScale(8),
          backgroundColor: "#111111",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#FF6B00",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarLabelStyle: {
          fontSize: moderateScale(11),
          paddingTop: moderateScale(1),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} size={26} />,
        }}
      />

      <Tabs.Screen
        name="drive"
        options={{
          title: "Drive",
          tabBarIcon: ({ color }) => <Car color={color} size={30} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={26} />,
        }}
      />
    </Tabs>
  );
}
