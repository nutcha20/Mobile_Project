import React, {useState} from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Textarea, Alert, Image } from "react-native";
import { firebase, db } from "../database/firebase"
import { collection, getDocs, addDoc, deleteDoc, getDoc } from "firebase/firestore"
import * as ImagePicker from 'expo-image-picker'

const createPage = ({navigation, route}) => {
// export default function createPage(navigation) {

  
  const [imageShow, setImageShow] = useState('');
  const [image, setImage] = useState('');
  const [uploading,setUploading] = useState(false)
  
  const [idSubject, setIdSubject] = useState('');
  const [details, setDetails] = useState('');
  const [nameSubject, setNameSubject] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [chapter, setChapter] = useState('');
  const { idTeacher } = route.params;
  // console.log(idTeacher)
    // -----------------------------------------------------------------------------
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      // if(!result.cancelled){
      //   setImage(result.uri);
      // }
      const source = {uri: result.uri};
      // console.log(source);
      // console.log(result)
      setImageShow(result.uri);
      setImage(source);
    };
  
    const uploadImage = async () =>{
      setUploading(true);
      const response = await fetch(image.uri)
      console.log(response)
      const blob = await response.blob();
      console.log(blob)
      const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
      var ref = firebase.storage().ref().child(filename).put(blob);
  
      try{
        await ref;
      } catch (e) {
        console.log(e);
      }
      setUploading(false);
      Alert.alert(
        'Photo uploaded..!!'
      );
      setImage('');
      setImageShow('');
    }
      // -----------------------------------------------------------------------------
    function create() {
      console.log("เข้านะจ๊ะ")
    
      addDoc(collection(db, "subject"),{
        idSubject: idSubject,
        details: details,
        nameSubject: nameSubject,
        major: major,
        year: year,
        chapter: [],
        image: imageShow,
        idTeacher: idTeacher
      }).then((res) => {
        this.setState({
          idSubject: '',
          details: '',
          nameSubject: '',
          major: '',
          year: 0,
          // chapter: [],
        })
      })
        .catch((err) => {
          console.log('Error found: ', err);
        })
    };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create My Subject</Text>
      <TextInput value={idSubject} onChangeText={(idSubject) => { setIdSubject(idSubject) }}
        style={styles.textinput}
        placeholder="รหัสวิชา"
        />
      <TextInput value={nameSubject} onChangeText={(nameSubject) => { setNameSubject(nameSubject) }}
        style={styles.textinput}
        placeholder="ชื่อวิชา"
        keyboardType="numeric"
        />
        <TextInput value={major} onChangeText={(major) => { setMajor(major) }}
        style={styles.textinput}
        placeholder="แขนง"
        keyboardType="numeric"
        />
        <TextInput value={year} onChangeText={(year) => { setYear(year) }}
        style={styles.textinput}
        placeholder="ชั้นปี"
        keyboardType="numeric"
        />
      <TextInput multiline={true} value={details} onChangeText={(details) => { setDetails(details) }}
        numberOfLines={10} style={styles.area} placeholder="รายละเอียดวิชา"/>
      <View style={styles.buttonAdd}>
      <Button title="+" color="#937DC2" onPress={pickImage} style={{margin: 20}}/>
        <Text style={styles.description}>อัพโหลดรูปหน้าปก</Text>
        {imageShow && <Image style={styles.logo} source={{ uri: imageShow}}/>}
        
        {/* <Button title="upload" color="#937DC2" onPress={uploadImage}/> */}
      </View>
      <View style={styles.buttonCreate}>
        <Button title="submit"
        color="#937DC2"
        onPress={() => {create(); uploadImage; navigation.navigate("start")}}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
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
  area:{
    height: 100,
    margin: 20,
    borderColor: "#937DC2",
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    color: "#937DC2",
    fontWeight: "bold"

  },
  header:{
    fontSize: 30,
    margin: 12,
    fontWeight: 'bold',
    color: "#937DC2",
    textAlign: "center"
  },
  buttonCreate:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 12 
  },
  buttonAdd:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 15,
    margin: 12,
    padding: 5

  },
  description:{
    fontSize: 20,
    marginLeft: 10,
    color: "#937DC2"
  },
  logo: {
    // flexDirection: "row",
    // alignItems: "center",
    width: 110,
    height: 110,
    borderRadius: 20

},
});

export default createPage;