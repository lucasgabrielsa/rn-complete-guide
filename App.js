import React, { useState } from "react";
import { View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalForm from "./components/GoalForm";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: enteredGoal,
      },
    ]);
  };

  const cleanListHandler = () => {
    setCourseGoals([]);
  };

  const handleDelete = (item) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((g) => g.id !== item.id);
    });
  };

  return (
    <View style={{ padding: 30 }}>
      <GoalForm
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        cleanListHandler={cleanListHandler}
        enteredGoal={enteredGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem item={itemData.item} onDelete={handleDelete} />
        )}
      />
    </View>
  );
}
