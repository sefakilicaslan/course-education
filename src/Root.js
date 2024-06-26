import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import yourcourse from "./screens/yourcourse";
import chooselesson from "./screens/chooselesson";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="splash" component={splash} />
                <Stack.Screen name="Intro1" component={Intro1} />
                <Stack.Screen name="Intro2" component={Intro2} />
                <Stack.Screen name="Intro3" component={Intro3} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="profile" component={TabNavigator} />
                <Stack.Screen name="settings" component={TabNavigator} />
                <Stack.Screen name="Home" component={TabNavigator} />
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
                <Stack.Screen name="yourcourse" component={yourcourse} />
                <Stack.Screen name="chooselesson" component={chooselesson} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Courses" component={Home} />
            <Tab.Screen name="Profile" component={profile} />
            <Tab.Screen name="Settings" component={settings} />
        </Tab.Navigator>
    );
}

