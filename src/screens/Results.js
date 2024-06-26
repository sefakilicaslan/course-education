import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TextInput, FlatList } from "react-native";

export default ({ navigation }) => {

    const DATA = [
        {
            id: 0,
            image: require('../assets/UI.png'),
            minute: '3 h 30 min',
            title: 'UI Advanced',
            tex: 'Advanced mobile interface design',
        },
        {
            id: 1,
            image: require('../assets/html.png'),
            minute: '3 h 30 min',
            title: 'UI',
            tex: 'Advanced web applications',
        }
    ]

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable style={styles.box} onPress={() => navigation.navigate('Question')}>
                    <Image source={require('../assets/back.png')} />
                </Pressable>
                <View style={{
                    borderWidth: 1, marginTop: 16, height: 56, width: 287,
                    justifyContent: 'space-between', paddingHorizontal: 16, borderRadius: 16,
                    marginHorizontal: 16, borderColor: 'gray',
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    <TextInput placeholder="Search Course" />
                    <Image source={require('../assets/search.png')} />
                </View>
            </View>
            <Text style={styles.result}>2 Results</Text>
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
        <Pressable style={{
            marginHorizontal: 16, height: 297,
            borderWidth: 1, marginTop: 16, borderColor: 'gray', borderRadius: 8,
        }}>
            <Image style={{ width: '100%', }} source={DATA.image} />
            <View style={{ paddingLeft: 16, marginTop: 16, }}>
                <Text style={styles.minute}>{DATA.minute}</Text>
                <Text style={styles.ui}>{DATA.title}</Text>
                <Text style={styles.advanced}>{DATA.tex}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    box: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 24,
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    result: {
        fontSize: 24,
        color: '#3C3A36',
        fontWeight: 'bold',
        marginHorizontal: 17,
        marginTop: 12,
    },
    minute: {
        fontSize: 12,
        color: '#5BA092',
    },
    ui: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C3A36',
    },
    advanced: {
        fontSize: 14,
        color: '#3C3A36',
        marginTop: 4,
    },
})