import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

type taskProps = {
  idTask: string;
  text: string;
  counTask: (selected: boolean) => void;
  onRemove: (id: string, checked: boolean) => void;
};

export function Tasks({ idTask, text, counTask, onRemove }: taskProps) {
  const [countCreate, setcountCreate] = useState<number>(0);
  const [countComplete, setcountComplete] = useState<number>(0);
  const [checked, setchecked] = useState<boolean>(false);

  function toggle(checked: boolean) {
    setchecked(!checked);
    if (checked == true) {
      countCreate - 1;
      setcountCreate(countCreate);
      countComplete + 1;
      setcountComplete(countComplete);
      counTask(checked);
    } else {
      countCreate + 1;
      setcountCreate(countCreate);
      countComplete - 1;
      setcountComplete(countComplete);
      counTask(checked);
    }
  }

  if (checked == false) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.checkboxUnchecked}
          onPress={() => toggle(checked)}
        ></TouchableOpacity>
        <Text style={styles.textTask}>{text}</Text>
        <TouchableOpacity onPress={() => onRemove(idTask, checked)}>
          <Icon name="trash-2" color="#808080" size={18} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.checkboxChecked}
          onPress={() => toggle(checked)}
        >
          <Icon name="check" color="#F2F2F2" size={12} />
        </TouchableOpacity>
        <Text style={styles.textTaskComplete}>{text}</Text>
        <TouchableOpacity onPress={() => onRemove(idTask, checked)}>
          <Icon name="trash-2" color="#808080" size={18} />
        </TouchableOpacity>
      </View>
    );
  }
}
