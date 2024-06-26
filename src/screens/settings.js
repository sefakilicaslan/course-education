import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList } from "react-native";

const DATA = [
    {
        id: 0,
        image: require('../assets/names.png'),
        title:'Name',
        text: 'Juana Antania',
        buton: 'back',
    },
    {
        id: 1,
        image: require('../assets/email.png'),
        title:'Email',
        text: 'juanita123@gmail.com Antania',
        buton: 'back',
    },
    {
        id: 2,
        image: require('../assets/pasword.png'),
        title:'Password',
        text: 'changed 2 weeks ago',
        buton: 'back',
    },
]


export default () => {
    return(
        <SafeAreaView style={{flex: 1, marginHorizontal: 16,}}>
            <View style={styles.container}>
            <Pressable style={styles.img}>
                <Image source={require('../assets/back.png')} />
            </Pressable>
            <Text style={styles.textp}>Settings</Text>
            </View>
            <View style={styles.box}>
                <Image source={require('../assets/settings.png')} />
            </View>
            <Pressable style={styles.noti}>
                <Image source={require('../assets/notifications.png')} />
                <Text style={styles.text_noti}>Notifications</Text>
                <Image source={require('../assets/toggle.png')} />
            </Pressable>
                <Text style={styles.account}>Account İnformation</Text>
                <Pressable>
                <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => <Box DATA={item} />} 
        />
                </Pressable>
        </SafeAreaView>
    )
}


const Box = ({DATA}) => {
    return(
        <Pressable style={{
            height: 82, marginHorizontal: 16, marginTop: 16,
            width:343, borderWidth: 1, borderRadius: 16, borderColor:'gray',justifyContent:'center',alignItems:'center', flexDirection:'row'
        }}>
            <View style={{justifyContent:'flex-start', alignItems:'flex-start', width:32}}>
            <Image source={DATA.image} />
            </View>
            <View style={{ flex:1, paddingLeft: 12,}}>
            <Text style={{fontSize: 24, color:'gray',}}>{DATA.title}</Text>
            <Text style={{fontSize: 14, color:'gray',}}>{DATA.text}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center',}}>
            <Image source={require('../assets/back.png')} />
            </View>
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
    box: {
        marginTop: 24,
        backgroundColor:'red',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
    },
    noti: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 16,
        height: 82,
        marginTop: 16,
        paddingLeft: 16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text_noti: {
        fontSize: 20,
        color:'#3C3A36',
        marginRight: 120,
    },
    account:{
        marginTop: 16, 
        fontSize: 20, 
        color:'#3C3A36', 
        fontWeight:'bold',
    }
})