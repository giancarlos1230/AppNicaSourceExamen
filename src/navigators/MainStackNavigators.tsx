import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calificacion from '../screen/Calificaciones';

const Stack = createNativeStackNavigator();


const MainStackNavigators = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Calificar">
        <Stack.Screen name="Calificar" component={Calificacion}

        options={{
          title: 'Calificaciones',
          headerStyle: {
            backgroundColor: '#8C8A8A',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MainStackNavigators

const styles = StyleSheet.create({})
