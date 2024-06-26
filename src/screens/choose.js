import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";

export default () => {
    return(
        <SafeAreaView>
            <View style={{width:'100%', backgroundColor:'red', alignItems:'center'}}>
            <Image source={require('../assets/htmlcho.png')} />
            </View>
        </SafeAreaView>
    )
}