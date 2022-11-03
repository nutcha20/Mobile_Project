import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Image } from "react-native";

const createSubject = ({navigation}) => {
  return (
    <View style={styles.container}>
                <View style={styles.row}>
                    <View style={[styles.col, { padding: 10 }]}>
                        <Text style={styles.header}>บทที่ 1</Text>
                        <Text style={styles.header}>Introduce to ...</Text>
                        <Text numberOfLines={3}>
                            Course about how to write the Mobile App in iOS and Android by using
                            React-Native.
                        </Text>
                        <View style={styles.buttonAdd}>
        <Button title="PDF" style={styles.add} color="red"/>
        <Text style={styles.description}>Week1.pdf</Text>
      </View>
                    </View>
                </View>
                </View>
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
    fontWeight: 'bold',
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
  row: {
    flexDirection: "row",
    margin: 15,
    backgroundColor: "white",
    borderRadius: 15
},
  // add:{
  //   padding: 10,
  // },
  description:{
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
  description:{
    fontSize: 20,
    marginLeft: 10,
  }
});

export default createSubject;