import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar translucent={true}/>
      <View style={styles.containerFather}>

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

          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <Text style={styles.textDecoration}>OU</Text>
          <Text style={styles.textDecoration}>Login com</Text>

          <View style={styles.loginRedes}>
            <View>
              <Image source={require('./src/assets/Google.png')} />
            </View>
            <View style={styles.facebookImg}>
              <Image source={require('./src/assets/Facebook.png')} />
            </View>
          </View>

        </View>

      </View>

      </View>

    </>
  );
}

const styles = StyleSheet.create({
  containerFather: {
    backgroundColor: "#FA5F49",
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
  },
  title: {
    marginTop: 60,
    marginBottom: 40,
    fontSize: 30,
    color: '#FFF',
    fontWeight: '700',
  },
  container: {
    alignItems: 'center',

  },
  mainContent: {
    width: 350,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',

  },
  inputTitle: {
    fontSize: 18,
    width: 300,
    marginTop: 50

  },
  placeHolder: {
    height: 50,
    backgroundColor: '#44436C',
    borderRadius: 50,
    padding: 16,
    color: '#fff',
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    fontSize: 14,
    color: '#44436C',
    marginLeft: 150,
    marginBottom: 50,

  },
  button: {
    backgroundColor: '#FA5F49',
    alignItems: 'center',
    width: 150,
    padding: 10,
    borderRadius: 50,
    marginBottom: 30
  },
  buttonText: {
    color: '#FFF',
  },
  loginRedes: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
  },
  textDecoration: {
    color: '#8C8CB0',
    marginTop: 10,
    fontWeight: '800'
  },
  facebookImg: {
    marginLeft: 30,
  }
})

