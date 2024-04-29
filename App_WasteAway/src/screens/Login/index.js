import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {

    const navigation = useNavigation()

    return (
        <>
            <SafeAreaView style={styles.container}>

                    <View style={styles.insideScroll}>
                        <View style={styles.mainContent}>

                            <View style={styles.inputsBox}>
                                <Text style={styles.inputTitle}>E-mail</Text>
                                <TextInput style={styles.placeHolder} placeholder='Digite seu e-mail...' placeholderTextColor="#FFF"></TextInput>

                                <Text style={styles.inputTitle}>Senha</Text>
                                <TextInput style={styles.placeHolder} secureTextEntry={true} placeholder='Digite sua senha...' placeholderTextColor="#FFF"></TextInput>
                                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                                <View style={styles.button}>

                                    <Text style={styles.buttonText}>Acessar</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.logoContainer}>
                            <View>
                                <Image style={styles.imgLogoPic} resizeMode='center' source={require('../../assets/WasteAway-logo-pictória-BRANCA.png')} />
                            </View>
                            <View>
                                <Image style={styles.imgLogoEsc} resizeMode='center' source={require('../../assets/WasteAway-logo-escrita-BRANCA.png')} />
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FA5F49",
        justifyContent: 'center',
        paddingRight: 30,
        paddingLeft: 30,
    },
    scrollContent: {
        flex: 1,
        justifyContent: 'center',
    },
    insideScroll: {
        height: 400,

    },
    mainContent: {
        padding: 20,
        height: 400,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '-20%',
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
        width: '100%',
        backgroundColor: '#FA5F49',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
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
        alignItems: 'center',
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

