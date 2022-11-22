import { NavigationContainer ,Link } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import LoginScreen from "./screens/loginScreen";
import createSj from "./screens/createSubject";
import subject from "./screens/subjectList";
import lesson from "./screens/lessonPage";
import chapter from "./screens/chapterList";
import createCh from "./screens/createChapter";
import profile from "./screens/profile";
import Start from "./screens/startScreen"
const Stack = createNativeStackNavigator();


const navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="start" component={Start}
                    options={{
                        headerShown: false,
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",

                    }}
                />
                <Stack.Screen name="login" component={LoginScreen}
                    options={{
                        headerShown: false,
                        title: "Login",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",

                    }}
                />
                <Stack.Screen name="profile" component={profile}
                    options={{
                        title: "Back",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",

                    }}
                />
                <Stack.Screen name="s1" component={subject}
                    options={{
                        headerShown: false,
                        title: "Back",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        // headerRight: () => (
                        
                        // <Button title="user profile"/>
                        
                        // )
                    }}
                />
                <Stack.Screen name="s2" component={createSj}
                    options={{
                        title: "Back",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        // headerRight: () => (<Button title="user profile" />)

                    }} />
                <Stack.Screen name="s3" component={chapter}
                    options={{
                        title: "Back",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        // headerRight: () => (<Button title="user profile" />)

                    }} />
                <Stack.Screen name="s4" component={createCh}
                    options={{
                        title: "Back",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        // headerRight: () => (<Button title="user profile" />)

                    }} />
                <Stack.Screen name="s5" component={lesson}
                    options={{
                        title: "Back",
                        headerStyle: { backgroundColor: "#937DC2" },
                        headerTintColor: "white",
                        // headerRight: () => (<Button title="user profile" />)

                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default navigator
