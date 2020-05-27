import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const GoalForm = (props) => {
  console.log("props", props);
  return (
    <View style={styles.mainView}>
      <TextInput
        placeholder="Enter Course Goal"
        style={styles.inputForm}
        onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
      />
      <Button title="+" onPress={props.addGoalHandler} />
      <Button title="0" onPress={props.cleanListHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputForm: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});

export default GoalForm;