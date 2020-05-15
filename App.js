import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  //console.log(Dimensions.get("screen"));
  const [inputState, setInputState] = useState("");
  const [outputList, setOutputList] = useState([]);
  const handleInput = (e) => {
    setInputState(e);
  };
  const onAddPress = () => {
    if (inputState === "") {
      return;
    }
    setOutputList((input) => [
      ...input,
      { id: Math.random().toString(), value: inputState },
    ]);
  };
  const onCancelPress = () => {
    setInputState("");
  };
  const onDelete = (inputId) => {
    setOutputList((deleteInput) => {
      return deleteInput.filter((item) => item.id !== inputId);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Google"
          onChangeText={handleInput}
          style={styles.input}
          value={inputState}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onAddPress} style={styles.button}>
            <Text
              style={{
                color: "dodgerblue",
              }}
            >
              ADD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancelPress} style={styles.button}>
            <Text
              style={{
                color: "red",
              }}
            >
              CANCEL
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={outputList}
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() => onDelete(itemData.item.id)}
            activeOpacity={0.5}
          >
            <View style={styles.outputList1}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    padding: 5,
    borderRadius: 50,
  },
  button: {
    color: "blue",
    height: 35,
    width: 60,
    //borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
  },
  outputList1: {
    padding: 6,
    marginVertical: 6,
    backgroundColor: "lightblue",
    borderWidth: 1,
  },
});
