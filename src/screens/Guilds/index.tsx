import React from 'react';
import { View,FlatList} from 'react-native';
import { styles } from './styles';
import {Guild, GuildProps} from '../../components/Guild';
import {ListDivider} from '../../components/ListDivider';

type Props={
    handleGuildsSelect:(guild:GuildProps) =>void;
}
export function Guilds({handleGuildsSelect}:Props) {
    const guilds =[
        {
            id:'1',
            name:"Lendários",
            icon:'image.png',
            owner:true
        },
        {
            id:'2',
            name:"Gamers",
            icon:'image.png',
            owner:true
        }
    ];
    
    return(
        <View style={styles.container}>
            <FlatList
            data={guilds}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
                <Guild
                data={item}
                onPress={()=>handleGuildsSelect(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=> <ListDivider isCentered/>}
            ListHeaderComponent={() => <ListDivider isCentered/>}
            contentContainerStyle={{paddingBottom:68, paddingTop:103}}
            style={styles.guilds}
            />

        </View>
    );
}
