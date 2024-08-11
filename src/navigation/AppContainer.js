import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeTodoScreen from "../screens/HomeTodoScreen";
import NewTodoScreen from "../screens/NewTodoScreen";
import UpdateTodoScreen from "../screens/UpdateTodoScreen";

const Stack = createStackNavigator();
export const screenMap = {
  HomeTodo: "HomeTodo",
  NewTodo: "NewTodo",
  UpdateTodo: "UpdateTodo",
};

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenMap.HomeTodo} component={HomeTodoScreen} />
        <Stack.Screen name={screenMap.NewTodo} component={NewTodoScreen} />
        <Stack.Screen
          name={screenMap.UpdateTodo}
          component={UpdateTodoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer;