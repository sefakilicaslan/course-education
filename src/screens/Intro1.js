import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import Next from "./Next";

export default ({navigation}) => {



    return(
        <SafeAreaView style={{flex: 1, marginHorizontal:16,}}>
            <Pressable onPress={() => {
    navigation.navigate('Intro2');
         }}
            style={{alignItems:'flex-end', fontSize: 144, marginTop: 60,}} >
                <Text style={{color:'#78746D'}}>Skip</Text>
            </Pressable>
            <View style={{alignItems:'center', marginTop: 112,}}>
              <Image source={require('../assets/intro1.png')} />
              <Text style={styles.box__title}>Learn anytime and anywhere</Text>
              <Text style={styles.text_title}>Quarantine is the perfect time to spend yourday learning something new, from anywhere!</Text>
              <Pressable style={styles. description}>
            <Text style={{fontSize:40,}}>. . .</Text>
            </Pressable>
            <Pressable onPress={() => {
            navigation.navigate('Intro2');
          }} style={{marginTop:65, alignItems:'center'}}>
        <Next  />
        </Pressable>
              </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 72,
        width: '100%',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 16,
    },
    box__title:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 16,
    },
    text_title:{
        fontSize: 14,
        color:'#78746D',
        marginTop: 8,
        textAlign:'center'
    },
    text_container:{
        height: 64,
        width: '100%',
        justifyContent:'center',
        marginTop: 8,
    },

    description: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }
})