import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {

    const navigation = useNavigation()

    return (
        <>

            <View style={styles.containerFather}>
                    <View style={styles.mainContent}>

                        <View style={styles.inputsBox}>
                            <Text style={styles.inputTitle}>E-mail</Text>
                            <TextInput style={styles.placeHolder} placeholder='Digite seu e-mail...' placeholderTextColor="#FFF"></TextInput>

                            <Text style={styles.inputTitle}>Senha</Text>
                            <TextInput style={styles.placeHolder} secureTextEntry={true} placeholder='Digite sua senha...' placeholderTextColor="#FFF"></TextInput>
                            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                                <Text style={styles.buttonText}>Acessar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={styles.logoContainer}>
                            <View>
                                <Image style={styles.imgLogoPic} resizeMode='center' source={require('../assets/WasteAway-logo-pictória-BRANCA.png')} />
                            </View>
                            <View>
                                <Image style={styles.imgLogoEsc} resizeMode='center' source={require('../assets/WasteAway-logo-escrita-BRANCA.png')} />
                            </View>
                        </View>
                    </View>
            </View>


        </>
    );
}

const styles = StyleSheet.create({

    containerFather: {
        flex: 1,
        backgroundColor: "#FA5F49",
        justifyContent: 'center',
        padding: 30,
    },
    mainContent: {
        padding: 20,
        paddingVertical: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputsBox: {
        width: '100%',
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,

    },
    placeHolder: {
        height: 50,
        backgroundColor: '#44436C',
        borderRadius: 50,
        padding: 16,
        color: '#fff',
        marginBottom: 50,
        fontWeight: '500',
    },
    forgotPassword: {
        textDecorationLine: 'underline',
        fontSize: 14,
        color: '#44436C',
        alignSelf: 'flex-end',
        marginBottom: 40,
        marginTop: -40,

    },
    button: {
        width: '60%',
        backgroundColor: '#FA5F49',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
    },
    logoContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogoPic: {
        height: 50,
        width: 50,
    },
    imgLogoEsc: {
        height: 50,
        width: 200,
    }
})

