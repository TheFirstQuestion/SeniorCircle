import { StyleSheet, Dimensions } from "react-native";
import Colors from "./colors.js";
import { initialWindowMetrics } from "react-native-safe-area-context";

// console.log(initialWindowMetrics);

const TOP = initialWindowMetrics.insets.top || 0;
const BOTTOM = initialWindowMetrics.insets.bottom || 0;
const RIGHT = initialWindowMetrics.insets.right || 0;
const LEFT = initialWindowMetrics.insets.left || 0;

const SCREEN_WIDTH = Dimensions.get('window').width - LEFT - RIGHT;
const SCREEN_HEIGHT = Dimensions.get('window').height - BOTTOM - TOP;
const MAIN_PADDING = SCREEN_WIDTH / 10;
const PIXEL = SCREEN_WIDTH / 400; // I use this to scale up / down from "regular" bc I'm lazy


const GlobalStyles = StyleSheet.create({
    CONSTANTS: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        padding: MAIN_PADDING,
        borderWidth: PIXEL,
        left: LEFT,
        right: RIGHT,
        top: TOP,
        bottom: BOTTOM,
    },
    safeAreaView: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    container: {
      backgroundColor: Colors.background,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-between",
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      padding: MAIN_PADDING,
      marginTop: TOP,
      marginBottom: BOTTOM,
    },
    div: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    col: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    h1: {
        fontSize: 36 * PIXEL,
        lineHeight: 44 * PIXEL,
        textAlign: "center",
        fontFamily: 'Nunito_600SemiBold',
    },
    regText: {
        fontSize: 22 * PIXEL,
        lineHeight: 25 * PIXEL,
        fontFamily: 'Nunito_500Medium',
    },
    smallText: {
        fontSize: 20 * PIXEL,
        lineHeight: 24 * PIXEL,
        fontFamily: 'Nunito_500Medium',
    },
    smallHeading: {
        fontSize: 26 * PIXEL,
        lineHeight: 28 * PIXEL,
        fontWeight: "bold",
        fontFamily: 'Nunito_500Medium',
    },
    medHeading: {
        fontSize: 30 * PIXEL,
        lineHeight: 40 * PIXEL,
        textAlign: "center",
        fontFamily: 'Nunito_500Medium',
    },
    rounded: {
        borderRadius: 90,
    },
    roundedNotPill: {
        borderRadius: 20,
    },
    shadow: {
        shadowOffset: {
            height: 3 * PIXEL,
            width: 3 * PIXEL,
        },
        shadowRadius: 2 * PIXEL,
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    fullWidth: {
        width: "100%",
    },
    textCenter: {
        textAlign: "center",
    },
    emphasis: {
        textDecorationLine: "underline",
    },
    icon: {
        height: 30 * PIXEL,
        width: 30 * PIXEL,
        marginRight: "3.5%",
    },
    swoosh: {
        // via https://stackoverflow.com/a/55645997
        backgroundColor: Colors.blue,
        marginTop: -(2 * MAIN_PADDING + MAIN_PADDING + SCREEN_HEIGHT / 2) + initialWindowMetrics.insets.top,
        paddingTop: MAIN_PADDING + SCREEN_HEIGHT / 2,
        borderRadius: SCREEN_WIDTH,
        width: SCREEN_WIDTH * 2,
        height: SCREEN_WIDTH * 2,
        position: "relative",
    },
    swooshContainer: {
        marginTop: 2*MAIN_PADDING,
        left: (SCREEN_WIDTH / 2) + MAIN_PADDING,
        width: SCREEN_WIDTH - 2*MAIN_PADDING,
        textAlign: "center"
    },
    swooshWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    backgroundDiv: {
        width: SCREEN_WIDTH,
        zIndex: 10,
        position: "absolute",
        padding: MAIN_PADDING,
    },
    gardenSky: {
        backgroundColor: Colors.blue,
        height: SCREEN_HEIGHT * 0.3,
        top: TOP,
    },
    gardenGrass: {
        backgroundColor: Colors.green,
        top: TOP + (SCREEN_HEIGHT * 0.3),
        height: SCREEN_HEIGHT * 0.13,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: "column",
        justifyContent: "center",
    },
    gardenDirt: {
        backgroundColor: Colors.brown,
        top: TOP + (SCREEN_HEIGHT * 0.3) + (SCREEN_HEIGHT * 0.13),
        height: SCREEN_HEIGHT * (1 - 0.43),
    },
    gardenWhite: {
        backgroundColor: Colors.cream,
        width: "100%",
        height: "70%",
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
    },
    gardenImage: {
        maxHeight: SCREEN_HEIGHT*0.3 - 2*MAIN_PADDING,
        maxWidth: "100%",
        margin: 0,
        padding: 0,
        resizeMode: "contain",
    }
});

export default GlobalStyles;
