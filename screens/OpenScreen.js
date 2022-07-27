import { StyleSheet, Button, View, Image, Animated, Text, SafeAreaView } from "react-native";
import React, { Component, useRef, useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import Colors from "../Themes/colors.js";
import GlobalStyles from "../Themes/global-styles.js";
import Images from "../Themes/images.js";
import BetterButton from '../components/BetterButton.js';
import { db } from '../firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import CheckIn1 from '../screens/CheckIn1';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/EventCarouselCardItem'


export default function OpenScreen({navigation, route}) {
    // Retrieve user data
    const [taskData, setTaskData] = useState({});
    const getDocument = async () => {
      //const collRef = collection(db, "tasks/TaskSample1")
      const docRef = doc(db, "users", "StevenInfo");
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

    // For the Carousel
    const isCarousel = React.useRef(null);
    const upcomingEvents = [
        {
            title: "Happy Hour",
            body: "Friday, 5pm, dining room",
            img: "drink"
        },
        {
            title: "Marcy's Surprise Party",
            body: "March 15th @ 3pm",
            img: "celebration"
        },
        {
            title: "St. Patrick's Day",
            body: "March 17th! Don't forget to wear green!",
            img: "shamrock"
        }
    ];

    return (
        <SafeAreaView style={{...GlobalStyles.safeAreaView, backgroundColor: Colors.blue}}>
        <FadeContent>
            <View style={{...GlobalStyles.container, ...styles.container}}>
                <Text style={GlobalStyles.h1}>
                    Good Morning, {taskData.name}!
                </Text>
                <Image
                    source={Images.logo}
                    style={styles.logo}
                />
                <BetterButton
                    title="Check In"
                    onPress={() => {
                        navigation.navigate('CheckIn1');
                    }}
                    border={true}
                />
                <View style={{...styles.eventsWrapper, ...GlobalStyles.roundedNotPill}}>
                    <View style={styles.eventsTitle}>
                        <Text style={GlobalStyles.smallHeading}>Upcoming Events:</Text>
                    </View>
                    <Carousel
                       layout="default"
                       ref={isCarousel}
                       data={upcomingEvents}
                       renderItem={CarouselCardItem}
                       sliderWidth={SLIDER_WIDTH}
                       itemWidth={ITEM_WIDTH}
                       useScrollView={true}
                       inactiveSlideOpacity={0}
                       autoplay={true}
                       lockScrollWhileSnapping={true}
                       loop={true}
                       autoplayInterval={4000}
                     />
                </View>
            </View>
        </FadeContent>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
    },
    logo: {
        resizeMode: "contain",
        height: 150 * GlobalStyles.CONSTANTS.borderWidth,
        width: 400 * GlobalStyles.CONSTANTS.borderWidth,
        marginLeft: 3 * GlobalStyles.CONSTANTS.borderWidth,
    },
    eventsWrapper: {
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    eventsTitle: {
        width: GlobalStyles.CONSTANTS.width - (2 * GlobalStyles.container.padding),
        backgroundColor: "#EEEEEE",
        paddingTop: 10 * GlobalStyles.CONSTANTS.borderWidth,
        paddingLeft: 20 * GlobalStyles.CONSTANTS.borderWidth,
        paddingBottom: 2 * GlobalStyles.CONSTANTS.borderWidth,
        borderTopRightRadius: GlobalStyles.roundedNotPill.borderRadius,
        borderTopLeftRadius: GlobalStyles.roundedNotPill.borderRadius,
    },
});

// via https://reactnative.dev/docs/animations
const FadeContent = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
        Animated.sequence([
            // Animated.delay(3400),
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
        ]).start();
    }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}
