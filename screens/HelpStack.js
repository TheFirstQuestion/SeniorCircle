import { StyleSheet, Text, Button, View, Image, SafeAreaView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles.js";
import Images from "../Themes/images.js";
import BetterButton from "../components/BetterButton.js";


const Stack = createStackNavigator();

export default function HelpStack({ navigation, route}) {
    const vertical_adjust = 150 * GlobalStyles.CONSTANTS.borderWidth;

  return (
      <SafeAreaView style={GlobalStyles.safeAreaView}>
      <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
          <View style={{...GlobalStyles.swoosh, marginTop: GlobalStyles.swoosh.marginTop + vertical_adjust}}>
              <View style={{...GlobalStyles.swooshContainer, marginTop: GlobalStyles.swooshContainer.marginTop - vertical_adjust}}>
                <Text style={GlobalStyles.h1}>Call for Staff Assistance</Text>
                  <View style={GlobalStyles.col}>
                      <Image
                          source={Images.chef}
                          style={styles.pic}
                      />
                    <Text style={GlobalStyles.regText}>Joe, Kitchen Manager</Text>
                  </View>
            </View>
        </View>

        <View style={GlobalStyles.fullWidth}>
          <BetterButton
              title="Call for help"
              onPress={() => {
                navigation.navigate('WaitForHelp');
              }}
          />
          <BetterButton
              title="Go back"
              onPress={() => {
                navigation.pop(1);
              }}
              color={Colors.background}
          />
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    pic: {
        height: (GlobalStyles.CONSTANTS.width - 4*GlobalStyles.CONSTANTS.padding)  * GlobalStyles.CONSTANTS.borderWidth,
        width: (GlobalStyles.CONSTANTS.width - 4*GlobalStyles.CONSTANTS.padding) * GlobalStyles.CONSTANTS.borderWidth,
        borderRadius: 70 / 2,
        borderColor: "black",
        borderWidth: 1 * GlobalStyles.CONSTANTS.borderWidth,
        marginTop: "10%",
        marginBottom: 6 * GlobalStyles.CONSTANTS.borderWidth,
    },
});
