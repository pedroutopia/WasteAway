import { Text, View, StyleSheet, Image } from "react-native";

import { FontAwesome } from '@expo/vector-icons';

const BoxEmpresas = (props) => {

    return (
        <>
            <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>
                    <View style={styles.cardImg}>
                        <Image source={props.imageUrl} style={styles.Img}/>
                    </View>
                    <View style={styles.cardText}>
                        <Text style={styles.nameEmpresa}>{props.Empresa}</Text>
                        <Text style={styles.avaibleText}><FontAwesome name="circle" size={12} color="#166809" /> Alimento disponível!</Text>
                    </View>
                </View>
            </View>
        </>
    )
};

export default BoxEmpresas;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 15,
        shadowColor: 'black',
    },
    cardImg: {
        width: '30%'
    },
    

    Img: {
        flex: 1,
        width: '100%',
        height: 90,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        resizeMode: 'cover',
    },
    cardText: {
        width: '70%',
        paddingLeft: 20,
        padding: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    nameEmpresa: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10,
    },
    avaibleText: {
        color: "#166809",
        fontWeight: 700,
    },
    shadowProp:{
        shadowColor: '#000',
    shadowOffset: {width: -2, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    }
})