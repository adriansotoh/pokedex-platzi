//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { POKEMON_MAX_STATS } from "../../utils/constants";

// create a component
const Stats = (props) => {
  const { stats } = props;
  const barStyles = (number, ability) => {
    const percentage = (100 * number) / POKEMON_MAX_STATS[ability];
    const color = percentage > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${percentage}%`,
    };
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((stat, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{stat.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stat.base_stat}</Text>
            <View style={styles.bgBar}>
              <View
                style={[styles.bar, barStyles(stat.base_stat, stat.stat.name)]}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginTop: 40, marginBottom: 80 },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
    textTransform: "capitalize",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    backgroundColor: "red",
    width: "100%",
    height: 5,
    borderRadius: 20,
  },
});

//make this component available to the app
export default Stats;
