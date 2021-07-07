import React from 'react';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';
import{Text,Image, View,
    //TouchableOpacity, // elemento de clique 
    //TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import{styles} from './styles';


//todas as propriedades de uma tpagem elas são obrigatórias, mas se colocar o ?, você define como opcional
// type Props= TouchableOpacityProps &{
//     title?: string;
// }
//ou
// interface Props {
//     title: string;
// }

 type Props= RectButtonProps &{
     title?: string;
 }
export function ButtonIcon( {title ,...rest} : Props){
    return(
        //activeOpacity define de 0 a 1 a opacidade na hora que clica no botao ex: activeOpacity={0.7} / porém você pode colocar essa propriedade no próprio botão
        <RectButton 
        style={styles.container} {...rest}
        >  
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}