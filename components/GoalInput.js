import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [input, changeInput] = useState("");

  const inputHandler = (text) => {
    changeInput(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(input);
    changeInput("");
  };

  return (
    <Modal visible={props.see} animationType="slide">
      <View style={styles.inputView}>
        <TextInput
          placeholder="Add Goal"
          style={styles.text}
          onChangeText={inputHandler}
          value={input}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
