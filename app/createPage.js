import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button } from "react-native";

const createSubject = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create My Subject</Text>
      <TextInput
        style={styles.textinput}
        placeholder="รหัสวิชา"
        />
      <TextInput
        style={styles.textinput}
        placeholder="ชื่อวิชา"
        keyboardType="numeric"
        />
      <textarea style={styles.area} placeholder="รายละเอียดวิชา"></textarea>
      <View style={styles.buttonAdd}>
        <Button title="+" style={styles.add}/>
        <Text style={styles.description}>อัพโหลดรูปหน้าปก</Text>
      </View>
      <View  style={styles.buttonCreate}>
        <Button title="submit"/>
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
    backgroundColor: "#C7E7FF",
    
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
  area:{
    height: 100,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 15

  },
  header:{
    fontSize: 30,
    margin: 12,
    fontWeight: 'bold'
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
  // add:{
  //   padding: 10,
  // },
  description:{
    fontSize: 20,
    marginLeft: 10,
  }
});

export default createSubject;