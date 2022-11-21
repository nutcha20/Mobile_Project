import React, { useState, useEffect, useInsertionEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Image } from "react-native";
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../database/firebase';

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
        <Button onPress={() => navigation.navigate('profile', { role: role, name: name, last: lastname, maj: major, dg: degree, username: username })} title="user profile" />
      ),
    });
  }, [navigation]);
  var docsSubject = keepChapter.filter(doc => { return doc.idSubject == idpickSuj })
  var docsLesson = docsSubject[0].chapter.filter(doc => { return doc.idChapter == idCh })
  console.log(docsLesson)
  docsLesson.forEach((doc) => {
    itemSubject.push(
      <View style={styles.row}>
        <View style={[styles.col, { padding: 10 }]}>
          <Text style={styles.header}>Chapter {doc.idChapter}</Text>
          <Text style={styles.header}>{doc.name}</Text>
          <Text numberOfLines={3}>
          {doc.detail}
          </Text>
          <View style={styles.buttonAdd}>
            <Button title="PDF" style={styles.add} color="red" />
            <Text style={styles.description}>Week{doc.idChapter}.pdf</Text>
          </View>
        </View>
      </View>
    )
  })
  return (
    <View style={styles.container}>
      { itemSubject }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#fffafd",

  },
  textinput: {
    height: 50,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    color: "gray",
    backgroundColor: "#fff",
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
    fontSize: 30,
    margin: 12,
    fontWeight: 'bold',
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
    marginLeft: 15,
    margin: 12,
    padding: 5

  },
  row: {
    flexDirection: "row",
    margin: 15,
    backgroundColor: "white",
    borderRadius: 15
  },
  // add:{
  //   padding: 10,
  // },
  description: {
    fontSize: 20,
    marginLeft: 10,
  },
  col: {
    flex: 2,
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
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