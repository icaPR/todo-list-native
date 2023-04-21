import { Text, TextInput, View, Image } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      <View style={styles.downContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adcione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button}>
            <Icon name="add-circle-outline" color="#ffffff" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
