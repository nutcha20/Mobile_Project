import { NavigationContainer ,Link } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // v.6
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import LoginScreen from "./screens/loginScreen";
import createSj from "./screens/createSubject";
import subject from "./screens/subjectList";
import lesson from "./screens/lessonPage";
import chapter from "./screens/chapterList";
import createCh from "./screens/createChapter";
import profile from "./screens/profile";

const Stack = createNativeStackNavigator();


const navigator = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginScreen}
                    options={{
                        title: "Login",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",

                    }}
                />
                <Stack.Screen name="profile" component={profile}
                    options={{
                        title: "Profile",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",

                    }}
                />
                <Stack.Screen name="s1" component={subject}
                    options={{
                        title: "My Subject",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        headerRight: () => (
                        
                        <Button title="user profile"/>
                        
                        )
                    }}
                />
                <Stack.Screen name="s2" component={createSj}
                    options={{
                        title: "Create Subject",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        headerRight: () => (<Button title="user profile" />)

                    }} />
                <Stack.Screen name="s3" component={chapter}
                    options={{
                        title: "Chapter List",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        headerRight: () => (<Button title="user profile" />)

                    }} />
                <Stack.Screen name="s4" component={createCh}
                    options={{
                        title: "Create Chapter",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        headerRight: () => (<Button title="user profile" />)

                    }} />
                <Stack.Screen name="s5" component={lesson}
                    options={{
                        title: "Chapter 1",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        headerRight: () => (<Button title="user profile" />)

                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default navigator
