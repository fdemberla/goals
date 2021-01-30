import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [mode, setMode] = useState(false);

  const addGoal = (text) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: text },
    ]);
    setMode(false);
  };

  const cancelButton = () => {
    setMode(false);
  };

  const removeGoal = (goalId) => {
    setGoals((current) => {
      return current.filter((goal) => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add a New Goal" onPress={() => setMode(true)} />
      <GoalInput see={mode} onAddGoal={addGoal} onCancel={cancelButton} />
      {goals.length < 1 ? (
        <Text>
          Click on Add a New Goal to start adding items to your list of goals.
        </Text>
      ) : (
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.key}
              onDelete={removeGoal}
              title={itemData.item.value}
            />
          )}
        ></FlatList>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
