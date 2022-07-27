import { StyleSheet, Text, SafeAreaView, Pressable, Button, View, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BetterButton from "../components/BetterButton";
import Images from "../Themes/images.js";
import GlobalStyles from "../Themes/global-styles.js";
import Colors from "../Themes/colors.js";


export default function HappyHourDetail({ navigation, route }) {
    const vertical_adjust = -200;

  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
    <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
        <View style={{...GlobalStyles.swoosh, backgroundColor: Colors.green, marginTop: GlobalStyles.swoosh.marginTop + vertical_adjust}}>
            <View style={{...GlobalStyles.swooshContainer, marginTop: GlobalStyles.swooshContainer.marginTop - vertical_adjust}}>
                <Text style={GlobalStyles.h1}>Happy Hour!</Text>
            </View>
        </View>

        <View style={{...GlobalStyles.roundedNotPill, ...styles.plot, ...GlobalStyles.col}}>
            <View style={GlobalStyles.row}>
                <Pressable
                    onPress={() => {navigation.navigate('ViewPost')}}
                    style={{...styles.pressableArea, ...GlobalStyles.col}}
                >
                    <Image style={styles.image} source={Images.plant}/>
                    <Text style={{...GlobalStyles.smallText, ...GlobalStyles.textCenter}}>Pour Drinks</Text>
                </Pressable>
                <Pressable
                    onPress={() => {navigation.navigate('ViewPost')}}
                    style={{...styles.pressableArea, ...GlobalStyles.col}}
                >
                    <Image style={styles.image} source={Images.plant}/>
                    <Text style={{...GlobalStyles.smallText, ...GlobalStyles.textCenter}}>Scoop Ice Cream</Text>
                </Pressable>
            </View>
            <View style={GlobalStyles.row}>
                <Pressable
                    onPress={() => {navigation.navigate('ViewPost')}}
                    style={{...styles.pressableArea, ...styles.col}}
                >
                    <Image style={styles.image} source={Images.plant}/>
                    <Text style={{...GlobalStyles.smallText, ...GlobalStyles.textCenter}}>Put Up Flyers</Text>
                </Pressable>
                <Pressable
                    onPress={() => {navigation.navigate('ViewPost')}}
                    style={{...styles.pressableArea, ...styles.col}}
                >
                    <Image style={styles.image} source={Images.plant}/>
                    <Text style={{...GlobalStyles.smallText, ...GlobalStyles.textCenter}}>Fold Napkins</Text>
                </Pressable>
            </View>
            <View style={GlobalStyles.row}>
                <Pressable
                    onPress={() => {navigation.navigate('ViewPost')}}
                    style={{...styles.pressableArea, ...styles.col}}
                >
                    <Image style={styles.image} source={Images.plant}/>
                    <Text style={{...GlobalStyles.smallText, ...GlobalStyles.textCenter}}>Bake Cookies</Text>
                </Pressable>
                <Pressable
                    onPress={() => {navigation.navigate('ViewPost')}}
                    style={{...styles.pressableArea, ...styles.col}}
                >
                    <Image style={styles.image} source={Images.plant}/>
                    <Text style={{...GlobalStyles.smallText, ...GlobalStyles.textCenter}}>Clean the Lounge</Text>
                </Pressable>
            </View>

        </View>

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
    plot: {
        width: "100%",
        aspectRatio: 3/4,
        backgroundColor: Colors.brown,
        padding: 0,
    },
    image: {
        resizeMode: 'contain',
        aspectRatio: 1,
        height: "75%",
    },
    pressableArea: {
        aspectRatio: 8/7,
        width: "50%",
        padding: 5,
        // borderColor: "black",
        // borderWidth: 1,
    },
    col: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    }
});
