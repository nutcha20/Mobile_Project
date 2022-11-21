import React, { useState, useEffect, useInsertionEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../database/firebase';
// import VideoPlayer from 'react-native-video';

const dbSub = collection(db, "subject");
var keepChapter = [];
updateDbSub();



function updateDbSub() {
  
  keepChapter = [];
  getDocs(dbSub).then((x) => x.docs.forEach((doc) => keepChapter.push(doc.data())))
  console.log(keepChapter)
}
const createSubject = ({ navigation, route }) => {
  var itemSubject = [];

  // const [value, setValue] = useState(null);
  const { role, name, lastname, major, degree, username, idpickSuj, idCh } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('profile', { role: role, name: name, last: lastname, maj: major, dg: degree, username: username })} style={[{ marginRight: 20, }]}>
          <Image style={{ width: 50, height: 50 }} source={require("../assets/icons8-male-user-96.png")}></Image>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  console.log(idpickSuj)
  var docsSubject = keepChapter.filter(doc => { return doc.idSubject == idpickSuj })[0]
  console.log(docsSubject)
  // var docsLesson = docsSubject[].chapter.filter(doc => { return doc.idChapter == idCh })
  var ChapterPickList = docsSubject.chapter[parseInt(idCh) - 1];
  itemSubject.push(
    <View style={styles.row}>
      <View style={[styles.col, { padding: 30 }]}>
        <Text style={styles.header}>Chapter {ChapterPickList.idChapter}</Text>
        <Text style={styles.chapterName}>{ChapterPickList.name}</Text>
        <Text style={[{ fontSize: 20, color: "#3E00CD" }]} numberOfLines={3}>
          {ChapterPickList.detail}
        </Text>
        <View style={styles.buttonAdd}>
          <Button title="PDF" style={styles.add} color="red" />
          <Text style={[{ fontSize: 20, color: "#3E00CD" }]}>Week{ChapterPickList.idChapter}.pdf</Text>
        </View>
        <Image style={{ width: "100%", height: "50%", marginTop: 340 }} source={require("../assets/Dayflow Sitting.png")}></Image>
        {/* <VideoPlayer
          video={{ uri: ChapterPickList.vdo}}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{ uri: 'https://www.flaticon.com/free-animated-icon/video-player_8121299?term=player&page=1&position=1&page=1&position=1&related_id=8121299&origin=search' }}
        /> */}
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {itemSubject}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#937DC2",

  },
  textinput: {
    height: 50,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    color: "gray",
    // backgroundColor: "ิblue",
    borderRadius: 15
  },
  area: {
    height: 100,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 15

  },
  header: {
    fontSize: 60,
    // margin: 12,
    fontWeight: 'bold',
    color: "#3E00CD"
  },
  buttonCreate: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 12
  },
  buttonAdd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // marginLeft: 15,
    marginTop: 12,
    // padding: 5

  },
  row: {
    flexDirection: "column",
    margin: 25,
    backgroundColor: "white",
    borderRadius: 15,
    height: "90%"
  },
  chapterName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#3E00CD"
  },
  col: {
    flex: 2,
    flexDirection: "col",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  logo: {
    width: 120,
    height: 127,

  },
  description: {
    fontSize: 20,
    marginLeft: 10,
  }
});

export default createSubject;