import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TextInput } from "react-native";

const Entrance = (props) => {
    return (
        <View>
            <TextInput
                style={{
                    height: 53,
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingLeft: 16,
                    borderRadius: 12,
                    marginTop: 16,
                }}
                placeholder={props.placeholder}
            />
        </View>
    );
};



export default ({navigation}) => {
    return(
        <SafeAreaView style={{flex: 1, marginHorizontal: 16,}}>
            <Pressable style={styles.box} onPress={() => navigation.navigate('Login')} >
                <Image source={require('../assets/back.png')} />
            </Pressable>
            <Image style={styles.img} source={require('../assets/signup.png')} />
            <View style={styles.box_sign}>
                <Text style={styles.sign}>Sign Up</Text>
                <Text style={styles.account}>Create Your Account</Text>
            </View>
            <Entrance placeholder={"Name"}/>
            <Entrance placeholder={"E-mail"} />
            <Entrance placeholder={"Password"}/>
            <Pressable onPress={() => {
            navigation.navigate('profile');
          }} style={styles.sign_up}>
                <Text style={styles.text_sign}>Sign up</Text>
            </Pressable>
            <Pressable style={styles.log_in}>
            <Text style={styles.text_log}>Log in</Text>
            </Pressable>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    img:{
        width: '100%',
        marginTop: 1,
    },
    box:{
        borderWidth:1, 
        borderRadius: 24, 
        height:48, 
        justifyContent:'center',
        alignItems:'center', 
        marginTop: 60, 
        width: 48, 
        borderColor: 'gray'
    },
    sign:{
        fontSize: 24,
        color:'#3C3A36',
    },
    account:{
        marginTop: 8,
    },
    box_sign:{
        marginTop: 16,
        alignItems:'center',
    },
    sign_up:{
        borderWidth: 1,
        borderColor:'#E3562A',
        backgroundColor:'#E3562A',
        marginTop: 16,
        justifyContent:'center',
        alignItems:'center',
        height: 56,
        borderRadius: 16
    },
    text_sign:{
        fontSize: 16,
        color:'white'
    },
    log_in: {
        alignItems:'center',
        marginTop: 16,
    },text_log:{
        fontSize: 14,
        color:'gray'
    }
})