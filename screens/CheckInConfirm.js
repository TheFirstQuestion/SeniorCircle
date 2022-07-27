import { StyleSheet, Text, SafeAreaView, Pressable, Button, View } from "react-native";
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles.js";
import BetterButton from "../components/BetterButton.js";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function CheckInConfirm({navigation, route}) {
    const vertical_adjust = 140 * GlobalStyles.CONSTANTS.borderWidth;
    // TODO: specify good line breaks in "thanks for checking in"

    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
        <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
        <View style={{...GlobalStyles.swoosh, marginTop: GlobalStyles.swoosh.marginTop + vertical_adjust}}>
            <View style={{...GlobalStyles.swooshContainer, marginTop: GlobalStyles.swooshContainer.marginTop - vertical_adjust}}>
                    <Text style={{...GlobalStyles.h1, marginBottom: "10%"}}>Thanks for checking in!</Text>
                    <Text style={GlobalStyles.medHeading}>To confirm:{"\n"}you're feeling{"\n"}
                        <Text style={GlobalStyles.emphasis}>{route.params.energyLevel}</Text> and
                        <Text style={GlobalStyles.emphasis}> {route.params.socialLevel}</Text>?
                    </Text>
                </View>
            </View>

            <View style={GlobalStyles.div}>
                <BetterButton
                    title="Yes!"
                    onPress={() => {
                        navigation.navigate('TaskMain');
                    }}
                    border={true}
                />
                 <BetterButton
                    title="No, let me answer again"
                    onPress={() => {
                        navigation.navigate('CheckIn1');
                    }}
                    color={Colors.creme}
                />
            </View>
        </View>
        </SafeAreaView>
    );
}
