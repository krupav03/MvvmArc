import { screenMap } from "../navigation/AppContainer";
// import { useTodoViewModal } from "../view-modal/useTodoViewModal";
import { useNavigation } from '@react-navigation/native';
import useTodoViewModal from "../view-modal/useTodoModalView";

const useHomeTodoController = () => {
  const { todos, fetchTodo } = useTodoViewModal();
  const navigation = useNavigation();

  const onPressTodoItem = (todoItem) => {
    navigation.navigate(screenMap.UpdateTodo, { todoItem });
  };
  const onPressCreate = () => {
    navigation.navigate(screenMap.NewTodo);
  };
  return {
    todos,
    fetchTodo,
    onPressCreate,
    onPressTodoItem,
  };
};

export default useHomeTodoController;