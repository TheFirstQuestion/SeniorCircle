import { StyleSheet, Text, SafeAreaView, Pressable, Button, View } from "react-native";
import { Overlay, Icon } from 'react-native-elements';
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import React, { Component } from 'react';
import { NavigationContainer, TabActions, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../Themes/colors.js";
import Images from "../Themes/images.js";
import GlobalStyles from "../Themes/global-styles.js";
import BetterButton from "../components/BetterButton.js";
//import { OverlayButton } from '../OverlayButton'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function TaskMain2({navigation, route}) {

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    function TaskDone() {
        setVisible(!visible);
        navigation.navigate('TheHub', {
            screenName: route.params.screenName,
            task: route.params.task,
            event: route.params.event,
        });
    }

    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
        <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
            <View style={GlobalStyles.swoosh}>
                <View style={GlobalStyles.swooshContainer}>
                    <Text style={GlobalStyles.h1}>Let's {route.params.task} for {route.params.event}!</Text>
                </View>
            </View>

        <View style={{...GlobalStyles.fullWidth, marginBottom: GlobalStyles.container.padding}}>
            <BetterButton
                title="We're finished!"
                onPress={toggleOverlay}
                border={true}
                icon="check"
            />

            <BetterButton
                title="Request assistance"
                onPress={() => {
                    navigation.navigate('HelpStack');
                }}
                color={Colors.background}
                icon="phone"
            />
        </View>

        <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{width: (GlobalStyles.CONSTANTS.width - 2*GlobalStyles.CONSTANTS.padding)}}
        >
            <Text style={GlobalStyles.medHeading}>Just to confirm:</Text>
            <Text style={{...GlobalStyles.regText, ...GlobalStyles.textCenter}}>
                Are you done with your task?
            </Text>
            <View>
                <BetterButton
                    title="Yes!"
                    onPress={TaskDone}
                    border={true}
                />
                <BetterButton
                    title="No, go back"
                    onPress={toggleOverlay}
                    color={Colors.background}
                />
                </View>
        </Overlay>
        </View>
      </SafeAreaView>
    );
}
