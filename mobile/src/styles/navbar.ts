import { StyleSheet } from "react-native"

export const navbarStyles = StyleSheet.create({
    navbar: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "#F2F2F2",
        width: "100%",
        height: "10%",
        borderTopColor: "#A8A8A8",
        borderTopWidth: 1,

        display: "flex",
        alignSelf: "center",
        alignContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      },
    
      navbarImage: {
        opacity: 0.7,
        width: 35,
        height: 35,
      },

      navbarImageSelected: {
        opacity: 1,
        width: 37,
        height: 37,
        tintColor: "#54A8E8"
      }

})


