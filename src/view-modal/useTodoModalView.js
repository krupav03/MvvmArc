import { useDispatch, useSelector } from "react-redux";
import { TodoAction } from "../store/todoSlice";
 const useTodoViewModal = () => {
  const dispatch = useDispatch();
  const { fetchTodo, todos } = useSelector((state) => state.todo);
  const { createTodo, deleteTodo, updateTodo } = TodoAction;
  return {
    fetchTodo,
    todos,
    createTodo: (title) => dispatch(createTodo({ title })),
    updateTodo: (payload) => dispatch(updateTodo({ payload })),
    deleteTodo: (id) => dispatch(deleteTodo({ id })),
  };
};
export default useTodoViewModal;