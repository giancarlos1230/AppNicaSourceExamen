import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Calificacion = ({navigation}) => {

const [nota, setNota] = useState<string>('')
const [calis, setCalis] = useState<string[]>([])

const crear = () => {
    setCalis([...calis, nota])

}

    return (
        <ScrollView>

            <Text>Nombre del estudiante</Text>

        <View style={styles.container}> 

                <TextInput
                    style={styles.inputs}
                    placeholder={'Nombre del estudiante'}
                    onChangeText={setCalis}

                />
                {
                    calis.map((lista, index) => (
                        <View style={styles.container} key={index} >
                            <Text style={styles.text}></Text>
                        </View>
                    ))
                }
                  
        </View>
        </ScrollView>

    )
}

export default Calificacion

const styles = StyleSheet.create({

  
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: '#C4C4C4',
        marginTop: 30,

    },
    text: {
        fontSize: 20,
        color: 'yellow'
    },

    inputs: {
        borderRadius: 3,
        padding: 5,
        fontSize: 20,
        color: 'black',
        width: '80%'

    }
})
