import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const styles= StyleSheet.create({
    container:{
        flex:1,

    },
    header:{
        width: '100%',
        padding: 24,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:getStatusBarHeight() + 26,  // para adc a barra do iphone, no caso do android ele desconsidera esse elemento
        marginBottom:42
    },
    matches:{
        marginTop:24,
        marginLeft:24,
        
    }
})