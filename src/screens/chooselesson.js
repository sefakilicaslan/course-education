import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, FlatList, StyleSheet } from "react-native";
import Button from "./Button";

export default ({navigation}) => {

    const DATA = [
        {
            id: 0,
            image: require('../assets/main.png'),
            title: 'Main Tags',
            borderWidth: 1,
        },
        {
            id: 1,
            image: require('../assets/tags.png'),
            title: 'Tags For Header',
            borderWidth: 1,
        },
        {
            id: 2,
            image: require('../assets/style.png'),
            title: 'Style Tags',
            borderWidth: 1,
        }
    ]

    return (
        <SafeAreaView style={{ marginHorizontal: 16, flex: 1 }}>
            <View style={styles.container}>
                <Pressable>
                    <Button style={styles.box} onPress={() => navigation.navigate('yourcourse')} />
                </Pressable>

                <Text style={styles.textc}>HTML</Text>
            </View>
            <View style={styles.img}>
                <Image source={require('../assets/choose.png')} />
                <Pressable style={{ alignItems: 'flex-end', paddingRight: 16, }}>
                    <Image source={require('../assets/play.png')} />
                </Pressable>
                <View style={styles.textl}>
                    <Text style={styles.textc}>HTML</Text>
                    <Text style={styles.textb}>Advanced web applications</Text>
                </View>
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
        <Pressable style={{ borderWidth: 1, borderColor: '#CDCDCD', borderRadius: 8, marginTop: 16, height: 88, alignItems: 'center', flexDirection: 'row' }}>
            <View style={styles.image} >
                <Image source={DATA.image} />
            </View>
            <View style={{ paddingLeft: 16, marginTop: 16, }}>
                <Text style={styles.title}>{DATA.title}</Text>
                <Text style={styles.border}>{DATA.borderWidth}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 52,
    },
    textc: {
        fontSize: 24,
        color: '#3C3A36',
        fontWeight: 'bold',
    },
    img: {
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
    },
    textl: {
        marginHorizontal: 16,
    },
    textb: {
        fontSize: 16,
        color: '#78746D',
    },
    image: {
        paddingLeft: 16,
    },
    title: {
        fontSize: 20,
        color: '#3C3A36',
        fontWeight: 'bold',
    },
    border: {
        marginTop: 16,
    }
})