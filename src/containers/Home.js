import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Todos from "../components/Todos";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "dasdas",
    header: false
  });

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Todos todos={["todo"]} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
