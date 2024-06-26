import React from "react";
import { SafeAreaView, Text, View, Image ,Pressable, StyleSheet } from "react-native";
import Button from "./Button";
import Continue from "./Continue";

export default ({navigation}) => {

    const handleContinuePress = () => {
        navigation.navigate('added');
      };

    return(
        <SafeAreaView style={{marginHorizontal: 16,}}>
            <View style={styles.box}>
                <Button />
                <Text style={styles.textk}>Payment</Text>
            </View>
            <View style={styles.img}>
            <Image source={require('../assets/saved.png')}/>
            <Text style={styles.textc}>  Course was saved</Text>
            <Text style={styles.texttr}>You can find this course in your profile</Text>
           <View style={{marginTop:32}}> 
           <Pressable>    
           <Continue onPress={handleContinuePress} />
           </Pressable>    
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
