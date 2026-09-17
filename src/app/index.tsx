// importamos os comandos do react native

import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';
import{ useState } from 'react';

export default function HomeScreen( ){{/*começo homescreen*/}
  const [tarefa, setTarefa]= useState('');
  const [tarefas,setTarefas]= useState([
    { id: 1, texto: 'Estudar React-Native', concluida: false },
    { id: 2, texto: 'Aprender useState', concluida: false },
  ]);

  function adicionar( ){
   if (!tarefa.trim()) return;

   const novaTarefa = {
     id: Date.now(),
     texto: tarefa,
     concluida: false,
   };

   setTarefas([...tarefas, novaTarefa]);
   setTarefa('');
  }
  return(
    <View style={styles.container }>{/*abertura da view style*/}
      <Text style={styles.title}>Gerenciador de Tarefas </Text>

      <TextInput style={styles.input}
        placeholder = 'Digite uma tarefa'
        value= {tarefa}
        onChangeText={setTarefa}/>

      {tarefas.map((item) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity key={item.id} onPress={() => concluirTarefa(item.id)}>
          <Text style={[styles.item, item.concluida && styles.itemConcluido]}>
            {item.texto}
         </Text>
         </TouchableOpacity>
        
        </View>
        
 
      ))},
    </View> //fechamneto da view
  );

  function concluirTarefa(id: number) {
  setTarefas(
    tarefas.map((item) =>
      item.id === id ? { ...item, concluida: !item.concluida } : item
    )
  );
  }

  function excluirTarefa(id: number) {
  setTarefas(tarefas.filter((item) => item.id !== id));
  }


}{/*fim homescreen*/}

//configurando

const styles=StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  itemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
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
  item:{
    fontSize:16,
    marginTop: 10,
  },
  itemConcluido: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
  botaoExcluir:{
    fontSize: 18,
    color: '#e53935',
    paddingHorizontal: 10,
  },
  botaoAdicionar: {
 
  },
  botaoAdicionarTexto: {
 
  },
  contador: {
 
  },
  })