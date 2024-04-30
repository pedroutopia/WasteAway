import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export function Cadastro() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <Text style={styles.title}>Cadastro</Text>
                    <Text style={styles.P}>NOME COMPLETO:</Text>
                    <TextInput placeholderTextColor="white" placeholder='digite seu nome completo...' style={styles.textInput} onChangeText={text => setName(text)} />
                    <Text style={styles.P}>CPF:</Text>
                    <TextInput placeholderTextColor="white" placeholder='digite seu CPF...' style={styles.textInput} onChangeText={text => setCpf(text)} />
                    <Text style={styles.P} > E-MAIL:</Text>
                    <TextInput placeholderTextColor="white" placeholder='digite seu E-mail...' style={styles.textInput} onChangeText={text => setEmail(text)} />
                    <Text style={styles.P}>SENHA:</Text>
                    <TextInput placeholderTextColor="white" secureTextEntry={true} placeholder='digite sua senha...' style={styles.textInput} onChangeText={text => setSenha(text)} />
                    <Text style={styles.P}>CONFIRME SUA SENHA:</Text>
                    <TextInput placeholderTextColor="white" secureTextEntry={true} placeholder='digite sua senha novamente...' style={styles.textInput} onChangeText={text => setConfirmacaosenha(text)} />
                    <Text style={styles.P}>TELEFONE:</Text>
                    <TextInput placeholderTextColor="white" placeholder='EX: (DDD) 9 0000-0000...' style={styles.textInput} onChangeText={text => setTelefone(text)} />


                    <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FA5F49',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },
    boxContainer: {
        width: "100%",
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    textInput: {
        width: '100%',
        padding: 10,
        backgroundColor: '#44436C',
        borderRadius: 20,
        marginBottom: 10,
    },
    btnCadastro: {
        width: '100%',
        height: 40,
        backgroundColor: '#FA5F49',
        borderRadius: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    P: {
        fontSize: 12,
        marginBottom: 5,
        color: '#44436C',
        fontWeight: 'bold',
    },

    decoration: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        height: 40,
    },
    decoration2: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        height: 40,
    },
});