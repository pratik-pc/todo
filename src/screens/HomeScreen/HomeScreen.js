import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ScrollView } from "react-native";
import Task from "../../components/Task";
import axios from "axios";




const HomeScreen = () => {

  const getPosts = () => {
    fetch("http://localhost.com:8000/users/1")
      .then((res) => res.json())
      .then(resJson => {
        console.log('data', resJson)
      }).catch(e => (console.log(e)))
  }

  useEffect(() => {
    getPosts();
  }, [])


  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.tasksWrapper}>
      <Text style={styles.title}>Today's task</Text>
        <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return <TouchableOpacity key={index} onPress={() => deleteTask(index)}><Task text={item} /></TouchableOpacity>
          })
        }




        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  tasksWrapper:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  },
  items: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 100,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 280,
  },
  addWrapper: {
    backgroundColor: 'pink',
    flex: 1,
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText:{

  }
})

export default HomeScreen