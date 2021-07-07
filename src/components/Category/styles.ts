import { Inter_700Bold } from '@expo-google-fonts/inter';
import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles= StyleSheet.create({
    container:{
        width: 104,
        height: 120,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:8,
        marginRight:8
    },
    content:{
        width: 100,
        height: 116,
        //backgroundColor:theme.colors.secondary40,
        borderRadius:8,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 20
    },
    title:{
        fontFamily:theme.fonts.title700,
        color: theme.colors.heading,
        fontSize:15,
        marginTop:15
    },
    check:{
        width: 12,
        height: 12,
        position: 'absolute',  // ele nao faz "quebrar" a posição fica absoluta
        top:7,
        right:7,
        backgroundColor:theme.colors.secondary100,
       // alignSelf:'flex-end',
        //marginRight:7,
        borderColor:theme.colors.secondary50,
        borderWidth:2,
        borderRadius:3
    },
    checked:{
        width: 10,
        height: 10,
        position: 'absolute', 
        top:7,
        right:7,
        backgroundColor:theme.colors.primary,
       // alignSelf:'flex-end',
        //marginRight:7,
        borderRadius:3
    }

});