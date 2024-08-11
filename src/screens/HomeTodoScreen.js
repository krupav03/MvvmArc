import React from "react";
import { View, Text, FlatList, TouchableOpacity,StyleSheet } from "react-native";
// import TodoItem from './TodoItem';
import TodoItem from "../components/TodoItem";
import useHomeTodoController from "../view-controller/useHomeTodoController";
 function HomeTodoScreen() {
  const { todos, fetchTodo, onPressCreate, onPressTodoItem } =
    useHomeTodoController();
  const renderTodoList = ({item}) => {
    return (
      <TodoItem title={item.title} onPress={(item) => onPressTodoItem(item)} />
    );
  };
  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>

        <TouchableOpacity style={styles.btn} onPress={() => onPressCreate()}>
          <Text style={styles.btn}>Create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.todoList}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={renderTodoList}
        />
      </View>
    </View>
  );
}

export default HomeTodoScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background
    padding: 20,
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#007bff', // Blue background
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff', // White text
    fontSize: 16,
  },
  todoList: {
    flex: 1,
  },
});
