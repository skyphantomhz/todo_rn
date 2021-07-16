import React, { Component } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { finish, remove } from "../taskSlice";

export default function Task(props) {
  const { content, finished, id } = props.task;
  const dispatch = useDispatch();
  let leadingIcon = "clockcircle";
  let leadingColor = "yellow";
  if (finished) {
    leadingIcon = "checkcircle";
    leadingColor = "green";
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => dispatch(finish({ id: id }))}
      >
        <AntDesign name={leadingIcon} size={24} color={leadingColor} />
      </Pressable>
      <Text style={styles.text}>{content}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          const removeAction = remove({ id: id });
          console.log(removeAction);
          dispatch(removeAction);
        }}
      >
        <AntDesign name="closecircleo" size={24} color="red" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "grey",
    borderRadius: 8,
  },

  text: {
    flex: 1,
    color: "white",
    left: 8,
    alignSelf: "center",
  },

  button: {
    padding: 4,
  },
});
