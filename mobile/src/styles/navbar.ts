import { StyleSheet } from "react-native"

export const navbarStyles = StyleSheet.create({
    navbar: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "#E7C8C8",
        width: "90%",
        height: "5%",
        borderRadius: 50,

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
        width: 40,
        height: 40,
        marginBottom: 20
      }

})


