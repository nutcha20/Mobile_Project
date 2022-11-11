import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

const subjectList = ({ route, navigation }) => {
    const { role, login } = route.params;
    const [value, setValue] = useState(null);
 

    // useEffect(() => {
    //     // Use `setOptions` to update the button that we previously specified
    //     // Now the button includes an `onPress` handler to update the count
    //     navigation.setOptions({
    //       headerRight: () => (
    //         <Button onPress={() => navigation.navigate('profile')} title="user profile" />
    //       ),
    //     });
    //   }, [navigation]);

    return (
        
         <View style={styles.fullContainer} >
            <View style={styles.goProfile}>
                <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.userProfile}>
                    Tezt
                </TouchableOpacity>
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
            <View style={styles.container}>
                <TouchableOpacity style={styles.row} onPress={() => { navigation.navigate("s3", { role: role }); }}>
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
                </TouchableOpacity>
                
            </View>
            <View style={styles.buttonCreate}>
                {role == "student" ?
                    <></>
                    :
                    <Button title="Create Subject"
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
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        backgroundColor: "white",
        padding: 5
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
        // flex: 3,
        backgroundColor: "#C8B1DC",
        flexDirection: "col",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 8,
        margin: 20
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        margin: 12,
        backgroundColor: "white",
        borderRadius: 20,
        paddingLeft: 5,
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
        justifyContent: "center",
        alignItems: "center",
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
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 12
    },
    goProfile:{
        flex: 3,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        backgroundColor: "blue"
    },
    userProfile: {
        backgroundColor: "red"
    }
});