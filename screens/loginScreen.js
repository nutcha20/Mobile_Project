import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth, db } from '../database/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, where, addDoc, deleteDoc, getDoc, query , onSnapshot} from "firebase/firestore"
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             console.log("hi")
    //             const dbRef = collection(db, "user ");
    //             const check = query(dbRef, where("email", "==", user.email));
    //             if (check) {
    //                getDocs(check).then((x) => {
    //                 navigation.replace("s1", { role: x.docs[0].data().role, name: x.docs[0].data().name, lastname: x.docs[0].data().lastName, major: x.docs[0].data().major, degree: x.docs[0].data().degree, username: x.docs[0].data().username});
    //                })
    //             }
    //         }
    //     })

    //     return unsubscribe
    // }, [])

    // const handleSignUp = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             alert('create succesfully!!');
    //             // ...
    //         })
    //         .catch((error) => {
    //             console.log(error.code)
    //             // ..
    //         });
    // }

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                const dbRef = collection(db, "user ");
                const check = query(dbRef, where("email", "==", user.email));
                const dbsubject = collection(db, "subject")
                if (check) {
                       getDocs(check).then((x) => {

                        navigation.replace("s1", { role: x.docs[0].data().role, name: x.docs[0].data().name, lastname: x.docs[0].data().lastName, major: x.docs[0].data().major, degree: x.docs[0].data().degree, username: x.docs[0].data().username});
                       })
                    // getDocs(check).then((x) => {
                    //     console.log(x.docs[0].data().role)
                    //     const check2 = query(dbsubject, where("major", "==", x.docs[0].data().major))
                    //     onSnapshot(check2, (snapshot) => {
                    //         console.log(snapshot.docs)
                    //         snapshot.docs.forEach((doc) => {
                    //             // setTestData((prev) => [...prev, doc.data()])
                    //             console.log("onsnapshot", doc.data());
                    //             navigation.replace("s1", {
                    //                 role: x.docs[0].data().role,
                    //                 name: x.docs[0].data().name,
                    //                 lastname: x.docs[0].data().lastName,
                    //                 major: x.docs[0].data().major,
                    //                 degree: x.docs[0].data().degree,
                    //                 username: x.docs[0].data().username,
                    //                 docc: doc.data()
                    //             });
                    //             console.log(doc.data())
                    //         })
                    //     })

                    // })
                }
                console.log(user.email + "success")
            })
            .catch(error => alert("Oop! Something went wrong, please try again later"))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#937DC2',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#937DC2',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#937DC2',
        fontWeight: '700',
        fontSize: 16,
    },
})