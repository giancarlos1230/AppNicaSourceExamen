import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';

const Calificacion = ({ navigation }) => {

    const [dato, setDato] = useState<string>('')
    const [calis, setCalis] = useState<string[]>([])
    const [pripar, setPripar] = useState('')
    const [segpar, setSegpar] = useState('')
    const [nfinales, setNfinales] = useState<string[]>([])
    const [nfinal, setNfinal] = useState<string>('')


    let pass: number = 0
    let Validado = ''
    let reprobo = 'SD'

    const crear = () => {
        setCalis([...calis, dato])

        let nfinal = parseFloat(pripar) + parseFloat(segpar)
        pass = nfinal / 2
        validar()
        setNfinal(pass.toPrecision())
    }

    const validar = () => {
        if (pripar === 'SD' || segpar === 'SD') {
            Validado = reprobo
            setNfinales([...nfinales, Validado])
        }
        else {
            setNfinales([...nfinales, pass.toString()])
        }
    }

    return (
        <View style={styles.containerBase}>
            <Text style={styles.texthead}>Nombre del estudiante</Text>
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
                    title={"IIP"}
                    placeholder={"IIP"}
                    onChangeText={setSegpar} />

                <View>
                    <Text style={styles.text}> NF</Text>
                    <Text style={styles.NF}>{nfinal}</Text>
                </View>

                <TouchableOpacity
                    onPress={crear}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Agregar</Text>
                </TouchableOpacity>

            </View>
            <ScrollView>
                {
                    calis.map((calis, index) => (
                        <View style={styles.container} key={index} >
                            <Text style={styles.text}>{calis}</Text>
                            <Text style={[nfinales[index] < '60' ? styles.textReprobo : styles.textAprobar]}>Nota Final :{nfinales[index]}</Text>

                        </View>
                    ))
                }

            </ScrollView>
        </View>

    )
}

export default Calificacion

const styles = StyleSheet.create({

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
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'
    },

    texthead: {
        fontSize: 30,
        color: '#034C50',
        marginTop: 50,
        marginLeft: 10
    },

    containerBase: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },

    botonReset: {
        backgroundColor: '#8C8A8A',
        borderRadius: 8,
        width: '30%',
        paddingVertical: 7,
        marginTop: 5
    },

    container: {
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
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        fontSize: 22,
        color: '#034C50',
        width: '70%'
    }
})
