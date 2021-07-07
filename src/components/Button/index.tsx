import React from 'react';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';
import{Text} from 'react-native';
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
export function Button( {title ,...rest} : Props){
    return(
        //activeOpacity define de 0 a 1 a opacidade na hora que clica no botao ex: activeOpacity={0.7} / porém você pode colocar essa propriedade no próprio botão
        <RectButton 
        style={styles.container} {...rest}
        >  
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}