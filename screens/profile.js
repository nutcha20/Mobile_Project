import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { auth, db } from '../database/firebase'

const profile = ({navigation}) => {
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("login")
          })
          .catch(error => alert(error.message))
      }
    return (
        <View>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Text>Profile</Text>
            <TouchableOpacity
                onPress={handleSignOut}
            >
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default profile;