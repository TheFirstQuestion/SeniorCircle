import { StyleSheet, Text, Button, View, SafeAreaView } from "react-native";
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles.js";
import BetterButton from "../components/BetterButton.js";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function CheckIn2({navigation, route}) {

    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
        <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
            <View style={GlobalStyles.swoosh}>
                <View style={GlobalStyles.swooshContainer}>
                    <Text style={GlobalStyles.h1}>How <Text style={GlobalStyles.emphasis}>social</Text> do you feel today?</Text>
                </View>
            </View>

            <View style={{...GlobalStyles.fullWidth, marginBottom: GlobalStyles.container.padding}}>
                <BetterButton
                    title="very social"
                    onPress={() => {
                        navigation.navigate('CheckInConfirm',
                        { energyLevel: route.params.energyLevel,
                          socialLevel: 'very social'
                        });
                    }}
                />
                <BetterButton
                    title="moderately social"
                    onPress={() => {
                        navigation.navigate('CheckInConfirm',
                        { energyLevel: route.params.energyLevel,
                          socialLevel: 'moderately social'
                        });
                    }}
                />
                <BetterButton
                    title="not very social"
                    onPress={() => {
                        navigation.navigate('CheckInConfirm',
                        { energyLevel: route.params.energyLevel,
                          socialLevel: 'not very social'
                        });
                    }}
                />
            </View>
        </View>
        </SafeAreaView>
    );
}
