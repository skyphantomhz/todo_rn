import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";

import { add } from "../taskSlice";

export default function Header() {
  const [text, onChangeText] = React.useState(null);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContent}
        placeholder="What you need todo?"
        onChangeText={onChangeText}
        value={text}
      />
      <View style={{ width: 8 }} />
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(add({ content: text }));
        }}
      >
        <Text style={styles.text}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexShrink: 1,
    marginHorizontal: 16,
    flexShrink: 1,
    alignItems: "baseline",
    top: 24,
  },
  inputContent: {
    height: 40,
    alignSelf: "center",
    flex: 1,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,

    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
