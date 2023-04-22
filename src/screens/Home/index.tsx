import { Text, TextInput, View, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { Tasks } from "../../components/index";
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
        <View style={styles.list}>
          <FlatList
            data={[]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Tasks />}
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
