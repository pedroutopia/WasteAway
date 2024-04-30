import { View, StyleSheet, Image } from "react-native";

const LogoTopo = () => {

    return (
        <>
            <View style={styles.containerLogo}>
                <View>
                    <Image style={styles.imgLogoPic} resizeMode='center' source={require('../assets/WasteAway-logo-pictória-azul-escuro.png')} />
                </View>
                <View>
                    <Image style={styles.imgLogoEsc} resizeMode='center' source={require('../assets/WasteAway-logo-escrita-AZUL.png')} />
                </View>
            </View>
        </>
    )
};

export default LogoTopo;

const styles = StyleSheet.create({
    containerLogo: {
        height: 100,
        width: '100%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        backgroundColor: '#A3DF99',
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
})