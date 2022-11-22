import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Alert } from "react-native";
import { firebase, db } from "../database/firebase"
import { collection, getDocs, addDoc, deleteDoc, getDoc, onSnapshot, doc, updateDoc } from "firebase/firestore"
import * as DocumentPicker from "expo-document-picker";

const createChapter = ({ route, navigation }) => {
  const [details, setDetails] = useState('');
  const [nameChapter, setNameChapter] = useState('');
  const [video, setVideo] = useState('');
  const {chapter, idpickSuj, uid,  role, name, lastname, major, degree, username } = route.params;
  // const [file, setFile] = useState('');
  let file;
 
  var count = chapter.length;
  // console.log(count)
  // console.log(idpickSuj)
  // console.log(uid)

  const [updoc, setUpDoc] = useState(null);
  const [uploading, setUploading] = useState(false)

  const pickDoc = async () => {

    const result = await DocumentPicker.getDocumentAsync({});
    const source = { uri: result.uri };
    console.log(source);
    setUpDoc(source);
  }

  function create() {

    uploadDoc().then(e => {
      console.log('file ', e)
      chapter.push({
        idChapter: count + 1,
        details: details,
        nameChapter: nameChapter,
        video: video,
        file: e,
      })
      updateDoc(doc(db, "subject", uid), {
        chapter: chapter
      }).then(
        (res) => {
          this.setState({
            details: '',
            nameChapter: '',
            video: '',
            file: ''
          })
          // window.location.reload();
          
        },
        alert("Chapter has been created succesfully"),
        window.location.reload()
       
      )
        .catch((err) => {
          console.log('Error found');
        })

    })
  };
 const uploadDoc = async () => {
    setUploading(true);
    try {
      const response = await fetch(updoc.uri)
      console.log(response)
      const blob = await response.blob();
      console.log(blob)
      const filename = updoc.uri.substring(updoc.uri.lastIndexOf('a') + 1);
      // const filename = updoc;
      // const filename = 'noice'
      console.log('NAME', filename, 'uri', updoc.uri)
      var ref = await firebase.storage().ref().child(filename).put(blob);
      console.log(ref)
      let getImageURL = await firebase.storage().ref().child(filename).getDownloadURL();
      console.log(getImageURL)
      Alert.alert(
        'Doc uploaded..!!'
        );
        setUploading(false);
        return getImageURL
      } catch (error) {
        setUploading(false);
        console.log('error', error);
      }
      
    // setUpDoc(null);
    // }
    // setFile(getImageURL)
    // file = getImageURL
  };

  


  

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create Chapter</Text>
      <TextInput
        value={nameChapter} onChangeText={(nameChapter) => { setNameChapter(nameChapter) }}
        style={styles.textinput}
        placeholder="ชื่อบทเรียน"
      />
      <TextInput multiline={true} value={details} onChangeText={(details) => { setDetails(details) }}

        numberOfLines={10} style={styles.area} placeholder="รายละเอียดวิชา" />

      <TextInput multiline={true} value={video} onChangeText={(video) => { setVideo(video) }} style={styles.area}
        // style={styles.textinput} value={idSubject} onChangeText={(idSubject) => { setIdSubject(idSubject) }}
        placeholder="Link Video"
      />
      <View style={styles.buttonAdd}>
        <Button title="+" style={styles.add} color="#937DC2" onPress={() => pickDoc()} />
        <Text style={styles.description}>อัพโหลดไฟล์</Text>
        <Text>{file}</Text>
        {/* <Button title="upload" style={styles.add} color="#937DC2" onPress={() => uploadDoc()}/> */}
        
      </View>
      <View style={styles.buttonCreate}>
        <Button title="submit"
          onPress={() => { create();  }}
          // navigation.navigate("s3");
          color="#937DC2" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#fffafd",
    paddingTop: 20

  },
  textinput: {
    height: 50,
    margin: 20,
    // borderWidth: 1,
    padding: 10,
    color: "gray",
    backgroundColor: "#fff",
    borderRadius: 15,
    color: "#937DC2",
    borderColor: "#937DC2",
    borderWidth: 2,
    fontWeight: "bold"
  },
  area: {
    height: 100,
    margin: 20,
    borderColor: "#937DC2",
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    color: "#937DC2",
    fontWeight: "bold"

  },
  header: {
    fontSize: 30,
    margin: 12,
    fontWeight: 'bold',
    color: "#937DC2",
    textAlign: "center"
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
  // add:{
  //   padding: 10,
  // },
  description: {
    fontSize: 20,
    marginLeft: 10,
    color: "#937DC2",

  }
});

export default createChapter;