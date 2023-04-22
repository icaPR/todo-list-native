import { Text, TextInput, View, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { Tasks } from "../../components/Task/index";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

type taskProps = {
  id: string;
  text: string;
  selected: boolean;
};

export default function Home() {
  const [countCreate, setcountCreate] = useState<number>(0);
  const [countComplete, setcountComplete] = useState<number>(0);
  const [text, setText] = useState("");
  const [task, setTask] = useState<taskProps[]>([]);

  function handleTaskAdd(text: string) {
    if (text != "") {
      if (task.filter((tasks) => tasks.id == text).length == 0) {
        const newTask = {
          id: text,
          text: text,
          selected: false,
        };
        setTask((task) => [...task, newTask]);
        setcountCreate(countCreate + 1);
      }
    }
  }
  function handleTaskRemove(id: string, checked: boolean) {
    const newTask = task.filter((tasks) => tasks.id != id);

    setTask(newTask);
    if (checked == true) {
      setcountComplete(countComplete - 1);
    } else {
      setcountCreate(countCreate - 1);
    }
  }
  function counTask(checked: boolean) {
    if (checked == false) {
      setcountCreate(countCreate - 1);
      setcountComplete(countComplete + 1);
    } else {
      setcountCreate(countCreate + 1);
      setcountComplete(countComplete - 1);
    }
  }
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
            onChangeText={setText}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTaskAdd(text)}
          >
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
        <View style={styles.list}>
          <FlatList
            data={task}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Tasks
                key={item.id}
                idTask={item.id}
                text={item.text}
                counTask={counTask}
                onRemove={handleTaskRemove}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.emptyAlert}>
                <Image source={require("../../../assets/Clipboard.png")} />
                <Text style={styles.alertEmptyText}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.alertEmptyTextSuggestion}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
