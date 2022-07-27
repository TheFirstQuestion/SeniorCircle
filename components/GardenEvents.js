import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Images from '../Themes/images'
import BetterButton from "../components/BetterButton";
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles.js";

/*
This file has the styling format for the events listed in the GardenStack.
It is exported and used as EventItem in the GardenStack.
*/


export default function EventItem({ name1, name2, id, imageFile }) {
  const navigation = useNavigation();
  return (
    <View style={{...GlobalStyles.row, ...styles.eventRow}}>
        <Pressable
            onPress={() => {navigation.navigate('HappyHourDetail')}}
            style={styles.pressableArea}
        >
            <View style={{...styles.event, ...GlobalStyles.col, ...GlobalStyles.roundedNotPill}}>
                <Image style={styles.image} source={imageFile} />
                <Text style={{...GlobalStyles.regText, ...GlobalStyles.textCenter, ...styles.name}}>{name1}</Text>
            </View>
        </Pressable>

        <Pressable
            onPress={() => {navigation.navigate('HappyHourDetail')}}
            style={styles.pressableArea}
        >
            <View style={{...styles.event, ...GlobalStyles.col, ...GlobalStyles.roundedNotPill}}>
                <Image style={styles.image} source={imageFile} />
                <Text style={{...GlobalStyles.regText, ...GlobalStyles.textCenter, ...styles.name}}>{name2}</Text>
            </View>
        </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
    event: {
        backgroundColor: Colors.brown,
        height: "100%",
        padding: 5,
    },
    eventRow: {
        paddingLeft: GlobalStyles.CONSTANTS.padding,
        paddingRight: GlobalStyles.CONSTANTS.padding,
    },
    image: {
        resizeMode: 'contain',
        aspectRatio: 1,
        height: "100%",
    },
    pressableArea: {
        width: (GlobalStyles.CONSTANTS.width - 3 * GlobalStyles.CONSTANTS.padding) / 2,
        aspectRatio: 1,
        margin: GlobalStyles.CONSTANTS.padding / 2,
    },
    name: {
        top: "-79%",
        maxWidth: "88%",
    }
});
