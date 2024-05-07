import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../utils/i18n'

import {} from 'react-i18next'

import { useTranslation } from 'react-i18next';

export default function Login() {

    const {t, i18n} = useTranslation();

    const navigation = useNavigation()

    const changeLang = value => {
        i18n.changeLanguage(value)
        .then( () => {
            console.log('LINGUAGEM ALTERADA')
        })
        .catch( (err) => {
            console.log(err)
        })
    }

    return (
        <>
            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.screenTitle}>Login</Text>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.buttonLang} onPress={() => changeLang('pt')}>
                        <Text style={styles.textLang}>
                            {t('Português')}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLang} onPress={() => changeLang('en')}>
                        <Text style={styles.textLang}>
                            {t('Inglês')}
                        </Text>
                    </TouchableOpacity>
                </View>
                        <View style={styles.mainContent}>

                            <View style={styles.inputsBox}>
                                <Text style={styles.inputTitle}>
                                    {t('E-mail')}
                                </Text>
                                <TextInput style={styles.placeHolder} placeholder={t('Digite seu e-mail...')} placeholderTextColor="#FFF"></TextInput>

                                <Text style={styles.inputTitle}>
                                    {t('Senha')}
                                </Text>
                                <TextInput style={styles.placeHolder} secureTextEntry={true} placeholder={t('Digite sua senha...')} placeholderTextColor="#FFF"></TextInput>
                                <Text style={styles.forgotPassword} onPress={() => navigation.navigate('Cadastro')}>{t('Cadastrar-se')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                                <View style={styles.button}>

                                    <Text style={styles.buttonText}>
                                        {t('Acessar')}
                                    </Text>

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
    screenTitle:{
        alignSelf: 'center',
        color: 'white',
        fontSize: 50,
        fontWeight: '600',
    },
    mainContent: {
        padding: 20,
        height: 400,
        backgroundColor: '#FFF',
        borderRadius: 10,
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
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    buttonLang: {
        backgroundColor: 'orange',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    textLang: {
        color: 'white',
        fontWeight: 'bold',
    }
})