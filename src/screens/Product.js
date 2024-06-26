import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";

export default ({navigation}) => {
    return(
        <SafeAreaView>
            <View style={{flexDirection:'row', marginTop: 52, marginHorizontal: 16,}}>
                <Pressable style={styles.box} onPress={() => navigation.navigate('Results')}>
                    <Image source={require('../assets/back.png')} />
                </Pressable>
                <View style={{flex:1,alignItems:'center'}}>
                <Text style={styles.texth}>HTML</Text>
                </View>
            </View>
            <Image style={styles.img} source={require('../assets/htmlproduct.png')} />
           <View style={styles.text_title}>
            <Text style={styles.about}>About the course</Text>
            <Text style={styles.web}>
                You can launch a new career in web develop-
                ment today by learning HTML & CSS. You don't need a computer 
                science degree or expensive software. All you need is a computer, a bit of time, 
                a lot of determination, and a teacher you trust.
            </Text>
            <Text style={styles.tion}>Duration</Text>
            <Text style={styles.minute}>1 h 30 min</Text>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.add}>Add to Cart</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    box:{
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent:'center',
        alignItems:'center',
    },
    texth: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#3C3A36',
    },
    img: {
        width:'100%', 
        marginTop: 16,
    },
    about: {
        fontWeight: 'bold',
        fontSize: 24,
        color:'#3C3A36',
    },
    web: {
        fontSize: 14,
        color:'#3C3A36',
        marginTop: 4,
    },
    text_title: {
        marginHorizontal: 16,
        marginTop: 64,
    },
    tion: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#3C3A36',
        marginTop: 16,

    },
    minute: {
        fontSize: 14,
        color:'#3C3A36',
    },
    button: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E3562A',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#E3562A',
        marginHorizontal: 16,
        height: 56,
        marginTop: 53,
    },
    add: {
        color:'white',
        fontSize: 16,
    }
})