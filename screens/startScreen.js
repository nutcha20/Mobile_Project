import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth, db } from '../database/firebase'
import { collection, getDocs, where, addDoc, deleteDoc, getDoc, query , onSnapshot} from "firebase/firestore"

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log("hi")
                const dbRef = collection(db, "user ");
                const check = query(dbRef, where("email", "==", user.email));
                if (check) {
                   getDocs(check).then((x) => {
                    navigation.replace("s1", { role: x.docs[0].data().role, name: x.docs[0].data().name, lastname: x.docs[0].data().lastName, major: x.docs[0].data().major, degree: x.docs[0].data().degree, username: x.docs[0].data().username});
                   })
                }
                // const dbRef = collection(db, "user ");
                // const check = query(dbRef, where("email", "==", user.email));
                // const dbsubject = collection(db, "subject")
                // if (check) {
                //     //    getDocs(check).then((x) => {

                //     //     navigation.replace("s1", { role: x.docs[0].data().role, name: x.docs[0].data().name, lastname: x.docs[0].data().lastName, major: x.docs[0].data().major, degree: x.docs[0].data().degree, username: x.docs[0].data().username});
                //     //    })
                //     getDocs(check).then((x) => {
                //         console.log(x.docs[0].data().role)
                //         const check2 = query(dbsubject, where("major", "==", x.docs[0].data().major))
                //         onSnapshot(check2, (snapshot) => {
                //             console.log(snapshot.docs)
                //             snapshot.docs.forEach((doc) => {
                //                 // setTestData((prev) => [...prev, doc.data()])
                //                 console.log("onsnapshot", doc.data());
                //                 navigation.replace("s1", {
                //                     role: x.docs[0].data().role,
                //                     name: x.docs[0].data().name,
                //                     lastname: x.docs[0].data().lastName,
                //                     major: x.docs[0].data().major,
                //                     degree: x.docs[0].data().degree,
                //                     username: x.docs[0].data().username,
                //                     docc: doc.data()
                //                 });
                //                 console.log(doc.data())
                //             })
                //         })

                //     })
                // }
                console.log(user.email + "success")
            }
            else{
                navigation.replace("login")
            }
        })

        return unsubscribe
    }, [])

  return (
    <View style={styles.container}>
        <Image style={{ width: 200, height: 200}} source={require("../assets/Dayflow Avatar.png")}></Image>
      <Text style={styles.eduText}>Educate!</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#927DC2"
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  eduText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 15
  },
})