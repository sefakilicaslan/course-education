import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TextInput, FlatList } from "react-native";

export default () => {


    const DATA = [
        {
            id:0,
            title:'#CSS'
        },
        {
            id:1,
            title:'#UX'
        },
        {
            id:2,
            title:'#Swift'
        },
        {
            id:3,
            title:'#UI'
        }
    ]

    const DATA2 = [
        {
            id:0,
            image: require('../assets/UI.png'),
            minute: '3 h 30 min',
            title:'UI',
            tex:'Advanced mobile interface design',
        },
        {
            id:1,
            image: require('../assets/html.png'),
            minute: '3 h 30 min',
            title:'HTML',
            tex:'Advanced web applications',
        }
    ]
    


    return(
        <SafeAreaView>
            <View style={{ flexDirection: 'row', marginTop: 52, marginHorizontal: 16, justifyContent: 'space-between', alignItems: 'center', }}>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                 <Text style={styles.texth}>Hello,</Text>
                <Text style={styles.textj}>Juan Antania</Text>
            </View>
            <Pressable style={{justifyContent:'center'}}>
                 <Image source={require('../assets/mute.png')}  />
            </Pressable>
             </View>
             <View style={{borderWidth: 1, marginTop: 16, justifyContent:'space-between', paddingHorizontal:16, borderRadius:16, marginHorizontal: 16, flexDirection:'row', alignItems:'center'}}>
                <TextInput  placeholder="Search Course" />
                <Image source={require('../assets/search.png')}/>
             </View>
             <FlatList
          data={DATA}
          horizontal
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => <Box DATA={item} />} 
        />



            <FlatList 
            data={DATA2}
            keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => <Entrance DATA2={item} />}  />



        </SafeAreaView>
    )
}

const Box = ({ DATA }) => {
    return (
      <Pressable style={{ flexDirection: 'row', marginTop: 12, backgroundColor:'#65AAEA', width: 54, height: 24, borderRadius: 12, justifyContent:'center', alignItems:'center' }}>
        <Text style={{color:'white'}}>{DATA.title}</Text>
      </Pressable>
    );
  };
  
  const Entrance = ({ DATA2 }) => {
    return (
      <Pressable style={{marginHorizontal:16, width:'100%', borderWidth:1, marginTop:16, borderColor:'gray',}}>
        <Image source={DATA2.image} />
        <Text style={styles.minute}>{DATA2.minute}</Text>
        <Text style={styles.ui}>{DATA2.title}</Text>
        <Text style={styles.advanced}>{DATA2.tex}</Text>
      </Pressable>
    );
  };


const styles = StyleSheet.create({
    texth: {
        fontSize: 16,
        color:'#3C3A36',
    },
    textj:{
        fontSize: 32,
        fontWeight: 'bold',
        color:'#333333',    
    },
    minute:{
        fontSize: 12,
        color:'#5BA092'
    },
    ui:{
        fontSize:24,
        fontWeight:'bold',
        color:'#3C3A36'
    },
    advanced:{
        fontSize: 14,
        color:'#3C3A36',
    },
    box:{
        marginHorizontal: 16,
        marginTop:16,
    }
})