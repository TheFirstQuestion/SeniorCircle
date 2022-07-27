import { StyleSheet, Text, SafeAreaView, Pressable, Button, View, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BetterButton from "../components/BetterButton";
import Images from "../Themes/images.js";
import GlobalStyles from "../Themes/global-styles";
import Colors from "../Themes/colors.js";


export default function ViewPost({ navigation, route }) {

  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
    <View style={{...GlobalStyles.container}}>
        <View style={{...GlobalStyles.backgroundDiv, ...GlobalStyles.gardenSky}}>
            <Image
                source={Images.group}
                style={GlobalStyles.gardenImage}
            />
        </View>

        <View style={{...GlobalStyles.backgroundDiv, ...GlobalStyles.gardenGrass}}>
            <BetterButton
                title="Edit post"
                onPress={() => {
                    navigation.navigate('EditPost', {
                        text: ((route.params && Object.keys(route.params)) ? route.params.text : "Eva F, Marcy O, Herb P, and Dale B folded napkins to get us ready for Happy Hour. Thank you all for making our community a brighter place!"),
                    });
                }}
                color={Colors.cream}
            />
        </View>

        <View style={{...GlobalStyles.backgroundDiv, ...GlobalStyles.gardenDirt, ...GlobalStyles.col}}>
            <View style={{...GlobalStyles.gardenWhite, ...GlobalStyles.roundedNotPill, backgroundColor: Colors.brown}}>
                <Text style={{...GlobalStyles.regText}}>{(route.params && Object.keys(route.params)) ? route.params.text : "Eva F, Marcy O, Herb P, and Betty M folded napkins to get us ready for Happy Hour. Thank you all for making our community a brighter place!"}</Text>
            </View>
            <BetterButton
                title="Back"
                onPress={() => {
                    navigation.navigate('HappyHourDetail');
                }}
                color={Colors.background}
            />
        </View>
    </View>
    </SafeAreaView>
    );
}
