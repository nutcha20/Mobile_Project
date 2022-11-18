import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import React, { useState , useEffect} from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { render } from "react-dom";
import { db } from '../database/firebase';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
let itemSubject = [];


const subjectList = ({ route, navigation }) => {
    var keepsubject = [];
    const { role, name, lastname, major, degree, username, docc } = route.params;
    keepsubject.push(docc);
    const [value, setValue] = useState(null);
    // keepsubject.forEach((item, index) => {
    //     itemSubject.push(<TouchableOpacity style={[styles.row, { padding: 10 }]} onPress={() => {
    //         navigation.navigate("s3", {
    //             role: role,
    //             name: name,
    //             lastname: lastname,
    //             major: major,
    //             degree: degree,
    //             username: username
    //         });
    //     }}>
    //         <Image key={index} style={styles.logo} source={{ uri: item.image }}></Image>
    //         <View style={styles.col}>
    //             <Text style={styles.header}> {item.nameSubject}</Text>
    //             <Text numberOfLines={3} style={[{ color: "#937DC2", marginLeft: 5}]}>
    //                 {item.details}
    //             </Text>

    //         </View>
    //     </TouchableOpacity>)
    // })
    // console.log(docc)
    
    // console.log(keepsubject);
    return (

        <View style={styles.fullContainer} >
            {/* <View style={styles.navBar}> */}
            <View style={styles.navTextimg}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.userProfile}>
            </TouchableOpacity> */}
                <View>
                    <Text style={styles.headerWelcome}>Welcome</Text>
                    <Text style={styles.headerWelcome}>it63070048</Text>
                </View>
                <View>
                    <Image style={{ width: 220, height: 220, marginTop: 30 }} source={require("../assets/Dayflow Best Friends.png")}></Image>
                    <TouchableOpacity onPress={() => navigation.navigate('profile', { role: role, name: name, last: lastname, maj: major, dg: degree, username: username })} style={styles.userProfile}>
                        <Text>it63070048</Text>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
            </View>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Filter"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
            />
            <Text style={styles.subjectHeader}>Your Subject</Text>
            <View style={styles.container}>
                <ScrollView>

                   {/* {itemSubject} */}
                    {/* <TouchableOpacity style={styles.row}>
                        <Image style={styles.logo} source={require("../assets/react_native.png")} />
                        <View style={[styles.col, { padding: 10 }]}>
                            <Text style={styles.header}>Mobile Device Programming</Text>
                            <Text numberOfLines={3} style={[{ color: "#937DC2" }]}>
                                Course about how to write the Mobile App in iOS and Android by using
                                React-Native.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Image style={styles.logo} source={require("../assets/react_native.png")} />
                        <View style={[styles.col, { padding: 10 }]}>
                            <Text style={styles.header}>Mobile Device Programming</Text>
                            <Text numberOfLines={3} style={[{ color: "#937DC2" }]}>
                                Course about how to write the Mobile App in iOS and Android by using
                                React-Native.
                            </Text>
                        </View>
                    </TouchableOpacity> */}
                </ScrollView>

            </View>
            <View style={styles.buttonCreate}>
                {role == "student" ?
                    null
                    :
                    <Button title="Add Subject"
                        color="#937DC2"
                        onPress={() => { navigation.navigate("s2") }}
                    />
                }
            </View>
        </View >



    );
};

export default subjectList;

const styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
        backgroundColor: "#fffafd",
        flexDirection: "col",
        justifyContent: "flex-start",
    },
    dropdown: {
        margin: 14,
        height: 50,
        borderColor: '#C8B1DC',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 5,
    },
    icon: {
        marginRight: 5,
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
        backgroundColor: "#C8B1DC",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5,
        margin: 12,
        borderRadius: 20
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        margin: 8,
        backgroundColor: "white",
        borderRadius: 20,
        // borderColor: "#937DC2",
        // borderWidth: 1.5
        shadowColor: "#937DC2",
        shadowRadius: 4.50,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        shadowOpacity: 5,

    },
    col: {
        flex: 2,
        flexDirection: "col",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 15
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: "wrap",
        color: "#937DC2"
    },
    logo: {
        // flexDirection: "row",
        // alignItems: "center",
        width: 110,
        height: 110,
        borderRadius: 20

    },
    buttonCreate: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 12,
        marginBottom: 12
    },
    navBar: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#927DC2",
        justifyContent: "space-around",

    },
    userProfile: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 45,
        borderRadius: 50,
        marginLeft: 80,
        marginTop: 16,
        position: "absolute"
    },
    subjectHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: "wrap",
        color: "#937DC2",
        marginLeft: 12
    },
    navTextimg: {
        width: '100%',
        height: '30%',
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
    }
});