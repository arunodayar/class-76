import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class IsslocationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>IsslocationScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    allignItems: "center",
  },
});
