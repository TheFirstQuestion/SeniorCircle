import { StyleSheet, Text, SafeAreaView, Pressable, Button, View, FlatList, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import EventItem from "../components/GardenEvents";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Images from '../Themes/images'
import BetterButton from "../components/BetterButton";
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles.js";


export default function GardenStack({ navigation, route }) {

  // HARDCODED ARRAY FOR PAST EVENT ENTRIES
  // id: just the number for the unique item
  // name1: the name of the event to show up on the left side  of the row
  // name2: the name of the event to show up on the right side of the row
  const DATA = [
    {
      id: '1',
      name1: 'Bingo Night',
      name2: 'Visitor Day',
    },
    {
      id: '2',
      name1: 'Movie Night',
      name2: 'Meryl\'s Birthday',
    },
    {
      id: '3',
      name1: '4th of July',
      name2: 'Happy Hour',
    },
    {
      id: '4',
      name1: 'Wii Bowling',
      name2: 'Scrabble Night',
    },
    {
      id: '5',
      name1: 'Paint & Punch',
      name2: 'Men\'s Lunch',
    },
    {
      id: '6',
      name1: 'Afternoon Tea',
      name2: 'Karaoke Night',
    },
  ];

  // FlatList render function
  const renderItem = (item) => (
    <EventItem
      name1={item.name1}
      name2={item.name2}
      id={item.id}
      imageFile={Images.sign}
    />
  );

  const vertical_adjust = -110 * GlobalStyles.CONSTANTS.borderWidth;

  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
    <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
        <View style={{...GlobalStyles.swoosh, backgroundColor: Colors.green, marginTop: GlobalStyles.swoosh.marginTop + vertical_adjust}}>
            <View style={{...GlobalStyles.swooshContainer, marginTop: GlobalStyles.swooshContainer.marginTop - vertical_adjust}}>
                <Text style={GlobalStyles.h1}>Community Garden</Text>
                <Text style={{...GlobalStyles.regText, ...GlobalStyles.textCenter, marginTop: 14 * GlobalStyles.CONSTANTS.borderWidth}}>Tap a sign to see photos and memories of a past event!</Text>
            </View>
        </View>

        <FlatList
            data={DATA} // the array of data that the FlatList displays
            renderItem={({item}) => renderItem(item)} // function that renders each item
            keyExtractor={(item) => item.id} // unique key for each item
            style={styles.scrollArea}
        />

        <BetterButton
            title="Back"
            onPress={() => {
                navigation.pop(1);
            }}
            color={Colors.background}
        />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    scrollArea: {
        width: GlobalStyles.CONSTANTS.width + GlobalStyles.CONSTANTS.padding,
        marginTop: -100,
        paddingTop: 100,
        zIndex: -9,
        paddingBottom: 100,
        marginBottom: "5%",
    }
});
