import { AlertTriangle, Gauge, Pause, Route } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Svg, { Circle } from "react-native-svg";

export default function StartDriveScreen() {
  const score = 96;
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const progress = score / 100;

  const events = [
    {
      id: 1,
      title: "Harsh Brake Detected",
      time: "10:23:34 AM",
    },
    {
      id: 2,
      title: "Sharp Turn Detected",
      time: "10:20:11 AM",
    },
    {
      id: 3,
      title: "Acceleration Detected",
      time: "10:18:45 AM",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <View style={styles.header}>
        <View>
          <Text style={styles.driving}>🟢 Driving...</Text>

          <Text style={styles.timer}>00:12:45</Text>
        </View>

        <TouchableOpacity style={styles.pauseButton}>
          <Pause size={22} color="#FF6B00" />
        </TouchableOpacity>
      </View>

      {/* Circular Score */}

      <View style={styles.chartContainer}>
        <Svg width={260} height={260}>
          <Circle
            cx="130"
            cy="130"
            r={radius}
            stroke="#1E1E1E"
            strokeWidth="16"
            fill="none"
          />

          <Circle
            cx="130"
            cy="130"
            r={radius}
            stroke="#FF6B00"
            strokeWidth="16"
            fill="none"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={circumference * (1 - progress)}
            strokeLinecap="round"
            rotation="-90"
            origin="130,130"
          />
        </Svg>

        <View style={styles.centerContent}>
          <Text style={styles.score}>{score}</Text>

          <Text style={styles.scoreText}>Excellent</Text>
        </View>
      </View>

      {/* Stats */}

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Route size={24} color="#FF6B00" />

          <Text style={styles.statTitle}>Distance</Text>

          <Text style={styles.statValue}>12.4 km</Text>
        </View>

        <View style={styles.statCard}>
          <Gauge size={24} color="#FF6B00" />

          <Text style={styles.statTitle}>Avg Speed</Text>

          <Text style={styles.statValue}>48 km/h</Text>
        </View>
      </View>

      {/* Recent Events */}

      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Recent Events</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        {events.map((item) => (
          <View key={item.id} style={styles.eventItem}>
            <View style={styles.eventLeft}>
              <AlertTriangle size={18} color="#FF6B00" />

              <Text style={styles.eventTitle}>{item.title}</Text>
            </View>

            <Text style={styles.eventTime}>{item.time}</Text>
          </View>
        ))}
      </View>

      {/* Live Sensors */}

      <Text style={styles.sectionTitle}>Live Sensors</Text>

      <View style={styles.sensorRow}>
        <View style={styles.sensorCard}>
          <Text style={styles.sensorTitle}>Accelerometer</Text>

          <Text style={styles.sensorValue}>0.12</Text>

          <Text style={styles.sensorUnit}>m/s²</Text>
        </View>

        <View style={styles.sensorCard}>
          <Text style={styles.sensorTitle}>Gyroscope</Text>

          <Text style={styles.sensorValue}>0.45</Text>

          <Text style={styles.sensorUnit}>rad/s</Text>
        </View>

        <View style={styles.sensorCard}>
          <Text style={styles.sensorTitle}>Motion</Text>

          <Text style={styles.sensorValue}>1.21</Text>

          <Text style={styles.sensorUnit}>m/s²</Text>
        </View>
      </View>

      {/* End Drive */}

      <TouchableOpacity activeOpacity={0.8} style={styles.endButton}>
        <Text style={styles.endText}>End Drive</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    paddingTop: StatusBar.currentHeight,
  },

  content: {
    padding: moderateScale(16),
    paddingBottom: moderateScale(100),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(20),
  },

  driving: {
    color: "#4ADE80",
    fontSize: moderateScale(18),
    fontWeight: "700",
  },

  timer: {
    color: "#FFF",
    fontSize: moderateScale(34),
    fontWeight: "700",
    marginTop: 4,
  },

  pauseButton: {
    width: moderateScale(52),
    height: moderateScale(52),
    borderRadius: moderateScale(26),
    borderWidth: 2,
    borderColor: "#FF6B00",
    justifyContent: "center",
    alignItems: "center",
  },

  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(20),
  },

  centerContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  score: {
    color: "#FFF",
    fontSize: moderateScale(52),
    fontWeight: "700",
  },

  scoreText: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "600",
  },

  statsRow: {
    flexDirection: "row",
    gap: moderateScale(12),
    marginBottom: moderateScale(20),
  },

  statCard: {
    flex: 1,
    backgroundColor: "#111111",
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1E1E1E",
    padding: moderateScale(16),
    alignItems: "center",
  },

  statTitle: {
    color: "#8E8E93",
    marginTop: 8,
  },

  statValue: {
    color: "#FFF",
    fontSize: moderateScale(24),
    fontWeight: "700",
    marginTop: 4,
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "700",
    marginBottom: 12,
  },

  viewAll: {
    color: "#FF6B00",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#111111",
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1E1E1E",
    marginBottom: moderateScale(20),
  },

  eventItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: moderateScale(14),
  },

  eventLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },

  eventTitle: {
    color: "#FFF",
    fontSize: moderateScale(14),
  },

  eventTime: {
    color: "#8E8E93",
    fontSize: moderateScale(12),
  },

  sensorRow: {
    flexDirection: "row",
    gap: moderateScale(10),
  },

  sensorCard: {
    flex: 1,
    backgroundColor: "#111111",
    borderRadius: moderateScale(14),
    borderWidth: 1,
    borderColor: "#1E1E1E",
    padding: moderateScale(12),
    alignItems: "center",
  },

  sensorTitle: {
    color: "#8E8E93",
    fontSize: moderateScale(11),
  },

  sensorValue: {
    color: "#FFF",
    fontSize: moderateScale(24),
    fontWeight: "700",
    marginVertical: 4,
  },

  sensorUnit: {
    color: "#8E8E93",
    fontSize: moderateScale(11),
  },

  endButton: {
    height: moderateScale(56),
    borderWidth: 2,
    borderColor: "#FF6B00",
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(24),
  },

  endText: {
    color: "#FF6B00",
    fontSize: moderateScale(18),
    fontWeight: "700",
  },
});
