import React from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";

export default () => {
    return(
        <Pressable style={styles.button}>
            <Image source={require('../assets/back.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create ({
    button: {
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor:'gray',
        height: 40,
        width: 40,
    }
})