import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.container}>

        <View style={styles.mainContent}>
          
          <View style={styles.inputsBox}>
          <Text style={styles.inputTitle}>E-mail</Text>
          <TextInput style={styles.placeHolder} placeholder='Digite seu e-mail...' placeholderTextColor="#FFF"></TextInput>

          <Text style={styles.inputTitle}>Senha</Text>
          <TextInput style={styles.placeHolder} placeholder='Digite sua senha...' placeholderTextColor="#FFF"></TextInput>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

        </View>

      </View>

    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  title: {
    marginVertical: 50,
    fontSize: 30,
  },
  container: {
    display: 'flex',
    alignItems: 'center',

  },
  mainContent: {
    width: 350,
    padding: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  inputTitle: {
    fontSize: 18,
    width: 300,

  },
  placeHolder: {
    height: 50,
    backgroundColor: '#44436C',
    borderRadius: 50,
    padding: 16,
    color: '#fff',
    marginBottom: 30,
  },
  button:{
    backgroundColor: '#FA5F49',
    alignItems: 'center',
    width: 150,
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: '#FFF',
  }
})

