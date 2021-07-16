import React from "react";
import { createReducer } from "@reduxjs/toolkit";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import store from "./app/store";
import Header from "./app/components/header";
import Tasks from "./app/components/tasks";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header style={styles.header} />
        <Tasks />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
