import React from "react";
import { View, TextInput, Text, TouchableOpacity,StyleSheet } from "react-native";
import useNewTodoController from "../view-controller/useNewTodoController";
import useUpdateTodoController from "../view-controller/useUpdateTodoController";
import { useRoute } from '@react-navigation/native'; 

function UpdateTodoScreen(props) {
  const route = useRoute();
  const { onChangeText, onClickDelete, onClickUpdate, todoText } =
    useUpdateTodoController(route.params);
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
        <TouchableOpacity style={styles.btn} onPress={() => onClickUpdate()}>
          <Text>update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => onClickDelete()}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default UpdateTodoScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background
    padding: 20,
  },
  headingView: {
    marginBottom: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formView: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff', // White background for input
  },
  btn: {
    backgroundColor: '#007bff', // Blue background
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#fff', // White text
    fontSize: 16,
  },
});

