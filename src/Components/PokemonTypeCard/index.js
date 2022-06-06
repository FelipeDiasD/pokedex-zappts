import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ReturnColor from "../../Utilites/Colors";

export default function ({ text, size }) {
  const typeColor = ReturnColor(text);

  return (
    <View style={styles(typeColor, size).container}>
      <Text style={styles().cardText}>{`${text}`}</Text>
    </View>
  );
}

const styles = (typeColor, size) =>
  StyleSheet.create({
    container: {
      width: `${size}`,
      //height: 16,
      borderRadius: 38,
      backgroundColor: `${typeColor}`,
      marginTop: 2,
      marginBottom: 4,
      alignItems: "center",
      justifyContent: "center",
      padding: 2,
      //borderColor: 'black',
      //borderWidth: 0.5,

      shadowColor: `black`,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 3.84,

      elevation: 5,
    },

    cardText: {
      textTransform: "capitalize",
      color: "#FFF",
    },
  });
