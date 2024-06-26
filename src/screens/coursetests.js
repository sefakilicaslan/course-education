import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList } from "react-native";

export default ({ navigation }) => {

    const DATA = [
        {
            id: 0,
            image: require('../assets/headers1.png'),
            header: 'Quiz1',
            container: 'Tags For Headers',
            title: 'Lets put your memory on this topic test. Solve tasks and check your knowledge.'
        },
        {
            id: 1,
            image: require('../assets/headers2.png'),
            header: 'Quiz1',
            container: 'Tags For Headers',
            title: 'Lets put your memory on this topic test. Solve tasks and check your knowledge.'
        },

    ]

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('course')}>
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
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Box DATA={item} />}
            />
        </SafeAreaView>
    )
}

const Box = ({ DATA }) => {
    return (
        <Pressable style={{ borderWidth: 3, borderColor: 'gray', height: 473, marginHorizontal: 16, marginTop: 16, }}>
            <View style={{ marginTop: 24, marginHorizontal: 16, }}>
                <Image source={DATA.image} />
            </View>
            <View style={{ marginHorizontal: 24, marginTop: 16, }}>
                <Text style={{ fontSize: 14, color: '#E3562A' }}>{DATA.header}</Text>
                <Text style={{ fontSize: 20, color: '#3C3A36', fontWeight: 'bold' }}>{DATA.container}</Text>
                <Text style={{ fontSize: 14, color: 'gray' }}>{DATA.title}</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 16 }}>
                <Pressable style={styles.begin}>
                    <Text style={{ fontSize: 14, color: '#3C3A36' }}>Begin</Text>
                </Pressable>
            </View>
        </Pressable>
    );
};

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
    begin: {
        borderColor: '#E3562A',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 295,
        borderRadius: 16,
    }


})