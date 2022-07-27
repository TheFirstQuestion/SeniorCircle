import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from "../Themes/global-styles.js";
import Images from "../Themes/images.js";
import Colors from "../Themes/colors.js"


export default class BetterButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        color: PropTypes.string,
        width: PropTypes.any,
        fontColor: PropTypes.string,
        icon: PropTypes.string,
    }

    constructor(props) {
        super(props);
        // Set these if they were supplied, otherwise use the defaults
        const color = props.color || Colors.yellow;
        const width = props.width || "100%";
        const fontColor = props.fontColor || "black";
        const iconName = props.icon;

        this.state = {
            color: color,
            width: width,
            fontColor: fontColor,
            border: {
                borderColor: "black",
                borderWidth: 1 * GlobalStyles.CONSTANTS.borderWidth,
            },
            icon: iconName,
        };
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.onPress()}
                style={{...styles.wrapper, ...GlobalStyles.shadow, width: this.state.width}}
            >
                <View style={{...styles.button, ...GlobalStyles.rounded, backgroundColor: this.state.color, ...this.state.border}}>
                    {
                        this.state.icon ?
                        <Image
                            source={Images[this.state.icon]}
                            style={GlobalStyles.icon}
                        />
                        : <></>
                    }
                    <Text style={{...styles.text, color: this.state.fontColor}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        marginTop: 10 * GlobalStyles.CONSTANTS.borderWidth,
        padding: 10 * GlobalStyles.CONSTANTS.borderWidth,
        alignItems: "center",
        marginBottom: 10 * GlobalStyles.CONSTANTS.borderWidth,
        textAlign: "center",
        flexDirection: "row",
    },
    text: {
        fontSize: GlobalStyles.regText.fontSize,
        textAlign: "center",
        fontFamily: GlobalStyles.regText.fontFamily,
    },
    wrapper: {
        textAlign: "center",
    }
});
