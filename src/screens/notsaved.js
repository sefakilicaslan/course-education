import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import Button from "./Button";
import Continue from "./Continue";

export default ({ navigation }) => {

    const handleContinuePress = () => {
        navigation.navigate('payment');
      };
      
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16, }}>
            <View style={styles.box}>
                <Button />
                <Text style={styles.textk}>Saved</Text>
            </View>
            <View style={styles.img}>
                <Image source={require('../assets/notsaved.png')} />
                <Text style={styles.textc}> Course not saved</Text>
                <Text style={styles.texttr}>Try saving the course again in a few minutes</Text>
            </View>
            <View style={{ marginTop: 32, }}>
                <Pressable onPress={handleContinuePress}>
                    <Continue />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        marginTop: 48,
    },
    textk: {
        fontSize: 24,
        color: '#3C3A36',
        fontWeight: 'bold',
    },
    img: {
        alignItems: 'center',
        marginTop: 127,
    },
    textc: {
        fontSize: 24,
        color: '#3C3A36',
        marginTop: 32,
        fontWeight: 'bold',
    },
    texttr: {
        fontSize: 14,
        color: '#78746D',
        marginTop: 8,
    }
})