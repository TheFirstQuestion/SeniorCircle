import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView, Pressable, Button, View, Image, FlatList, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import Colors from "./Themes/colors";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import OpenScreen from './screens/OpenScreen';
import CheckIn1 from './screens/CheckIn1';
import CheckIn2 from './screens/CheckIn2';
import CheckInConfirm from './screens/CheckInConfirm';
import TaskMain from './screens/TaskMain';
import TaskMain2 from './screens/TaskMain2';
import GardenStack from './screens/GardenStack';
import HelpStack from './screens/HelpStack';
import WaitForHelp from './screens/WaitForHelp';
import TheHub from './screens/TheHub';
import HappyHourDetail from './screens/HappyHourDetail'
import ViewPost from './screens/ViewPost';
import EditPost from './screens/EditPost';
import NewTaskMain from './screens/NewTaskMain';
//import { useFonts } from "expo-font";
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';
import AppLoading from  "expo-app-loading";

const Stack = createStackNavigator();

export default function App() {
  // LOAD FONTS
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  });
  if (!fontsLoaded) return <AppLoading />;



  return (
    <NavigationContainer>
        {/* via https://stackoverflow.com/a/36186625 */}
        <StatusBar hidden />

      <Stack.Navigator
        screenOptions={{
            headerShown: false, // hide the white "Back" header at the top
            animationEnabled: false, // disable the default L/R "paging" for iOS (counterintuitive if revisiting a page)
        }}
      >
        <Stack.Screen name="OpenScreen" component={OpenScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CheckIn1" component={CheckIn1} />
        <Stack.Screen name="CheckIn2" component={CheckIn2} />
        <Stack.Screen name="CheckInConfirm" component={CheckInConfirm} />

        <Stack.Screen name="TaskMain" component={TaskMain} />
        <Stack.Screen name="TaskMain2" component={TaskMain2} />
        <Stack.Screen name="TheHub" component={TheHub} />
        <Stack.Screen name="NewTaskMain" component={NewTaskMain} />

        <Stack.Screen name="GardenStack" component={GardenStack} />
        <Stack.Screen name="HappyHourDetail" component={HappyHourDetail} />
        <Stack.Screen name="ViewPost" component={ViewPost} />
        <Stack.Screen name="EditPost" component={EditPost} options={{postText:''}} />

        <Stack.Screen name="HelpStack" component={HelpStack} />
        <Stack.Screen name="WaitForHelp" component={WaitForHelp} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
