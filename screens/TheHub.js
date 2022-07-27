import { StyleSheet, Text, SafeAreaView, Pressable, Button, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState, useEffect } from "react";
import Colors from "../Themes/colors.js";
import Images from "../Themes/images.js";
import GlobalStyles from "../Themes/global-styles.js";
import BetterButton from "../components/BetterButton.js";


export default function TheHub({ navigation, route }) {
    const [nextScreen, setNextScreen] = useState('');

    function NextTask() {
        if (route.params.screenName === 'TaskMain') {
            setNextScreen('NewTaskMain');
        } else {
            setNextScreen('TaskMain');
        }
    }

    useEffect(() => {
        NextTask();
    }, []);

    const vertical_adjust = 30 * GlobalStyles.CONSTANTS.borderWidth;

    let ogText = route.params.task;
    let words = ogText.split(" ");
    let ing = "";
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            if (words[i] === "fold") {
                ing = "folding";
            } else {
                ing = "decorating";
            }
        } else {
            ing = ing + " " + words[i];
        }
    }



    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
        <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
            <View style={{...GlobalStyles.swoosh, marginTop: GlobalStyles.swoosh.marginTop - vertical_adjust}}>
                <View style={{...GlobalStyles.swooshContainer, marginTop: GlobalStyles.swooshContainer.marginTop + vertical_adjust}}>
                    <Text style={{...GlobalStyles.h1, marginBottom: GlobalStyles.container.padding}}>Thanks for {ing} for {route.params.event}!</Text>
                    <Text style={{...GlobalStyles.smallHeading, ...GlobalStyles.textCenter}}>You're all done for the day!</Text>
                </View>
            </View>
        {/* For the generate new task, route back to the task + team page, but pass in params to choose the new variable data */}

        <View style={{...GlobalStyles.col, ...GlobalStyles.fullWidth}}>
            <Text style={{...GlobalStyles.regText, ...GlobalStyles.textCenter}}>We've let your community know by planting in the Garden.</Text>
            <BetterButton
                title="See the Garden"
                onPress={() => {
                    navigation.navigate('GardenStack');
                }}
                color={Colors.green}
                icon="plant"
            />
        </View>

        <View style={{...GlobalStyles.col, ...GlobalStyles.fullWidth, marginBottom: GlobalStyles.container.padding}}>
            <Text style={GlobalStyles.regText}>Feeling energetic?</Text>
            <BetterButton
                title="Do another task"
                onPress={() => {
                    navigation.navigate(nextScreen);
                }}
                color={Colors.blue}
                icon="list"
            />
        </View>
    </View>
      </SafeAreaView>
    );
  }
