import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Platform,
} from "react-native";

const ListItem = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default function App() {
  const [currentNote, setCurrentNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  const inputChangeHandler = (text) => {
    setCurrentNote(text);
  };

  const saveNoteHandler = () => {
    setNotesList([{ title: currentNote }, ...notesList]);
  };

  console.log("CURRENT NOTE ", currentNote);
  console.log("NOTES LIST ", JSON.stringify(notesList));
  return (
    <View style={styles.container}>
      <Text>Save a note</Text>
      <View style={styles.inputContainer}>
        <TextInput value={currentNote} onChangeText={inputChangeHandler} />
        <Button title="save" onPress={saveNoteHandler} />
      </View>
      <FlatList
        keyExtractor={(item) => item.title}
        style={{ width: "100%" }}
        contentContainerStyle={styles.flatList}
        data={notesList}
        renderItem={(itemData) => <ListItem title={itemData.item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 2,
  },
  container: {
    flex: 1,
    height: Platform.OS === "web" ? "100vh" : "100%",

    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    justifyContent: "center",
  },
});
