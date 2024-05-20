import { StatusBar } from "expo-status-bar";
import {
  db,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
} from "./firebaseConfig";
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./src/components/Button";
import CardNote from "./src/components/CardNote";
import { doc } from "firebase/firestore";

type TNotes = {
  id?: string;
  value: string;
};

export default function App() {
  const [notes, setNotes] = useState<TNotes[]>([]);
  const [noteInput, setNoteInput] = useState<string>("");
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        value: noteInput,
      });
      console.log("Document written with ID: ", docRef.id);
      setNoteInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readData = async () => {
    const unsub = onSnapshot(collection(db, "notes"), (snapshot) => {
      if (snapshot.docs.length === 0) {
        setNotes([]);
      }
      const updatedNotes = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          value: doc.data().value,
        };
      });
      setNotes(updatedNotes);
      return () => unsub();
    });
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "notes", id));
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Notes App ODP BNI</Text>
      <View style={styles.bodyContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a note..."
          value={noteInput}
          onChangeText={(e: string) => setNoteInput(e)}
        />
        <StatusBar style="auto" />

        <Button
          buttonTitle="Add"
          customStyle={{ marginTop: 20 }}
          onPress={() => addData()}
        />
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <CardNote
              noteText={item.value}
              onPress={() => handleDelete(item.id!)}
            />
          )}
          contentContainerStyle={{ gap: 10 }}
          style={{ marginTop: 24 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textTitle: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
  bodyContainer: {
    paddingHorizontal: 20,
    marginTop: 28,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 48,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
