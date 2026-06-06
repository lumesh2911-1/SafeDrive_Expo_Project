import { router } from "expo-router";
import {
  Activity,
  ChevronRight,
  Compass,
  MapPin,
  Shield,
  Smartphone,
} from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function OnboardingScreen() {
  const permissions = [
    {
      icon: Activity,
      title: "Accelerometer",
      subtitle: "Detect harsh braking",
    },
    {
      icon: Compass,
      title: "Gyroscope",
      subtitle: "Detect sharp turns",
    },
    {
      icon: Smartphone,
      title: "Device Motion",
      subtitle: "Detect phone handling",
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: "Track driving route",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.iconWrapper}>
          <Shield size={moderateScale(90)} color="#FF6B00" strokeWidth={1.7} />
        </View>

        <Text style={styles.title}>Sensor Permission</Text>

        <Text style={styles.description}>
          Allow access to device sensors to detect driving behavior and improve
          your safety.
        </Text>
      </View>

      <View style={styles.permissionSection}>
        {permissions.map((item, index) => {
          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={styles.card}
            >
              <View style={styles.leftSection}>
                <View style={styles.iconBox}>
                  <Icon size={moderateScale(22)} color="#FF6B00" />
                </View>

                <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>

                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </View>
              </View>

              <ChevronRight size={20} color="#8E8E93" />
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.buttonText}>Allow Sensors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    paddingHorizontal: moderateScale(20),
    justifyContent: "center",
  },

  headerSection: {
    alignItems: "center",
    marginBottom: moderateScale(30),
  },

  iconWrapper: {
    marginBottom: moderateScale(3),
  },

  title: {
    color: "#FFF",
    fontSize: moderateScale(28),
    fontWeight: "700",
    textAlign: "center",
  },

  description: {
    color: "#A0A0A0",
    fontSize: moderateScale(14),
    textAlign: "center",
    lineHeight: moderateScale(22),
    marginTop: moderateScale(2),
    paddingHorizontal: moderateScale(10),
  },

  // Permission Section
  permissionSection: {
    gap: moderateScale(12),
  },

  card: {
    backgroundColor: "#111111",
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1E1E1E",
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(14),

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(14),
    backgroundColor: "#1A120B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(14),
  },

  cardTitle: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },

  cardSubtitle: {
    color: "#8E8E93",
    fontSize: moderateScale(13),
    marginTop: moderateScale(2),
  },

  // Bottom Section
  bottomSection: {
    marginTop: moderateScale(50),
  },

  button: {
    height: moderateScale(56),
    backgroundColor: "#FF6B00",
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "700",
  },
});
