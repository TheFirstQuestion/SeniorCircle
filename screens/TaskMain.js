import { StyleSheet, Text, Button, View, Image, SafeAreaView } from "react-native";
import { Overlay } from 'react-native-elements';
import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer, TabActions, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from "../Themes/colors.js";
import Images from "../Themes/images.js";
import GlobalStyles from "../Themes/global-styles.js";
import BetterButton from "../components/BetterButton.js";
import { db } from '../firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { initialWindowMetrics } from "react-native-safe-area-context";


export default function TaskMain({navigation, route}) {
    // Retrieve user data
    const [taskData, setTaskData] = useState({});
    const getDocument = async () => {
      const docRef = doc(db, "tasks", "TaskSample1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTaskData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    useEffect(() => {
      getDocument();
    }, []);

    // adding overlay info button
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    function TaskDone() {
        setVisible(!visible);
        navigation.navigate('TheHub');
    }

    const vertical_adjust = -140 * GlobalStyles.CONSTANTS.borderWidth;

    return (
        <SafeAreaView style={GlobalStyles.safeAreaView}>
      <View style={{...GlobalStyles.container}}>
        <View style={{...GlobalStyles.container, ...GlobalStyles.swooshWrapper}}>
            <View style={{...GlobalStyles.swoosh, marginTop: GlobalStyles.swoosh.marginTop + vertical_adjust}}>
                <View style={{...GlobalStyles.swooshContainer, marginTop: GlobalStyles.swooshContainer.marginTop - vertical_adjust}}>
                    {/* inserting narrow non-breaking spaces to force it to fit on one line... via https://zpl.fi/hyphenation-in-react-native/ */}
                    <Text style={GlobalStyles.medHeading}>Your{'\u202F'}task{'\u202F'}for{'\u202F'}today: {taskData.task} for {taskData.event}!</Text>
            </View>
        </View>

        <View style={GlobalStyles.fullWidth}>
            <Text style={{...GlobalStyles.smallHeading, marginBottom: 10 * GlobalStyles.CONSTANTS.borderWidth}}>Your team:</Text>
            <View style={GlobalStyles.row}>
                <View style={GlobalStyles.col}>
                    <Image
                        source={Images.lady1}
                        style={styles.teamMemberImage}
                    />
                    <Text style={GlobalStyles.smallText}>{taskData.member1}</Text>
                </View>
                <View style={GlobalStyles.col}>
                    <Image
                        source={Images.man1}
                        style={styles.teamMemberImage}
                    />
                    <Text style={GlobalStyles.smallText}>{taskData.member2}</Text>
                </View>
                <View style={GlobalStyles.col}>
                    <Image
                        source={Images.lady2}
                        style={styles.teamMemberImage}
                    />
                    <Text style={GlobalStyles.smallText}>{taskData.member3}</Text>
                </View>
            </View>


            <View style={{...GlobalStyles.row, ...styles.timePlace, marginTop: 10}}>
                <Text style={GlobalStyles.smallHeading}>Time:{"\t"}</Text>
                <Text style={GlobalStyles.regText}>{taskData.time}</Text>
            </View>
            <View style={{...GlobalStyles.row, ...styles.timePlace}}>
                <Text style={GlobalStyles.smallHeading}>Place:{"\t"}</Text>
                <Text style={GlobalStyles.regText}>{taskData.place}</Text>
            </View>
        </View>

        <BetterButton
              title="I've met with my team, we're ready to start!"
              onPress={() => {
                  navigation.navigate('TaskMain2', {
                    task: taskData.task,
                    event: taskData.event,
                    screenName: 'TaskMain',
                });
              }}
        />

        <View style={{...GlobalStyles.row, ...GlobalStyles.fullWidth, justifyContent: "space-between"}}>
            <BetterButton
                title="Staff"
                onPress={() => {
                    navigation.navigate('HelpStack');
                }}
                color={Colors.background}
                width={"45%"}
                icon="phone"
            />
            <BetterButton
                title="Garden"
                onPress={() => {
                    navigation.navigate('GardenStack');
                }}
                color={Colors.green}
                width={"45%"}
                icon="plant"
              />
        </View>
        </View>
      </View>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    teamMemberImage: {
        height: 70 * GlobalStyles.CONSTANTS.borderWidth,
        width: 70 * GlobalStyles.CONSTANTS.borderWidth,
        borderRadius: 70 / 2,
        borderColor: "black",
        borderWidth: 1 * GlobalStyles.CONSTANTS.borderWidth,
    },
    timePlace: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: "left",
    }
});
