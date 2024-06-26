import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList } from "react-native";


export default () => {

    const DATA = [
        {
            id: 0,
            title:'Your Courses'
        },
        {
            id: 1,
            title:'Saved'
        },
        {
            id: 2,
            title:'Payment'
        },
    ]

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
            <Pressable style={styles.img}>
                <Image source={require('../assets/back.png')} />
            </Pressable>
            <Text style={styles.textp}>Profile</Text>
            </View>
            <View style={styles.box}>
                <Image source={require('../assets/profile.png')} />
            </View>
            <View style={styles.box_list}>
            <FlatList
            data={DATA}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => <Box DATA={item.title} />} 
            />
            </View>
            <View style={styles.textl}>
            <Text style={styles.textr}>Log Out</Text>
            </View>
        </SafeAreaView>
    )
}

const Box = ({DATA}) => {
    return(
        <Pressable style={{
            height: 80, marginHorizontal: 16, marginTop: 16, width:343, borderWidth: 1, borderRadius: 16, borderColor:'gray',justifyContent:'center',alignItems:'center'
        }}>
            <Text style={{fontSize: 24, color:'#3C3A36',}}>{DATA}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal: 16,
        marginTop: 44,
        alignItems:'center',
        justifyContent:'center',
    },
    img: {
        height: 48,
        width: 48,
        borderRadius: 24,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    textp:{
        fontSize: 24,
        color:'#3C3A36',
    },
    box:{
        alignItems:'center',
        marginTop: 32,
    },
    box_list:{
        justifyContent:'center', 
        alignItems:'center'
    },
    textl:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 16,
    },
    textr: {
        fontSize: 14,
        color:'#78746D',
    }
})