import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import Colors from "../Themes/colors.js";
import Images from "../Themes/images.js";
import GlobalStyles from "../Themes/global-styles.js";

export const SLIDER_WIDTH = GlobalStyles.CONSTANTS.width - 2*GlobalStyles.CONSTANTS.padding;
export const ITEM_WIDTH = SLIDER_WIDTH * 0.7;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.eventsBodyWrapper} key={index}>
        <Image
            source={Images[item.img]}
            style={styles.drink}
        />
        <View style={styles.eventsBody}>
            <Text style={GlobalStyles.smallHeading}>{item.title}</Text>
            <Text style={GlobalStyles.smallText}>{item.body}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    eventsBodyWrapper: {
        padding: 13 * GlobalStyles.CONSTANTS.borderWidth,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 0,
    },
    drink: {
        resizeMode: "contain",
        height: 50 * GlobalStyles.CONSTANTS.borderWidth,
        width: 50 * GlobalStyles.CONSTANTS.borderWidth,
        marginRight: 20 * GlobalStyles.CONSTANTS.borderWidth,
        marginLeft: -30 * GlobalStyles.CONSTANTS.borderWidth,
    }
})

export default CarouselCardItem;
