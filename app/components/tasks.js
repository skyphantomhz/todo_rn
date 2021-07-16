import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList, StyleSheet, View } from "react-native";

import Task from "./task";

export default function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);
  const renderItem = ({ item }) => <Task task={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 24,
    width: "100%",
  },
});
