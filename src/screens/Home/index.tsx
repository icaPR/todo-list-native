import { Text, TextInput, View, Image } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Home() {
  const [countCreate, setcountCreate] = useState<Number>(0);
  const [countComplete, setcountComplete] = useState<Number>(0);

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
        <View style={styles.info}>
          <View style={styles.infoCreate}>
            <Text style={styles.textCreate}>Criadas</Text>
            <Text style={styles.numberInfo}>{countCreate}</Text>
          </View>
          <View style={styles.infoComplete}>
            <Text style={styles.textComplete}>Concluídas</Text>
            <Text style={styles.numberInfo}>{countComplete}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
