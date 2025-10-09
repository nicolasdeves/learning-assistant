import { StyleSheet } from "react-native"

export const headerStyles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 30,
        marginRight: 30
    },

    headerUserImage: {
        width: 60,
        height: 60,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#CFF5FF",
    },

    headerCalendarIcon: {
        width: 60,
        height: 60,
        transform: [{ scaleX: -1 }],
    }
})


