import React from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet} from "react-native";
import useNewTodoController from "../view-controller/useNewTodoController";

function NewTodoScreen() {
  const { todoText, onChangeText, onCreateButton } = useNewTodoController();
  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text>Todo</Text>
      </View>
      <View>
        <TextInput
          value={todoText}
          style={styles.input}
          placeholder="Enter Text..."
          onChangeText={(text) => onChangeText(text)}
        />

        <TouchableOpacity style={styles.btn} onPress={() => onCreateButton()}>
          <Text>create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default NewTodoScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background color
    padding: 20,
  },
  headingView: {
    marginBottom: 20,
    alignItems: 'center', // Center the heading text
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formView: {
    flex: 1,
    justifyContent: 'center', // Center the form content vertically
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff', // White background for the input field
  },
  btn: {
    backgroundColor: '#28a745', // Green background color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff', // White text color
    fontSize: 16,
  },
});