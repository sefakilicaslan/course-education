import React, {useEffect} from "react";
import { SafeAreaView, Text, View,Image, Pressable, StyleSheet } from "react-native";
import Next from "./Next";

export default ({navigation}) => {

    return(
        <SafeAreaView style={{flex:1, marginHorizontal:16}}>
            <Pressable onPress={() => {
                     navigation.navigate('Intro3');
                }}
            style={{alignItems:'flex-end', fontSize: 144, marginTop: 60,}} >
                <Text style={{color:'#78746D'}}>Skip</Text>
            </Pressable>
            <View>
            <Image style={styles.img_container} source={require('../assets/intro2.png')} />
            <Text style={styles.box_title}>Find a course for you</Text>
            <Text style={styles.text_description}>Quarantine is the perfect time to spend your day learning something new, from anywhere!</Text>
            <Pressable style={styles. description}>
            <Text style={{fontSize:40,}}>. . .</Text>
            </Pressable>
            </View>
            <Pressable style={{alignItems:'center', marginTop: 72,}}>
            <Next />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img_container:{
        marginTop: 112,
        width: '100%'
    },
    box_title: {
        fontSize: 24,
        color:'black',
        textAlign:'center', 
        marginTop: 16,
        },
    description: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    text_description:{
        fontSize: 14,
        color:'#78746D',
        alignItems:'center', 
        textAlign:'center', 
        marginTop:8,    
},
})