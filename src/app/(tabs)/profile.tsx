import { Fingerprint, Mail, Shield, User } from "lucide-react-native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

const userData = {
  name: "John Anderson",
  email: "john.anderson@example.com",
  userId: "SD-2026-1024",
  membership: "Premium Driver",
  photo: "https://i.pravatar.cc/300?img=12",
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: userData.photo }} style={styles.avatar} />

        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.email}>{userData.email}</Text>
      </View>

      <View style={styles.card}>
        <MenuItem
          icon={<Mail size={20} color="#FF6B00" />}
          title="Email"
          subtitle={userData.email}
        />

        <Divider />

        <MenuItem
          icon={<Fingerprint size={20} color="#FF6B00" />}
          title="Driver ID"
          subtitle={userData.userId}
        />

        <Divider />

        <MenuItem
          icon={<User size={20} color="#FF6B00" />}
          title="Name"
          subtitle={userData.name}
        />

        <Divider />

        <MenuItem
          icon={<Shield size={20} color="#FF6B00" />}
          title="Membership"
          subtitle={userData.membership}
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          SafeDrive uses sensor data and location services to provide driving
          insights, safety alerts, and trip tracking.
        </Text>
      </View>
    </View>
  );
}

const MenuItem = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.menuItem}>
    <View style={styles.iconBox}>{icon}</View>

    <View style={styles.textContainer}>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    paddingHorizontal: moderateScale(20),
    justifyContent: "center",
  },

  profileContainer: {
    alignItems: "center",
    marginBottom: moderateScale(25),
  },

  avatar: {
    width: moderateScale(110),
    height: moderateScale(110),
    borderRadius: moderateScale(55),
    marginBottom: moderateScale(12),
  },

  name: {
    color: "#FFF",
    fontSize: moderateScale(22),
    fontWeight: "700",
  },

  email: {
    color: "#A0A0A0",
    fontSize: moderateScale(14),
    marginTop: moderateScale(4),
  },

  card: {
    width: "100%",
    backgroundColor: "#111111",
    borderRadius: moderateScale(18),
    borderWidth: 1,
    borderColor: "#1E1E1E",
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(16),
  },

  iconBox: {
    width: moderateScale(46),
    height: moderateScale(46),
    borderRadius: moderateScale(12),
    backgroundColor: "#1A120B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(14),
  },

  textContainer: {
    flex: 1,
  },

  menuTitle: {
    color: "#FF6B00",
    fontSize: moderateScale(13),
    fontWeight: "600",
  },

  menuSubtitle: {
    color: "#FFFFFF",
    fontSize: moderateScale(15),
    marginTop: moderateScale(3),
  },

  divider: {
    height: 1,
    backgroundColor: "#1E1E1E",
    marginLeft: moderateScale(76),
  },

  infoBox: {
    width: "100%",
    marginTop: moderateScale(20),
    backgroundColor: "#1A120B",
    borderRadius: moderateScale(14),
    padding: moderateScale(14),
    borderWidth: 1,
    borderColor: "#2A1B0E",
  },

  infoText: {
    color: "#F5B97A",
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
  },
});
