import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, Pressable, StyleSheet } from "react-native";

export default () => {
    return(
        <Pressable style={styles.box}>
            <Text style={styles.text_continue}>Continue</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box:{
        justifyContent:'center',
        alignItems:'center',
        height: 56,
        width: 309,
        marginHorizontal: 33,
        borderWidth: 1,
        backgroundColor:'#E3562A',
        borderColor:'#E3562A',
        borderRadius: 16,
    },
    text_continue:{
        color:'white',
        fontSize: 16,
    }
})