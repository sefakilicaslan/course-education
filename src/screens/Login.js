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
                    marginHorizontal: 16,
                    borderRadius: 12,
                    marginTop: props.marginTop
                }}
                placeholder={props.placeholder}
            />
        </View>
    );
};


export default ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image style={styles.container} source={require('../assets/login.png')} />
            <Text style={styles.textr}>Log İn</Text>
            <Text style={styles.textl}>Login with social networks</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.img}>
                    <Image source={require('../assets/facebook.png')} />
                    <Image source={require('../assets/instagram.png')} />
                    <Image source={require('../assets/google.png')} />
                </Pressable>
            </View>
            <Entrance marginTop={16} placeholder={"Email"} />
            <Entrance marginTop={16} placeholder={"Password"} />
            <Pressable style={styles.box}>
                <Text style={styles.text_password}>Forgot Password?</Text>
            </Pressable>
            <Pressable style={styles.box_login}>
                <Text style={styles.text_login}>Log İn</Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('Signup');
            }} style={styles.sign}>
                <Text style={styles.text_sign}>Sign Up</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 96,
    },
    textr: {
        fontSize: 24,
        color: '#3C3A36',
        textAlign: 'center',
        marginLeft: 13,
        marginTop: 16,
    },
    textl: {
        textAlign: 'center',
        color: '#78746D',
        fontSize: 14,
        marginTop: 8,
        marginLeft: 33,
    },
    img: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        height: 40,
        marginLeft: 10,
        width: 144,
    },
    box: {
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 16,
    },
    text_password: {
        fontSize: 14,
        color: '#78746D',
    },
    box_login: {
        borderWidth: 1,
        borderColor: '#E3562A',
        backgroundColor: '#E3562A',
        marginTop: 16,
        borderRadius: 16,
        marginHorizontal: 16,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_login: {
        fontSize: 16,
        color: 'white',
    },
    sign: {
        alignItems: 'center',
        marginTop: 16,
    },
    sign_text: {
        fontSize: 14,
        color: 'gray'
    }

})