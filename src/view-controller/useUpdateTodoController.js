import React, { useState } from "react";
// import useTodoViewModal  from "../view-modal/useTodoViewModal";
import { useNavigation } from "@react-navigation/native";
import useTodoViewModal from "../view-modal/useTodoModalView";

const useUpdateTodoController = (items) => {
  const navigation = useNavigation();
  const { updateTodo, deleteTodo, todos } = useTodoViewModal();
  const [todoText, setTodoText] = useState(items?.params?.todoItem?.title);
  const todo = todos.find((item) => item.id === items?.params?.todoItem?.id);
  const onChangeText = (text) => {
    setTodoText(text);
  };
  const onClickUpdate = () => {
    let payload = {
      title: todoText,
      id: todo.id,
    };
    updateTodo(payload);
    navigation.goBack();
  };

  const onClickDelete = () => {
    deleteTodo(todo.id);
    navigation.goBack();
  };

  return {
    onChangeText,
    todoText,
    onClickDelete,
    onClickUpdate,
  };
};

export default useUpdateTodoController;
