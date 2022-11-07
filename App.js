import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/loginScreen";
import create from "./app/createPage";
import subject from "./app/subjectList";
import lesson from "./app/lessonPage";
import chapter from "./app/chapterList";
import createCh from "./app/createChapter";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="S1">
      <Stack.Screen name="login" component={LoginScreen}
          options={{
            title: "Login",
            headerStyle: { backgroundColor: "#937DC2" },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen name="s1" component={subject}
          options={{
            title: "My Subject",
            headerStyle: { backgroundColor: "#937DC2" },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen name="s2" component={create}
          options={{
            title: "Create Subject",
            headerStyle: { backgroundColor: "#937DC2" },
            headerTintColor: "white"

          }} />
          <Stack.Screen name="s3" component={chapter}
          options={{
            title: "Chapter List",
            headerStyle: { backgroundColor: "#937DC2" },
            headerTintColor: "white"

          }} />
          <Stack.Screen name="s4" component={createCh}
          options={{
            title: "Create Chapter",
            headerStyle: { backgroundColor: "#937DC2" },
            headerTintColor: "white"

          }} />
          <Stack.Screen name="s5" component={lesson}
          options={{
            title: "Chapter 1",
            headerStyle: { backgroundColor: "#937DC2" },
            headerTintColor: "white"

          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
