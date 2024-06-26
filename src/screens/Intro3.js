import React, {useEffect} from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";

export default ({navigation}) => {

    useEffect(() => {
        navigation.navigate('Signup');
      }, []);

    return(
        <SafeAreaView style={{flex: 1}}>
            <Image style={styles.box} source={require('../assets/intro3.png')} />
            <View style={styles.text_box}>
            <Text style={styles.text_title}>Improve your skills</Text>
            </View>
            <View style={styles.textr}>
                <Text style={styles.text_reg}>Quarantine is the perfect time to spend your day learning something new, from anywhere!</Text>
            </View>
            <Pressable onPress={() => {
            navigation.navigate('Login');
          }} style={styles.but}>
                <Text style={styles.but_text}>Let's Start</Text>
            </Pressable>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    box: {
        marginTop: 184,
        resizeMode: 'contain',
        width: '100%',
    },
    text_box: {
        height: 72,
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop: 16,
    },
    text_title: {
        fontSize: 24,
        color:'black',
    },
    textr:{
        height: 64,
        width: '100%',
        marginTop: 8,
        marginHorizontal: 17,
    },
    text_reg:{
        fontSize: 14,
        color:'#78746D',
        marginHorizontal: 50,
    },
    but:{
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        height: 56,
        marginHorizontal: 32,
        borderRadius: 16,
        marginTop: 72,
        backgroundColor:'#E3562A',
        borderColor:'#E3562A'
    },
    but_text:{
        color:'white',
        fontSize: 16,
    }
})