import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

export function Tasks(text: string) {
  const [selected, setSelected] = useState<boolean>(false);

  function toggle(selected: boolean) {
    setSelected(!selected);
  }
  if (selected == false) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.checkboxUnchecked}
          onPress={() => toggle(selected)}
        ></TouchableOpacity>
        <Text style={styles.textTask}>{text}</Text>
        <Icon name="trash-2" color="#808080" size={18} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.checkboxChecked}
          onPress={() => toggle(selected)}
        >
          <Icon name="check" color="#F2F2F2" size={12} />
        </TouchableOpacity>
        <Text style={styles.textTaskComplete}>{text}</Text>
        <Icon name="trash-2" color="#808080" size={18} />
      </View>
    );
  }
}
