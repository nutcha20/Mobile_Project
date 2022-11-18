import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { auth, db } from '../database/firebase'

const profile = ({ route, navigation }) => {
    const { role, name, last, maj, dg, username } = route.params;
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("login")
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <View style={styles.wallpaper}>
                <Image style={{ width: 393, height: 209, marginTop: 20 }} source={require("../assets/Cityscapes Downtown.png")}></Image>

            </View>
            <View style={styles.profile_data}>

                <View style={styles.data}>
                    <View>
                        <Text style={styles.header}>{username}</Text>
                        <Text style={styles.subHeader}>Name</Text>
                        <TextInput
                            style={styles.textinput}
                            value={name}
                            editable={false}
                        />
                        <Text style={styles.subHeader}>Lastname</Text>
                        <TextInput
                            style={styles.textinput}
                            value={last}
                            editable={false}
                        />
                        {role == "student" ?
                            <Text style={styles.subHeader}>Major</Text>
                            :
                            <Text style={styles.subHeader}>Degree</Text>
                        }

                        {role == "student" ?
                            <TextInput
                                style={styles.textinput}
                                value={maj}
                                editable={false}
                            />
                            :
                            <TextInput
                                style={styles.textinput}
                                value={dg}
                                editable={false}
                            />
                        }
                        <View style={styles.buttonView}>

                            <TouchableOpacity
                                onPress={handleSignOut}
                                style={styles.button}
                            >
                                <Text style={[{ color: "white" }]}>Log out</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={styles.circle}>
                    <Image style={{ width: 150, height: 150 }} source={require("../assets/Dayflow Avatar.png")}></Image>
                </View>
            </View>


            {/* <Text>Email: {auth.currentUser?.email}</Text>
            <Text>Profile</Text>
            <TouchableOpacity
                onPress={handleSignOut}
            >
                <Text>Sign out</Text>
            </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffafd",
        width: '100%',
        height: '100%',
        flex: 1,
        justifycontent: "center",
        alignItem: "center"
    },
    wallpaper: {
        width: '100%',
        height: '30%',
        backgroundColor: "#927DC2",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: "#927DC2",
        position: "absolute",
        top: -125,
        justifyContent: "center",
        alignItems: "center",
    },
    data: {
        width: '100%',
        backgroundColor: "white",
        paddingTop: 60,
        paddingBottom: 50,
        borderColor: '#C8B1DC',
        borderWidth: 2,
        borderRadius: 15
    },
    profile_data: {
        width: '100%',
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor: "#fffafd",
        padding: 20
    },
    textinput: {
        height: 50,
        margin: 12,
        // borderWidth: 1,
        padding: 10,
        color: "#927DC2",
        backgroundColor: "#fff",
        borderRadius: 15,
        color: "#937DC2",
        borderColor: '#C8B1DC',
        borderWidth: 2,
    },
    header: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 40,
        color: "#927DC2"
    },
    subHeader: {
        paddingLeft: 15,
        color: "#927DC2"
    },
    button: {
        backgroundColor: "#927DC2",
        // color: "#927DC2",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 45,
        borderRadius: 15,
        marginTop: 12
    },
    buttonView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItrms: "flex-end",
        marginRight: 12
    }


});
export default profile;