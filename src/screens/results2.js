import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, Linking } from "react-native";

export default () => {

    const handleGooglePress = () => {
        Linking.openURL("https://www.google.com/");
    };

    const handleFacebookPress = () => {
        Linking.openURL("https://www.facebook.com/");
    };

    const handleInstagramPress = () => {
        Linking.openURL("https://www.instagram.com/");
    };
    
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16, }}>
            <View style={styles.container}>
                <Pressable style={styles.button}>
                    <Image source={require('../assets/back.png')} />
                </Pressable>
                <Text style={styles.texth}>Results</Text>
            </View>
            <View style={styles.img}>
                <Image source={require('../assets/results.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textc}>Congratulations</Text>
                <Text style={styles.textc2}>Congratulations for getting all the answers correct!</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 142, }}>
                <Pressable style={styles.box}>
                <Pressable onPress={handleFacebookPress}>
                        <Image source={require('../assets/facebook.png')} />
                    </Pressable>
                    <Pressable onPress={handleInstagramPress}>
                        <Image source={require('../assets/instagram.png')} />
                    </Pressable>
                    <Pressable onPress={handleGooglePress}>
                        <Image source={require('../assets/google.png')} />
                    </Pressable>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 48,
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
    },
    texth: {
        fontSize: 24,
        color: '#3C3A36',
    },
    img: {
        marginTop: 139,
    },
    textc: {
        fontSize: 24,
        color: '#3C3A36',
        fontWeight: 'bold',
    },
    textc2: {
        fontSize: 14,
        color: '#78746D',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
        width: 152,
    }
})