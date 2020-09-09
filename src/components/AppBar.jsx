import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Tab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    padding: 15,
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log("lulll");
          }}
        >
          <View>
            <Tab title="Repositories" />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default AppBar;
