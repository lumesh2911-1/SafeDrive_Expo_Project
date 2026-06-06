import { Clock3, Filter, Route } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

const driveHistory = [
  {
    id: "1",
    date: "May 17, 2026",
    time: "08:45 PM",
    duration: "00:32:15",
    distance: "12.4 km",
    score: 92,
    status: "Excellent",
    color: "#4ADE80",
  },
  {
    id: "2",
    date: "May 16, 2026",
    time: "07:10 PM",
    duration: "00:28:10",
    distance: "10.2 km",
    score: 85,
    status: "Good",
    color: "#A3E635",
  },
  {
    id: "3",
    date: "May 15, 2026",
    time: "06:30 PM",
    duration: "00:25:40",
    distance: "8.7 km",
    score: 78,
    status: "Fair",
    color: "#FB923C",
  },
  {
    id: "4",
    date: "May 14, 2026",
    time: "05:45 PM",
    duration: "00:35:20",
    distance: "14.1 km",
    score: 95,
    status: "Excellent",
    color: "#4ADE80",
  },
  {
    id: "5",
    date: "May 13, 2026",
    time: "07:20 PM",
    duration: "00:30:05",
    distance: "11.3 km",
    score: 70,
    status: "Fair",
    color: "#FB923C",
  },
  {
    id: "6",
    date: "May 12, 2026",
    time: "06:15 PM",
    duration: "00:27:30",
    distance: "9.5 km",
    score: 88,
    status: "Good",
    color: "#A3E635",
  },
];

const tabs = ["All", "Best", "Latest", "Worst"];

export default function DriveScreen() {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredData = useMemo(() => {
    switch (selectedTab) {
      case "Best":
        return driveHistory.filter((item) => item.score >= 90);

      case "Latest":
        return [...driveHistory].sort((a, b) => Number(b.id) - Number(a.id));

      case "Worst":
        return driveHistory.filter((item) => item.score < 80);

      default:
        return driveHistory;
    }
  }, [selectedTab]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <View style={styles.leftSection}>
        <Text style={styles.date}>{item.date}</Text>

        <Text style={styles.time}>{item.time}</Text>

        <View style={styles.driveInfo}>
          <Clock3 size={14} color="#8E8E93" />
          <Text style={styles.infoText}>{item.duration}</Text>

          <Route size={14} color="#8E8E93" />
          <Text style={styles.infoText}>{item.distance}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={[styles.score, { color: item.color }]}>{item.score}</Text>

        <Text style={[styles.status, { color: item.color }]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.heading}>Drive History</Text>

        <TouchableOpacity>
          <Filter size={22} color="#FF6B00" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            activeOpacity={0.8}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* History List */}

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(20),
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No drives found</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(55),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(18),
  },

  heading: {
    color: "#FFF",
    fontSize: moderateScale(28),
    fontWeight: "700",
  },

  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#111111",
    borderRadius: moderateScale(14),
    padding: moderateScale(4),
    marginBottom: moderateScale(18),
  },

  tab: {
    flex: 1,
    height: moderateScale(38),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(10),
  },

  activeTab: {
    backgroundColor: "#FF6B00",
  },

  tabText: {
    color: "#8E8E93",
    fontSize: moderateScale(14),
    fontWeight: "600",
  },

  activeTabText: {
    color: "#FFF",
  },

  card: {
    backgroundColor: "#111111",
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    marginBottom: moderateScale(12),
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#1E1E1E",
  },

  leftSection: {
    flex: 1,
  },

  date: {
    color: "#FFF",
    fontSize: moderateScale(17),
    fontWeight: "600",
  },

  time: {
    color: "#8E8E93",
    marginTop: moderateScale(3),
    fontSize: moderateScale(13),
  },

  driveInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(10),
  },

  infoText: {
    color: "#B0B0B0",
    fontSize: moderateScale(13),
    marginLeft: moderateScale(5),
    marginRight: moderateScale(12),
  },

  rightSection: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: moderateScale(60),
  },

  score: {
    fontSize: moderateScale(28),
    fontWeight: "700",
  },

  status: {
    fontSize: moderateScale(13),
    fontWeight: "600",
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: moderateScale(50),
  },

  emptyText: {
    color: "#8E8E93",
    fontSize: moderateScale(16),
  },
});
