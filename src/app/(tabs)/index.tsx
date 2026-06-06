import { router } from "expo-router";
import { Bell, Car, Trophy } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function HomeScreen() {
  const recentDrives = [
    {
      date: "May 16, 2026",
      score: 85,
      status: "Good",
      color: "#F59E0B",
    },
    {
      date: "May 15, 2026",
      score: 78,
      status: "Fair",
      color: "#FB923C",
    },
    {
      date: "May 14, 2026",
      score: 95,
      status: "Excellent",
      color: "#4ADE80",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Driver 👋</Text>
          <Text style={styles.subTitle}>Drive safe and keep improving!</Text>
        </View>

        <TouchableOpacity style={styles.notificationButton}>
          <Bell size={20} color="#FF6B00" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: moderateScale(20) }}
      >
        {/* Score Card */}

        <View style={styles.scoreCard}>
          <Text style={styles.cardLabel}>Average Score</Text>

          <View style={styles.scoreRow}>
            <Text style={styles.score}>88</Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>Good Driver</Text>
            </View>
          </View>

          <View style={styles.graphContainer}>
            <View style={styles.graphLine} />
          </View>
        </View>

        {/* Stats */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.cardLabel}>Total Drives</Text>

            <View style={styles.statBottom}>
              <Text style={styles.statNumber}>16</Text>

              <Car size={22} color="#FF6B00" />
            </View>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.cardLabel}>Best Score</Text>

            <View style={styles.statBottom}>
              <Text style={styles.statNumber}>95</Text>

              <Trophy size={22} color="#FF6B00" />
            </View>
          </View>
        </View>

        {/* Last Drive */}

        <View style={styles.lastDriveCard}>
          <Text style={styles.cardLabel}>Last Drive</Text>

          <View style={styles.lastDriveRow}>
            <View>
              <Text style={styles.lastDriveDate}>May 17, 2026 • 08:45 PM</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.lastDriveScore}>92</Text>

              <Text style={styles.excellentText}>Excellent</Text>
            </View>
          </View>
        </View>

        {/* Recent Drives */}

        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Recent Drives</Text>

          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recentCard}>
          {recentDrives.map((item, index) => (
            <View key={index} style={styles.recentItem}>
              <Text style={styles.recentDate}>{item.date}</Text>

              <Text style={[styles.recentScore, { color: item.color }]}>
                {item.score}
              </Text>

              <Text style={[styles.recentStatus, { color: item.color }]}>
                {item.status}
              </Text>
            </View>
          ))}
        </View>

        {/* Start Drive */}

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.startButton}
          onPress={() => router.push("/start-drive")}
        >
          <Car size={22} color="#FFF" />

          <Text style={styles.startButtonText}>Start Drive</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(20),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(20),
    marginTop: moderateScale(20),
  },

  greeting: {
    color: "#FFF",
    fontSize: moderateScale(24),
    fontWeight: "700",
  },

  subTitle: {
    color: "#8E8E93",
    fontSize: moderateScale(13),
    marginTop: moderateScale(3),
  },

  notificationButton: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(12),
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
  },

  notificationDot: {
    position: "absolute",
    top: moderateScale(10),
    right: moderateScale(10),
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: "#FF3B30",
  },

  scoreCard: {
    backgroundColor: "#111111",
    borderRadius: moderateScale(18),
    padding: moderateScale(18),
    borderWidth: 1,
    borderColor: "#1E1E1E",
  },

  cardLabel: {
    color: "#8E8E93",
    fontSize: moderateScale(13),
  },

  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  score: {
    color: "#FFF",
    fontSize: moderateScale(46),
    fontWeight: "700",
  },

  badge: {
    backgroundColor: "#1A120B",
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(10),
  },

  badgeText: {
    color: "#FF6B00",
    fontSize: moderateScale(12),
    fontWeight: "600",
  },

  graphContainer: {
    height: moderateScale(50),
    justifyContent: "flex-end",
    marginTop: moderateScale(10),
  },

  graphLine: {
    height: 4,
    backgroundColor: "#FF6B00",
    borderRadius: moderateScale(5),
  },

  statsRow: {
    flexDirection: "row",
    gap: moderateScale(12),
    marginTop: moderateScale(15),
  },

  statCard: {
    flex: 1,
    backgroundColor: "#111111",
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1E1E1E",
  },

  statBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(10),
  },

  statNumber: {
    color: "#FFF",
    fontSize: moderateScale(32),
    fontWeight: "700",
  },

  lastDriveCard: {
    backgroundColor: "#111111",
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1E1E1E",
    marginTop: moderateScale(15),
  },

  lastDriveRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lastDriveDate: {
    color: "#FFF",
    marginTop: moderateScale(8),
  },

  lastDriveScore: {
    color: "#4ADE80",
    fontSize: moderateScale(30),
    fontWeight: "700",
  },

  excellentText: {
    color: "#4ADE80",
    fontWeight: "600",
  },

  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(20),
    marginBottom: moderateScale(12),
  },

  sectionTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "700",
  },

  viewAll: {
    color: "#FF6B00",
    fontWeight: "600",
  },

  recentCard: {
    backgroundColor: "#111111",
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1E1E1E",
    overflow: "hidden",
  },

  recentItem: {
    flexDirection: "row",
    padding: moderateScale(16),
  },

  recentDate: {
    flex: 1,
    color: "#FFF",
  },

  recentScore: {
    width: moderateScale(40),
    textAlign: "center",
    fontWeight: "700",
  },

  recentStatus: {
    width: moderateScale(80),
    textAlign: "right",
    fontWeight: "600",
  },

  startButton: {
    height: moderateScale(50),
    backgroundColor: "#FF6B00",
    borderRadius: moderateScale(16),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
    marginTop: moderateScale(25),
  },

  startButtonText: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "700",
  },
});
