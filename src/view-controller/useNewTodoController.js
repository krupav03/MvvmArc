import React,{ useState } from "react";
import { screenMap } from "../navigation/AppContainer";
import { useNavigation } from '@react-navigation/native';
import useTodoViewModal from "../view-modal/useTodoModalView";

const useNewTodoController = () => {
  const navigation = useNavigation();
  const [todoText, setTodoText] = useState([]);
  const { createTodo } = useTodoViewModal();
  const onChangeText = (text) => {
    setTodoText(text);
  };
  const onCreateButton = () => {
    createTodo(todoText);
    navigation.navigate(screenMap.HomeTodo);
  };
  return {
    todoText,
    onChangeText,
    onCreateButton,
  };
};

export default useNewTodoController;