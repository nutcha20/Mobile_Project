import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


const chapterList = ({ route, navigation }) => {
    const [value, setValue] = useState(null);
    const { role, name, lastname, major, degree, username } = route.params;
    useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.navigate('profile',{role: role, name: name, last: lastname, maj: major, dg: degree, username: username})} title="user profile" />
          ),
        });
      }, [navigation]);

    return (
        <View style={styles.fullContainer}>
            <View style={styles.navTextimg}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.userProfile}>
            </TouchableOpacity> */}
                <View>
                    <Text style={styles.headerWelcome}>Welcome</Text>
                    <Text style={styles.headerWelcome}>it63070048</Text>
                </View>
                <View>
                    <Image style={{ width: 210, height: 210 }} source={require("../assets/Dayflow Buy Online.png")}></Image>
                </View>
                {/* </View> */}
            </View>
            <Text style={styles.header}>Mobile Device Programming</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("s5", { role: role, name: name, lastname: lastname, major: major, degree: degree, username: username }); }}>
                    <Image style={styles.logo} source={require("../assets/icon.png")} />
                    <Text style={styles.description}>บทที่ 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("s5"); }}>
                    <Image style={styles.logo} source={require("../assets/icon.png")} />
                    <Text style={styles.description}>บทที่ 1</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.logo} source={require("../assets/icon.png")} />
                    <Text style={styles.description}>บทที่ 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.logo} source={require("../assets/icon.png")} />
                    <Text style={styles.description}>บทที่ 1</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.buttonCreate}>
                {role == "student" ?
                    <></>
                    :
                    <Button title="Create Chapter"
                        color="#937DC2"
                        onPress={() => { navigation.navigate("s4"); }}
                    />
                }
            </View>
        </View>
    );
};

export default chapterList;

const styles = StyleSheet.create({
    fullContainer: {
        flex: 2,
        backgroundColor: "#fffafd",
        flexDirection: "col",
        justifyContent: "flex-start",
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    container: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-evenly",

        flexWrap: "wrap",
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    row: {
        flexDirection: "row",
        margin: 15,
        backgroundColor: "white",
    },
    col: {
        flex: 2,
        flexDirection: "col",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 30,
        margin: 12,
        fontWeight: 'bold',
        color: "#937DC2"
    },
    logo: {
        width: 120,
        height: 127,
        marginBottom: 10

    },
    buttonCreate: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 12
    },

    button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#937DC2',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        margin: 10,


    },
    navTextimg: {
        width: '100%',
        height: '25%',
        flexDirection: "row",
        backgroundColor: "#927DC2",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerWelcome: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: "wrap",
        color: "white",
        marginLeft: 25 
    },
    // userProfile: {
    //     backgroundColor: "white",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: 100,
    //     height: 45,
    //     borderRadius: 50,
    //     marginLeft: 80,
    //     // marginTop: 30,
    //     position: "absolute"
    // },
});