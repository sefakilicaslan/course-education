import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import Button from "./Button";
import Continue from "./Continue";

export default ({navigation}) => {
    return(
        <SafeAreaView style={{marginHorizontal: 16,}}>
            <View style={styles.box}>
                <Button />
                <Text style={styles.textk}>Payment</Text>
            </View>
            <View style={styles.img}>
            <Image source={require('../assets/added.png')}/>
            <Text style={styles.textc}> Payment method added</Text>
            <Text style={styles.texttr}>You can buy the course now. Continue to payment.</Text>
           <View style={{marginTop:32}}>         
           <Continue onPress={() => {
            navigation.navigate('notfound');
          }} />
           </View> 
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection:'row',
        marginTop: 48,
    },
    textk: {
        fontSize: 24,
        color:'#3C3A36',
        fontWeight:'bold',
    },
    textc: {
        fontSize: 24,
        color:'#3C3A36',
        marginTop: 32,
        fontWeight:'bold',
    },
    img: {
        alignItems:'center',
        marginTop: 127,
    },
    texttr:{
        fontSize: 14,
        color:'#78746D',
        marginTop: 8,
    }
})
