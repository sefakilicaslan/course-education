import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash from "./screens/splash";
import Intro1 from "./screens/Intro1";
import Intro2 from "./screens/Intro2";
import Intro3 from "./screens/Intro3";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import profile from "./screens/profile";
import settings from "./screens/settings";
import Home from "./screens/Home";
import Results from "./screens/Results";
import Product from "./screens/Product";
import choose from "./screens/choose";
import course from "./screens/course";
import coursetests from "./screens/coursetests";
import Question from "./screens/Question";
import results2 from "./screens/results2";
import notsaved from "./screens/notsaved";
import payment from "./screens/payment";
import saved from "./screens/saved";
import added from "./screens/added";
import notfound from "./screens/notfound";

const Stack = createNativeStackNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
            headerShown: false, // Başlığı gizlemek için
            }}
            >
            <Stack.Screen name="splash" component={splash} />
            <Stack.Screen name="Intro1" component={Intro1} />
            <Stack.Screen name="Intro2" component={Intro2} />
            <Stack.Screen name="Intro3" component={Intro3} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="profile" component={profile} />
            <Stack.Screen name="settings" component={settings} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Results" component={Results} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="choose" component={choose} />
            <Stack.Screen name="course" component={course} />
            <Stack.Screen name="coursetests" component={coursetests} />
            <Stack.Screen name="Question" component={Question} />
            <Stack.Screen name="results2" component={results2} />
            <Stack.Screen name="notsaved" component={notsaved} />
            <Stack.Screen name="payment" component={payment} />
            <Stack.Screen name="saved" component={saved} />
            <Stack.Screen name="added" component={added} />
            <Stack.Screen name="notfound" component={notfound} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}