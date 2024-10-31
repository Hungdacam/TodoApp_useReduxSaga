import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, addTodo, updateTodo, deleteTodo } from "../redux/actions";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const {todos, loading, error} = useSelector((state)=>state);

  useEffect(()=>{
    dispatch(fetchTodo());
  },[dispatch]);

  const handleAddOrUpDate= ()=>{
    if (!title.trim()){
      alert("Please enter a valid title");
      return;
    }
    if (selectedItem){
      dispatch(updateTodo({...selectedItem, title}));
      setSelectedItem(null);
    } else {
      dispatch(addTodo({title}));
    }
    setTitle("");
  };
  
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setTitle(item.title);
  };

   const handleDelete = () => {
    if (selectedItem) {
      dispatch(deleteTodo(selectedItem.id));
      setSelectedItem(null);
      setTitle("");
    } else {
      alert("Select an item to delete");
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List App</Text>
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter a todo item"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title={selectedItem ? "Update" : "Add"} onPress={handleAddOrUpdate} />
        <Button title="Delete" onPress={handleDelete} />
      </View>
      <ScrollView>
        {todos.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleSelectItem(item)} style={styles.dataItem}>
            <Text style={styles.dataText}>{item.id}: {item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dataItem: {
    padding: 10,
    borderBottomWidth: 1,
  },
  dataText: {
    fontSize: 18,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});