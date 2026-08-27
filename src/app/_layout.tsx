//importar o componente que controloa a navegação (rotas)
import{ Stack } from 'expo-router';

export default function Layout( ){
  return(
    <Stack>
      <Stack.Screen
      name='index'
      options={{
        title: "Agendador de tarefas",
      }}/>
      <Stack.Screen
      name='nova-tarefa'
      options={{
      title: "Nova tarefa",
      }}/>

    </Stack>
  );
}