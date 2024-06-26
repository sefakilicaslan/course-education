import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, FlatList, StyleSheet } from "react-native";
import Button from "./Button";

export default () => {

    const DATA = [
        {
            id:0,
            image: require('../assets/swift.png'),
            minute: 'Left 1 h 20 min',
            title:'Swift',
            tex:'Advanced iOS apps',
        },
        {
            id:1,
            image: require('../assets/scrum.png'),
            minute: 'Left 1 h 20 min',
            title:'Scrum',
            tex:'Advanced project organization course',
        },
        {
            id:2,
            image: require('../assets/swift.png'),
            minute: 'Left 1 h 20 min',
            title:'Swift',
            tex:'Advanced iOS apps',
        }
    ]

    return(
        <SafeAreaView style={{flex:1, marginHorizontal:16}}>
            <View style={styles.container}>
                <Button onPress={() => navigation.navigate('Product')} />
                <Text style={styles.textc}>Your Courses</Text>
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
        <Pressable style={{ height:297,
        borderWidth:1, marginTop:16, borderColor:'gray',  borderRadius: 8,}}>
        <Image style={{width:'100%',}} source={DATA.image} />
        <View style={{paddingLeft: 16, marginTop: 16,}}>
        <Text style={styles.minute}>{DATA.minute}</Text>
        <Text style={styles.ui}>{DATA.title}</Text>
        <Text style={styles.advanced}>{DATA.tex}</Text>
        </View>
      </Pressable>
    );
  };

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop: 52,
    },
    textc:{
        fontSize: 24,
        color:'#3C3A36',
        fontWeight:'bold',
    },
    minute:{
        fontSize: 12,
        color:'#5BA092',
    },
    ui:{
        fontSize:24,
        fontWeight:'bold',
        color:'#3C3A36',
    },
    advanced:{
        fontSize: 14,
        color:'#3C3A36',
        marginTop: 4,
    },
})