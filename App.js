import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import create from "./app/createPage";
import subject from "./app/subjectList"
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="S1">
        <Stack.Screen name="s1" component={subject}
          options={{
            title: "My Subject",
            headerStyle: { backgroundColor: "#3DAEFF" },
          }}
        />
        <Stack.Screen name="s2" component={create}
          options={{
            title: "Create Subject",
            headerStyle: { backgroundColor: "#3DAEFF" },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
