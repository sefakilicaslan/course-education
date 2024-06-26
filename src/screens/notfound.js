import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TextInput } from "react-native";

export default ({navigation}) => {
    return(
        <SafeAreaView style={{flex: 1, marginHorizontal: 16}}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('payment')}>
                <Image source={require('../assets/back.png')}/>
            </Pressable>
            <View style={{borderWidth: 1, marginTop: 16, justifyContent:'space-between', height:56, paddingHorizontal:16, borderRadius:16, flexDirection:'row', borderColor:'gray', alignItems:'center'}}>
                <TextInput placeholder="Cooking" />
                <Image source={require('../assets/search.png')} />
            </View>
            <View style={styles.box}>
                <Image source={require('../assets/notfound.png')} />
                <Text style={styles.textc}> Course not found</Text>
                <Text style={styles.textk}>Try searching the course with a different keyword</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        height: 48,
        width: 48,
        borderRadius: 24,
        borderWidth: 1,
        marginTop: 60,
        borderColor: 'gray',
    },
    search:{
        borderWidth: 1,
        paddingLeft: 16,
        borderColor: 'gray',
        borderRadius: 12,
        marginTop: 16,
        height: 56,
    },
    box: {
        alignItems:'center',
        marginTop: 103,
    },
    textc:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#3C3A36',
        marginTop: 32,
    },
    textk:{
        fontSize: 14,
        color:'#78746D',
        marginTop: 8,
    }

})