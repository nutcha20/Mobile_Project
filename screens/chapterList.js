import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../database/firebase';
import { LinearGradient } from 'expo-linear-gradient';

const dbSub = collection(db, "subject");
var keepChapter = [];
updateDbSub();

function updateDbSub() {
    keepChapter = [];
    getDocs(dbSub).then((x) => x.docs.forEach((doc) => keepChapter.push(doc.data())))
    console.log(keepChapter)
}

const chapterList = ({ route, navigation }) => {
    var itemSubject = [];
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7
    const [value, setValue] = useState(null);
    const { role, name, lastname, major, degree, username, idpickSuj, uid } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('profile', { role: role, name: name, last: lastname, maj: major, dg: degree, username: username })} style={[{ marginRight: 20, }]}>
                    <Image style={{ width: 50, height: 50 }} source={require("../assets/icons8-male-user-96.png")}></Image>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    console.log(uid)
    var docsSubject = keepChapter.filter(doc => { return doc.idSubject == idpickSuj })
    // const [newdata] = useState([{key: "spacer-left"}, ...docsSubject[0].chapter, {key: "spacer-left"}]);
    // const onScroll = useAnimatedScrollHandler({
    //     onscroll: event => {
    //         x.value = event.contentOffset.x
    //     },
    // })
    console.log(docsSubject[0].chapter)
    docsSubject[0].chapter.forEach((doc) => {
        itemSubject.push(<TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("s5", {
                role: role,
                name: name,
                lastname: lastname,
                major: major,
                degree: degree,
                username: username,
                idpickSuj: idpickSuj,
                idCh: doc.idChapter
            });
        }}>
            <Image style={{ width: '100%', height: "60%", marginBottom: 5, backgroundColor: "#C8B1DC", borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={require("../assets/Dayflow Buy Online.png")}></Image>
            <View style={[{ margin: 10 }]}>
                <Text style={[{ fontSize: 40, fontWeight: 'bold', color: "#3E00CD" }]}>Chapter {doc.idChapter}</Text>
                <Text style={[{ fontSize: 15, fontWeight: 'bold', color: "#3E00CD" }]}>{doc.name}</Text>
            </View>
        </TouchableOpacity>
        )
    })
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={['#927DC2', '#C8B1DC', 'white']}
            style={styles.fullContainer}>
            {/* <View style={styles.fullContainer}> */}
                <View style={styles.navTextimg}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.userProfile}>
            </TouchableOpacity> */}
                    <View>
                        <Text style={styles.headerWelcome1}>Let's Learn</Text>
                        <Text style={styles.headerWelcome2}>{docsSubject[0].nameSubject}</Text>
                        <Text style={styles.headerWelcome3} numberOfLines={3}>
                            {docsSubject[0].details}
                        </Text>
                    </View>
                    {/* <View>
                    <Image style={{ width: 190, height: 190 }} source={require("../assets/Dayflow Buy Online.png")}></Image>
                </View> */}
                    {/* </View> */}
                </View>
                {/* <Text style={styles.header}>Mobile Device Programming</Text> */}
                <ScrollView
                    horizontal
                    showHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThorttle={16}
                    snapToInterval={SIZE}
                    decelerationRate="fast"
                >
                    {itemSubject}

                    {/* <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("s5"); }}>
                    <Image style={styles.logo} source={require("../assets/icon.png")} />
                    <Text style={styles.description}>บทที่ 1</Text>
                </TouchableOpacity> */}
                </ScrollView >

                {/* <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.logo} source={require("../assets/icon.png")} />
                    <Text style={styles.description}>บทที่ 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.logo} source={require("../assets/icon.png")} />
                    <Text style={styles.description}>บทที่ 1</Text>
                </TouchableOpacity>
            </View> */}


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
            {/* </View> */}
        </LinearGradient>
    );
};

export default chapterList;

const styles = StyleSheet.create({
    fullContainer: {
        flex: 2,
        // backgroundColor: "#937DC2",
        flexDirection: "col",
        justifyContent: "flex-start",
    },
    // placeholderStyle: {
    //     fontSize: 16,
    // },
    // selectedTextStyle: {
    //     fontSize: 16,
    // },
    // iconStyle: {
    //     width: 20,
    //     height: 20,
    // },
    // inputSearchStyle: {
    //     height: 40,
    //     fontSize: 16,
    // },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",

        flexWrap: "wrap",
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    row: {
        flexDirection: "column",
        margin: 15,
        backgroundColor: "white",
    },
    col: {
        flex: 1,
        flexDirection: "column",
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
        height: 120,
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
        // padding: 20,
        // marginBottom: 20,
        shadowColor: '#937DC2',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        width: 280,
        height: '90%',
        margin: 20,


    },
    navTextimg: {
        width: '100%',
        height: '25%',
        flexDirection: "row",
        // backgroundColor: "#927DC2",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerWelcome1: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: "wrap",
        color: "white",
        marginLeft: 25
    },
    headerWelcome2: {
        fontSize: 35,
        fontWeight: 'bold',
        flexWrap: "wrap",
        color: "white",
        marginLeft: 25
    },
    headerWelcome3: {
        fontSize: 15,
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