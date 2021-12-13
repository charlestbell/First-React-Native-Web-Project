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

  // console.log("CURRENT NOTE ", currentNote);
  // console.log("NOTES LIST ", JSON.stringify(notesList));
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Save a note</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={currentNote}
            onChangeText={inputChangeHandler}
            style={styles.input}
          />
          <Button title="save" onPress={saveNoteHandler} />
        </View>
        <FlatList
          style={{ flexGrow: 0 }}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.flatList}
          data={notesList}
          renderItem={(itemData) => <ListItem title={itemData.item.title} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    minWidth: 150,
  },
  content: {
    // height: 100,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 3,
  },
  flatList: {
    alignItems: "center",
  },
});
