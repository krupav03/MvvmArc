import React,{ useState } from "react";
// import useTodoViewModal  from "../view-modal/useTodoViewModal";
import { useNavigation } from '@react-navigation/native';
import useTodoViewModal from "../view-modal/useTodoModalView";

const useUpdateTodoController = () => {
  const navigation = useNavigation();
  const { updateTodo, deleteTodo } = useTodoViewModal();
  const [todoText, setTodoText] = useState("");

  const onChangeText = (text) => {
    setTodoText(text);
  };
  const onClickUpdate = () => {
    let payload = {
      title: todoText,
      id: todo.id,
    };
    updateTodo(payload);
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