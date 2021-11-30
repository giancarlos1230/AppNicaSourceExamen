import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Calificacion = ({ navigation }) => {

    const [nota, setNota] = useState<string>('')
    const [calis, setCalis] = useState<string[]>([])

    const crear = () => {
        setCalis([...calis, nota])

    }

    return (
        <ScrollView>
            <View>
                <Text style={styles.text}>Nombre del estudiante</Text>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Nombre del estudiante'}
                        onChangeText={setNota}
                    />
                </View>
                <View style={styles.boton}
>

                    <Button
                    
                        color="#05786A"
                        title="Agregar"
                        onPress={crear} />

                </View>


                <Text style={styles.text}>1P</Text>
            <View style={styles.IP}>
                <TextInput
                    style={styles.inputs}
                    placeholder={'1P'}
                // onChangeText={setCalis}
                />
</View>


                {/* <Text style={styles.text}>IIP</Text>
                <View style={styles.IIP}>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'IIP'}
                    // onChangeText={setCalis}
                    />
                </View>

                <Text style={styles.text}>IIIP</Text>
                <View style={styles.IIIP}>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'IIP'}
                    // onChangeText={setCalis}
                    />
                </View> */}

                {
                    calis.map((lista, index) => (
                        <View style={styles.container} key={index} >
                            <Text style={styles.text}>{lista}</Text>
                        </View>
                    ))
                }

            </View>
        </ScrollView>

    )
}

export default Calificacion

const styles = StyleSheet.create({

    

    IP: {

        width: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: '#8C8A8A',
    },

    // IIP: {

    //     width: '30%',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: 10,
    //     paddingVertical: 8,
    //     paddingHorizontal: 8,
    //     marginLeft: 10,
    //     borderWidth: 2,
    //     borderColor: '#8C8A8A',
    // },

    // NF: {

    //     width: '15%',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: 10,
    //     paddingVertical: 10,
    //     paddingHorizontal: 8,
    //     marginLeft: 10,
    //     borderWidth: 2,
    //     borderColor: '#8C8A8A',
    // },

    separator: {
        marginVertical: 8,
        borderBottomColor: "#737373",
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

    boton: {
        backgroundColor: '#8C8A8A'
    },

    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: '#8C8A8A',
        marginTop: 1,

    },
    text: {
        fontSize: 20,
        color: '#05786A',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    inputs: {
        borderRadius: 3,
        padding: 5,
        fontSize: 25,
        color: 'black',
    }
})
