import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


const chapterList = ({ navigation }) => {
    const [value, setValue] = useState(null);

    return (
        <View style={styles.fullContainer}>
            <Text style={styles.header}>Mobile Device Programming</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
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
                <Button title="Create Chapter"
                    onPress={() => { navigation.navigate("s4"); }} />
            </View>
        </View>
    );
};

export default chapterList;

const styles = StyleSheet.create({
    fullContainer: {
        flex: 2,
        backgroundColor: "#C7E7FF",
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
        backgroundColor: "#C7E7FF",
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
        fontWeight: 'bold'
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
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        margin: 10,
        
        
    }
});