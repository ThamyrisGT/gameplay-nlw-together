import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {AppointmentDetails} from '../screens/AppointmentDetalis';
import {AppointmentCreate} from '../screens/AppointmentCreate';



import { theme } from '../global/styles/theme';

const{Navigator,Screen}= createStackNavigator ();  

export function AppRoutes(){
    return(
        // aqui definimos o que queremos do elemento Navigator para não subescrever nossas configurações
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle:{
                backgroundColor:theme.colors.secondary100
                }
            }}
        >
              <Screen
            name="Home"
            component={Home} 
            />
              <Screen
            name="AppointmentDetails"
            component={AppointmentDetails} 
            />
            <Screen
            name="AppointmentCreate"
            component={AppointmentCreate} 
            />
        </Navigator>
    )
}