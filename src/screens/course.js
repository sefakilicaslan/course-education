import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Entrance = (props) => {
    return (
        <TouchableOpacity style={{
            borderWidth: 1, flexDirection: 'row', justifyContent: 'space-around',
            backgroundColor: '#F8F2EE', marginTop: 8, borderColor: '#F8F2EE'
        }}>
            <Text>Lessons</Text>
            <Text>Lessons</Text>
            <Text>Lessons</Text>
        </TouchableOpacity>
    );
};


export default ({navigation}) => {

    const DATA = [
        {
            id: 0,
            title: 'Lessons'
        },
        {
            id: 1,
            title: 'Tests'
        },
        {
            id: 2,
            title: 'Discuss'
        },
    ]

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('chooselesson')}>
                    <Image source={require('../assets/back.png')} />
                </Pressable>
                <Text style={styles.texth}>HTML</Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.texth}>Tags For Headers</Text>
                <Text style={styles.lesson}>3 of 11 lessons</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 }}>
                <Pressable style={{ ...styles.box, borderBottomLeftRadius: 16, borderTopLeftRadius: 16 }}>
                    <Text style={styles.text_press}>Lessons</Text>
                </Pressable>
                <Pressable style={styles.box}>
                    <Text style={styles.text_press}> Tests </Text>
                </Pressable>
                <Pressable style={{ ...styles.box, borderBottomRightRadius: 16, borderTopRightRadius: 16 }}>
                    <Text style={styles.text_press}>Discuss</Text>
                </Pressable>
            </View>
            <View style={styles.img}>
                <Image source={require('../assets/for.png')} />
            </View>
            <Text style={styles.intro}>Introduction</Text>
            <Text style={styles.intro2}>You can launch a new career in web develop-
                ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time,
                a lot of determination, and a teacher you trust.
                Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.

            </Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 48,
    },
    texth: {
        fontSize: 24,
        color: '#3C3A36',
        fontWeight: 'bold'
    },
    title: {
        alignItems: 'center',
        marginTop: 32,
    },
    lesson: {
        marginTop: 8,
        fontSize: 14,
        color: '#78746D',
    },
    box: {
        borderWidth: 1,
        height: 42,
        width: 114,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F2EE',
        borderColor: 'black',

    },
    img: {
        width: '100%',
        marginHorizontal: 16,
        marginTop: 8,
    },
    intro: {
        fontSize: 20,
        color: '#3C3A36',
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 24,
    },
    intro2: {
        marginHorizontal: 16,
    },



})