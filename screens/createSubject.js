import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Textarea } from "react-native";

const createPage = ({navigation}) => {
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
        <TextInput
        style={styles.textinput}
        placeholder="แขนง"
        keyboardType="numeric"
        />
        <TextInput
        style={styles.textinput}
        placeholder="ชั้นปี"
        keyboardType="numeric"
        />
      <TextInput multiline={true}
        numberOfLines={10} style={styles.area} placeholder="รายละเอียดวิชา"/>
      <View style={styles.buttonAdd}>
        <Button title="+" color="#937DC2"/>
        <Text style={styles.description}>อัพโหลดรูปหน้าปก</Text>
      </View>
      <View style={styles.buttonCreate}>
        <Button title="submit"
        color="#937DC2"
        onPress={() => { navigation.navigate("s1"); }}/>
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
    
  },
  textinput: {
    height: 50,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    color: "gray",
    backgroundColor: "#fff",
    borderRadius: 15,
    color: "#937DC2"
  },
  area:{
    height: 100,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    color: "#937DC2"

  },
  header:{
    fontSize: 30,
    margin: 12,
    fontWeight: 'bold',
    color: "#937DC2"
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
  }
});

export default createPage;