import { StyleSheet, Text, Button, View, Image, SafeAreaView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { Overlay } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles.js";
import Images from "../Themes/images.js";
import BetterButton from "../components/BetterButton.js";


const Stack = createStackNavigator();

export default function WaitForHelp({ navigation, route }) {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
      setVisible(!visible);
  };

  function CancelHelp() {
    setVisible(!visible);
    navigation.pop(2);
  }

  function HelpArrived() {
    navigation.pop(2);
  }

  const vertical_adjust = 50 * GlobalStyles.CONSTANTS.borderWidth;

  return (
      <SafeAreaView style={GlobalStyles.safeAreaView}>
      <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
          <View style={{...GlobalStyles.swoosh, marginTop: GlobalStyles.swoosh.marginTop + vertical_adjust}}>
              <View style={{...GlobalStyles.swooshContainer, ...GlobalStyles.col, marginTop: GlobalStyles.swooshContainer.marginTop - vertical_adjust}}>
                  <Text style={GlobalStyles.h1}>Joe is on his way!</Text>
                  <Image
                    source={Images.running}
                  />
                  </View>
              </View>

        <View style={GlobalStyles.fullWidth}>
          <BetterButton
            title="Help has arrived!"
            onPress={HelpArrived}
          />
        <BetterButton
          title="Cancel this call"
          onPress={toggleOverlay}
          color={Colors.background}
        />
        <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{width: (GlobalStyles.CONSTANTS.width - 2*GlobalStyles.CONSTANTS.padding)}}
        >
            <Text style={GlobalStyles.medHeading}>Just to confirm:</Text>
            <Text style={{...GlobalStyles.regText, ...GlobalStyles.textCenter}}>
            Do you want to cancel your call to Joe?
            </Text>
          <View>
              <BetterButton
                  title="Yes, I'm good"
                  onPress={CancelHelp}
              />
              <BetterButton
                  title="No, I still need assistance"
                  onPress={toggleOverlay}
                  color={Colors.background}
              />
          </View>
        </Overlay>
        </View>
    </View>
    </SafeAreaView>
  );
}
