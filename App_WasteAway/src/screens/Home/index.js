import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import BoxEmpresas from "../../components/BoxEmpresa";
import LogoTopo from "../../components/LogoTopo";

export function Home() {
    return (
        <>
            <SafeAreaView style={styles.container}>

                <LogoTopo/>
                <ScrollView style={styles.scrollContainer}>

                    <BoxEmpresas
                        Empresa={"ASSAÍ Atacadista"}
                        imageUrl={require('../../assets/assai_icon.png')}
                    ></BoxEmpresas>

                    <BoxEmpresas
                        Empresa={"Pão de Açúcar"}
                        imageUrl={require('../../assets/paodeacucar_icon.png')}
                    ></BoxEmpresas>

                    <BoxEmpresas
                        Empresa={"Carrefour"}
                        imageUrl={require('../../assets/carrefour_icon.png')}
                    ></BoxEmpresas>

                    <BoxEmpresas
                        Empresa={"Mix Matheus"}
                        imageUrl={require('../../assets/mixmatheus_icon.png')}
                    ></BoxEmpresas>

                    <BoxEmpresas
                        Empresa={"Atacarejo Recife"}
                        imageUrl={require('../../assets/atacarejo_icon.jpg')}
                    ></BoxEmpresas>

                    <BoxEmpresas
                        Empresa={"ASSAÍ Atacadista"}
                        imageUrl={require('../../assets/assai_icon.png')}
                    ></BoxEmpresas>

                    <BoxEmpresas
                        Empresa={"Atacarejo Recife"}
                        imageUrl={require('../../assets/atacarejo_icon.jpg')}
                    ></BoxEmpresas>

                    <BoxEmpresas
                        Empresa={"ASSAÍ Atacadista"}
                        imageUrl={require('../../assets/assai_icon.png')}
                    ></BoxEmpresas>

                </ScrollView>
            </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    scrollContainer: {
        width: '90%',
    },
})