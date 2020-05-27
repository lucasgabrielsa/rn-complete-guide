import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const GoalForm = (props) => {
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.mainView}>
        <TextInput
          placeholder="Enter Course Goal"
          style={styles.inputForm}
          onChangeText={props.goalInputHandler}
          value={props.enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color="red" onPress={props.closeModal} />
          <Button title="ADD GOAL" onPress={props.addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputForm: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
});

export default GoalForm;
