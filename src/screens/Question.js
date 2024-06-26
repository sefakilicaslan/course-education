import React, {useState} from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList } from "react-native";

export default ({navigation}) => {

    const DATA = [
        {
            id: 0,
            title:'A.',
            header:'<h5>',
        },
        {
            id: 1,
            title:'B.',
            header:'<p>',
        },
        {
            id: 2,
            title:'C.',
            header:'<h1>',
        },
    ]

    const [selectedId, setSelectedId] = useState("null");

    return(
        <SafeAreaView style={{flex: 1, marginHorizontal:16,}}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('coursetests')}>
                <Image source={require('../assets/back.png')}/>
            </Pressable>
            <View style={styles.box}>
            <Text style={styles.text1}>1 of 20</Text>
            <Text style={styles.textw}>Which tag for the biggest header?</Text>
            </View>
            <View style={{alignItems:'center', marginTop: 16,}}>
            <Image source={require('../assets/question.png')} />
            </View>
            <FlatList
            data={DATA}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={ ({ item }) => <Box DATA={item} />} 
        />
        <View style={{alignItems:'center'}}>
        <Pressable style={styles.press}>
            <Text style={styles.text_press}>Continue</Text>
        </Pressable>
        </View>
        </SafeAreaView>
    )
}

const Box = ({ DATA }) => {
    return (
        <View style={{alignItems:'center'}}>
        <Pressable style={styles.question}>
            <Text style={styles.text_title}>{DATA.title}</Text>
            <Text style={styles.text_header}>{DATA.header}</Text>

        </Pressable>
        </View>
    );
  };

const styles = StyleSheet.create({
    button:{
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 44,
    },
    text1:{
        fontSize: 16,
        color:'#78746D',
    },
    textw:{
        fontSize: 24,
        color:'#3C3A36',
        fontWeight:'bold',
        width: 343,
        textAlign:'center',
        marginTop: 8
    },
    box:{
        alignItems:'center',
        marginTop: 32,
    },
    question:{
        borderWidth: 1,
        borderColor: 'gray',
        width: 343,
        marginTop: 16,
        flexDirection:'row',
        height: 58,
        alignItems:'center',
        borderRadius: 8,
    },
    text_title:{
        fontSize: 16,
        color:'#3C3A36',
        paddingLeft: 24,
    },
    text_header:{
        fontSize: 16,
        color:'#3C3A36',
        paddingLeft: 16,
    },
    press: {
        justifyContent:'center',
        alignItems:'center',
        height: 56,
        width: 309,
        borderRadius: 16,
        backgroundColor:'#E3562A',
        borderColor:'#E3562A',
        borderWidth: 1,
        marginBottom: 40,
    },
    text_press: {
        color:'white',
        fontSize: 16, 
    }
})