import { StyleSheet, Text, SafeAreaView, Pressable, Button, View, Image, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BetterButton from "../components/BetterButton";
import Images from "../Themes/images.js";
import { HeaderHeightContext } from "@react-navigation/stack";
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles";


export default function EditPost({ navigation, route }) {
    const [text, onChangeText] = useState((route.params && Object.keys(route.params)) ? route.params.text : "Eva F, Marcy O, Herb P, and Dale B folded napkins to get us ready for Happy Hour. Thank you all for making our community a brighter place!");

    return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={GlobalStyles.CONSTANTS.top}
            contentContainerStyle={{flex: 1}}
        >

            <View style={{...GlobalStyles.backgroundDiv, ...GlobalStyles.gardenSky, flexDirection: "row", justifyContent: "space-between"}}>
                <Image
                    source={Images.group}
                    style={{...GlobalStyles.gardenImage, maxWidth: "68%", marginRight: "2%"}}
                />
                <Image
                    source={Images.newPhoto}
                    style={{...GlobalStyles.gardenImage, maxWidth: "28%", marginLeft: "2%"}}
                />
            </View>

            <View style={{...GlobalStyles.backgroundDiv, ...GlobalStyles.gardenGrass}}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <BetterButton
                        title="Cancel"
                        onPress={() => {
                            navigation.pop(1);
                        }}
                        width={"45%"}
                        color={Colors.cream}
                    />
                    <BetterButton
                        title="Save"
                        onPress={() => {
                            navigation.navigate('ViewPost', {
                                text: text,
                            });
                        }}
                        width={"45%"}
                        color={Colors.cream}
                    />
                </View>
            </View>

            <View style={{...GlobalStyles.backgroundDiv, ...GlobalStyles.gardenDirt, ...GlobalStyles.col}}>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    defaultValue={(route.params && Object.keys(route.params)) ? route.params.text : "Eva F, Marcy O, Herb P, and Dale B folded napkins to get us ready for Happy Hour. Thank you all for making our community a brighter place!"}
                    autoFocus={true}
                    multiline={true}
                    onSubmitEditing={() => {
                        navigation.navigate('ViewPost', {
                            text: text,
                        });
                    }}
                    returnKeyType="done"
                    selectTextOnFocus={true}
                    style={{...GlobalStyles.gardenWhite, ...GlobalStyles.roundedNotPill, ...GlobalStyles.regText}}
                />

                <BetterButton
                    title="Back"
                    onPress={() => {
                        navigation.pop(1);
                    }}
                    color={Colors.background}
                />
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
}
