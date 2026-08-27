// importamos os comandos do react native

import {View, Text, TextInput, StyleSheet} from 'react-native';
import{ useState } from 'react';

export default function HomeScreen( ){
  const[tarefas, setTarefas]= useState('');
  const[tarefas,setTarefas]= useState([
    "estudar React Native"
    "Aprenda a usarState",
    "criar a primeria tela",;
  ]);
  function adicionarTarefa( ){
    if(!tarefas.trim())
      return;
    setTarefas([...tarefas,tarefa])
  }
  return(
    <View style={styles.container }>
      <Text style={styles.container }>Gerenciador de Tarefas </Text>

      <TextInput placeholder='Digite uma tarefa'/>

    </View>
  );
}

//configurando

const styles=StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input:{
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
})