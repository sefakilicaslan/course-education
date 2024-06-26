import React, {useEffect} from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";

export default ({navigation}) => {

    useEffect(() => {
        navigation.navigate('Results');
      }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image style={styles.container} source={require('../assets/codefactory.png')} />
            <View style={styles.text_container}>
            <Text style={styles.text_title}>CodeFactory</Text>
            </View>
            <View>
        <Pressable
          onPress={() => {
            navigation.navigate('Intro2');
          }}>
          <Text>Git</Text>
        </Pressable>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center', 
        alignItems:'center', 
        resizeMode:'contain',
        marginTop: 243,
    },
    text_container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 16,
        height: 46,
        width: '100%'
    },
    text_title:{
        fontSize: 40,
        fontWeight:'bold',
        color:'#3C3A36'
    }
    
})
