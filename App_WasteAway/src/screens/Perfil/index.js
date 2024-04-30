import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } 
from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Perfil() {
    const [editing, setEditing] = useState(false);
    const [nome, setNome] = useState('Peu do Ovo');

    const navigation = useNavigation()
    const handleEditarPerfil = () => {
        setEditing(!editing);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.userInfoContainer}>
                    <Image source={require('../../assets/Perfil.png')} style={styles.profileImage} />
                    <Text style={styles.greetingText}>Olá, <Text style={styles.userName}>{nome}</Text>!</Text>
                </View>
                    <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonWithText} onPress={() => { }}>
                            <Image source={require('../../assets/local.png')} style={styles.imageButton} />
                            <Text style={styles.buttonText}>Meus Endereços</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonWithText} onPress={() => { }}>
                            <Image source={require('../../assets/avaliar.png')} style={styles.imageButton} />
                            <Text style={styles.buttonText}>Avaliação</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonWithText} onPress={() => { }}>
                            <Image source={require('../../assets/Doar.png')} style={styles.imageButton} />
                            <Text style={styles.buttonText}>Doações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonWithText} onPress={handleEditarPerfil}>
                            <Image source={require('../../assets/editar.png')} style={styles.imageButton} />
                            <Text style={styles.buttonText}>Editar Perfil</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity style={[styles.buttonWithText, styles.singleButton]} onPress={() => navigation.navigate('Config')}>
                        <Image source={require('../../assets/configs.png')} style={styles.imageButton} />
                        <Text style={styles.buttonText}>Configurações do Aplicativo</Text>
                    </TouchableOpacity>
                </View>
                </View>                
            </View>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#44436C',
        width: width > 500 ? '60%' : '90%', // Adjusting width based on screen size
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 55,
    },
    profileImage: {
        width: 70,
        height: 70,
        marginRight: 10,
    },
    greetingText: {
        fontSize: 18,
        color: '#44436C',
    },
    userName: {
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    buttonWithText: {
        alignItems: 'center',
        flex: 1,
        marginBottom: 15,
    },
    singleButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        marginTop: 5,
        fontSize: 12,
        color: '#44436C',
        textAlign: 'center',
    },
    imageButton: {
        width: 55,
        height: 55,
    },
    invisibleBox: {
        width: 200,
        height: 200,
        opacity: 0,
    },
});