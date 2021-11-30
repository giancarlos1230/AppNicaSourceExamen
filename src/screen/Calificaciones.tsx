import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';

const Calificacion = ({ navigation }) => {

    const [dato, setDato] = useState<string>('')
    const [calis, setCalis] = useState<string[]>([])
    const [pripar, setPripar] = useState('')
    const [segpar, setSegpar] = useState('')
    const [nfinal, setNfinal] = useState<string[]>([])
    const [nfinales, setNfinales] = useState<string[]>([])

    let pass: number = 0
    let Validado = ''
    let reprobo = 'SD'

    const crear = () => {
        setCalis([...calis, dato])

        let notaFinal  = parseFloat(pripar) + parseFloat(segpar)
        pass = notaFinal  / 2
        validar()
    }

    const validar = () => {
        if (pripar === 'SD' || segpar === 'SD') {
            Validado = reprobo
            setNfinal([...nfinal, Validado])
        }
        if (pass >= 60) {
            setNfinal([...nfinal, pass.toString()])
        
        }
    }

   //useEffect(crear, [pripar, segpar])
    return (
        <ScrollView>
            <View>
                <Text style={styles.text}>Nombre del estudiante</Text>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Nombre del estudiante'}
                        onChangeText={setDato}
                    />
                </View>


                <View style={styles.Parciales}>
                    <FormInput
                        title={"IP"}
                        placeholder={"IP"}
                        onChangeText={setPripar} />

                    <FormInput
                        title={"IP"}
                        placeholder={"IP"}
                        onChangeText={setSegpar} />
                </View>

                <Text style={styles.text}> NF</Text>
                    <Text style={styles.NF}>{nfinal}</Text>
                   

                <TouchableOpacity
                    onPress={crear}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Agregar</Text>
                </TouchableOpacity>

                {
                    calis.map((calis, index) => (
                        <View style={styles.container} key={index} >
                            <Text style={styles.text}>{calis}</Text>
                            <Text style={[nfinales[index] < '60' ? styles.textReprobo : styles.textAprobar]}>Nota Final :{notaFinales[index]}</Text>

                        </View>
                    ))
                }

            </View>
        </ScrollView>

    )
}

export default Calificacion

const styles = StyleSheet.create({

    botonReset: {
        backgroundColor: '#8C8A8A',
        borderRadius: 8,
        width: '30%',
        paddingVertical: 7,
        marginTop: 5
    },

    textbotonReset: {
        color: '#05786A',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },

    Parciales: {

        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#8C8A8A',
        marginTop: 10,
    },

    NF: {

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
        fontSize: 24,
        color: '#05786A',
    },

    textReprobo: {
        fontSize: 24,
        color: '#B52222',
    },

    textAprobar: {
        fontSize: 24,
        color: '#05786A',
    },

    inputs: {
        borderRadius: 3,
        padding: 5,
        fontSize: 25,
        color: 'black',
    }
})
