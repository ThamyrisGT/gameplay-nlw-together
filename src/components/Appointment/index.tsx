import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import { GuildProps } from "../Guild";
import { styles } from "./styles";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { theme } from "../../global/styles/theme";

export type AppointmentProps = {
  id: string;
  guild: GuildProps; //   quando escreve logo depois em maiúsculo é para poder chamar como componente
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};
export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category); // em forma de vetor porque ele vai retornar uma coleção de um elemento só e ai você pega a primeira posição
  const { owner } = data.guild;
  const { primary, on,secondary50,secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient 
        style={styles.guildIconContainer}
        colors={[secondary50,secondary70 ]}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}

// OBS: quando quiser fazer o preenchimento de algum arquivo svg pelo react, não deixar a propriedade fill na foto
// se não, sempre irá manter o que foi definido no arquivo
