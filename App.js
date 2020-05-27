import React, { useState } from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalForm from "./components/GoalForm";
import Separator from "./components/Separator";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setEnteredGoal("");
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: enteredGoal,
      },
    ]);
    setShowModal(false);
  };

  const cleanListHandler = () => {
    setCourseGoals([]);
    setShowModal(false);
  };

  const handleDelete = (item) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((g) => g.id !== item.id);
    });
  };

  return (
    <View style={styles.mainView}>
      <Button title="Add a new goal" onPress={() => setShowModal(true)} />
      <Separator />
      <Button
        title="Remove All"
        onPress={cleanListHandler}
        disabled={courseGoals.length === 0}
      />
      <GoalForm
        showModal={showModal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        enteredGoal={enteredGoal}
        closeModal={() => setShowModal(false)}
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

const styles = StyleSheet.create({
  mainView: {
    padding: 30,
    flexDirection: "column",
  },
});
